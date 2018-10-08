const {Router} = require('express')
const router =  Router()
const articleModel = require('../model/article')
const categoryModel = require('../model/category')

router.post('/article', (req, res) => {
    const {title, content, contentText, category} = req.body
    if(req.session.user) {
        if(title) {
            articleModel.create({
                title,
                content,
                contentText,
                category,
                author: req.session.user._id
            }).then(data => {
                res.json({
                    code: 200,
                    msg: '笔记发布成功',
                    data
                })
            })
        }
    }else {
        res.json({
            code: 403,
            msg: '未登录状态下不能发表笔记'
        })
    }
})

router.get('/article/:id', (req, res) => {
    let {id} = req.params
    articleModel.findById(id)
        .populate({
            path: 'author',
            select: '-password'
        })
        .populate({
            path: 'category'
        })
        .then(data => {
        res.json({
            code: 200,
            data
        })
    })
})

router.get('/article', (req, res) => {
    let {pn, size} = req.query
    pn = parseInt(pn)
    size = parseInt(size)
    articleModel.find()
        .skip((pn-1)*size)
        .limit(size)
        .sort({_id: -1})
        .populate({
            path: 'author',
            select: '-password'
        })
        .populate({
            path: 'category'
        })
        .then(data => {
            res.json({
                code: 200,
                data
            })
    })
})

module.exports = router