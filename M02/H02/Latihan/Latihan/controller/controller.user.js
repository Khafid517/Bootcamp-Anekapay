/**
 * Controller
 */

const user = require('../model/model.user')

module.exports = {
    listUser: (req, res)=>{
        res.render('user', { data : user})
    }
}