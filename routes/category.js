var express = require('express');
const router = express.Router();
const {categoryMenu, menu} = require('../models')
const Validator = require('fastest-validator');

const v = new Validator()

router.post('/', async(req,res,next) => {
    try {
        const schema = {
            category : 'string',
            Image : 'string|optional'
        }
        const validate = await v.validate(req.body, schema)
        if(validate.length){
            res.status(404).send({
                status : 'error',
                message : validate
            })
        }
        console.log(Validator)
        const reqData = {
            category : req.body.category,
            image : req.body.image
        }
        const createData = await categoryMenu.create(reqData)
        res.status(200).send(createData)
        console.log(createData)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req,res,next) =>{
    try {
        const {id} = req.params;
        const findData = await categoryMenu.findAll({
            where : {id},
            include : {
                model : menu
            }
        })
        console.log(menu)
        if(findData.length === 0){
            res.status(404).send({
                status : 'error',
                message : `data with id ${id} not found`
            })
        }
        res.send(findData)
    } catch (error) {
        next(error)
    }
})

module.exports = router