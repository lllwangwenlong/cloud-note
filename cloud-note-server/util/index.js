const {Router} = require('express');
const router = Router();
const users = require('../database/model/users')

router.post('/login', (req, res) => {
    let {email, password} = req.body;
    users.findOne({email}).then(data => {
        if(!data) {
            res.json({
                code: 401,
                msg: '用户不存在!'
            })
        }else if(data.password != password) {
            res.json({
                code: 401,
                msg: '密码不正确!'
            })
        }else if(data) {
            res.json({
                code: 200,
                msg: '登陆成功!'
            })
        }
    })
})

router.post('/register', (req, res) => {
    let {username, password, email} = req.body;
    users.create({username, password, email}).then(data => {
        res.json({
            code: 200,
            data
        })
    })
})

router.delete('/delete/:id', (req, res) => {
    let {id} = req.params;
    users.deleteOne({_id: id}).then(data => {
        res.json({
            code: 200,
            data
        })
    })
})

module.exports = router;
