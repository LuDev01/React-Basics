const User=require('../database/models/Users')
const bcrypt=require('bcrypt')

const controllers={
    createUser: async(req,res)=>{
        try {
            const password=bcrypt.hashSync(req.body.password,12);
            delete req.body.password;
            req.body.password=password;
            const newUser=await User.create({ ...req.body});
            res.json({status:'200', user:newUser})
        } catch (error) {
            res.json({error:'Error al crear el usuario'})
        }
    },
    getUserByPk:async(req,res)=>{
        const id=req.params.id;
        try {
            const user=await User.findById(id);
            res.json({user})
        } catch (error) {
            res.json({error:'Error al mostrar los  usuarios'})
        }
    }

}

module.exports=controllers;