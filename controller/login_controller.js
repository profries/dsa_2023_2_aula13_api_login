const loginService = require('../service/login_service')

function realizarLogin(req,res){
    const login = req.body;

    try {
        const token = loginService.validarLogin(login);
        res.status(201).json({token:token})
      }
      catch(err) {        
        res.status(err.id).json({msg: err.message});
      }    
}

module.exports = { realizarLogin };