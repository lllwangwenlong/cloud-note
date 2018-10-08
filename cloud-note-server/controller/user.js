const {Router} = require('express')
const router =  Router()
const userModel = require('../model/user')

router.post('/user', (req, res) => {
    const {username, password, email} = req.body
    const avatarNumber = Math.ceil(Math.random()*8)
    const avatar = `http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`
    if(!email) {
        res.json({
            code: 400,
            msg: '缺少必要参数',
        })
    }else {
        userModel.findOne({email}).then(data => {
            if(data) {
                res.json({
                    code: 400,
                    msg: '该邮箱已被注册',
                })
            }else {
                userModel.create({username, password, email, avatar}).then(data => {
                    res.json({
                        code: 200,
                        msg: '注册成功',
                        data
                    })
                })
            }
        })
    }
})

router.post('/login', (req, res) => {
    let {email, password} = req.body;
    userModel.findOne({email}).then(data => {
        if(!data) {
            res.json({
                code: 401,
                msg: '用户不存在!'
            })
        }else if(password&&password !== data.password) {
            res.json({
                code: 401,
                msg: '密码不正确!'
            })
        }else {
            req.session.user = data
            res.json({
                code: 200,
                msg: '登陆成功',
                data
            })
        }
    })
})

router.get('/logout', (req, res) => {
    if(req.session.user) {// 如果原来已经存在登录状态
        req.session.user = null
        res.json({
            code : 200,
            msg: '退出登录成功'
        })
    }else {
        res.json({
            code : 403,
            msg: '用户未登陆'
        })
    }
})

module.exports = router