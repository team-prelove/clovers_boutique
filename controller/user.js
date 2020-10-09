const ModelUser = require('../model/modelUser')
const {hashPassword, compare} = require('../helper/bcrypt');
const {generateToken} = require('../helper/jwt');

class User {
    static async formTambah(req, res){
        res.render('user/register')
    }

    static tambahUser(req, res){
        let post = req.body;
        post.password = hashPassword(post.password);
        ModelUser.create(post).then(response => {
            res.json({pesan: 'sukses'})
        }).catch(err => {
            console.log(err)
        })
    }

    static formLogin(req, res){
        res.render('user/login', { pesan: '' });
    }

    static async login(req, res){
        let data = await ModelUser.findAll({
            where :   {
                       name : req.body.name
                       }
           })
    
           if(data.length> 0){
                if(compare(req.body.password, data[0].dataValues.password)){
                    
                    let token = generateToken(data[0].dataValues);
                    req.session.token= token;
                    req.session.save(function(err) {
                        if(!err){
                            // res.redirect('/todo/list')
                            res.json( {pesan: 'berhasil'});
                        }
                      
                      })
                  
                }else{
                    // res.render('user/login', { pesan: 'Password Anda Salah' })
                    res.json( {pesan: 'passalah'});
                }
           }else{
            // res.render('user/login', { pesan: 'Username Belum Terdaftar' })
            res.json( {pesan: 'belumdaftar'});
           }
          
        }
    static logout(req,res){
            req.session.destroy()
            res.redirect('/user/login')
        }
}

module.exports = User