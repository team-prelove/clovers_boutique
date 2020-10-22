const ModelUser = require('../model/modelUser')
const {hashPassword, compare} = require('../helper/bcrypt');
const {generateToken} = require('../helper/jwt');

class User {
    static tambahUser(req, res, next){
        let post = req.body;
        post.password = hashPassword(post.password);
        ModelUser.create(post).then(response => {
            res.status(200).json({pesan: 'sukses'})
        }).catch(err => {
            next(err)
        })
    }
    static async login(req, res, next){
        let data = await ModelUser.findAll({
            where :   {
                       name : req.body.name
                       }
           })
    
           if(data.length> 0){
                if(compare(req.body.password, data[0].dataValues.password)){
                    
                    let token = generateToken(data[0].dataValues);
                    res.status(200).json(token)
                  
                }else{
                    // res.render('user/login', { pesan: 'Password Anda Salah' })
                    next({status:400, message: 'Invalid Password'})
                }
           }else{
            // res.render('user/login', { pesan: 'Username Belum Terdaftar' })
            next({status:400, message: 'Your account is not registered'})
           }
          
        }
    static logout(req,res){
            req.session.destroy()
            res.redirect('/user/login')
        }
}

module.exports = User