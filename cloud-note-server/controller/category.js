const {Router} = require('express')
const router =  Router()
const categoryModel = require('../model/category')

router.get('/category', (req, res) => {
    categoryModel.find().then(data => {
        res.json({
            code: 200,
            data
        })
    })
})

router.delete('/category/:id', (req, res) => {
    let {id} = req.params
    categoryModel.deleteOne(id).then(data => {
        res.json({
            code: 200,
            msg: '删除分类成功',
            data
        })
    })
})

router.post('/category', (req, res) => {
    let {name} = req.body
    categoryModel.create({name}).then(data => {
        res.json({
            code: 200,
            msg: '分类添加成功',
            data
        })
    })
})

module.exports = router