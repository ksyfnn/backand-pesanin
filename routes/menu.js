var express = require('express');
const router = express.Router();
const {menu} = require('../models')
const Validator = require('fastest-validator');

const v = new Validator();
// create Data 
router.post('/', async(req,res,next) => {
    try {
        const scheme = {                                                                     
            nameMenu : 'string',
            image : 'string',
            category : {
                type : 'enum',
                 values : ['food', 'drink', 'dessert']
            },
            description : 'string|optional',
            rating : {
                type : 'number',
                positive : true,
                integer : true
            },
            price : 'number',
            discount : 'number'
        }
    
        const validate = await v.validate(req.body, scheme);
            if(validate.length){
                res.status(404).send({
                    status : 'error',
                    message : validate
                });
            }
            const reqdata = req.body
            const data = await menu.create(reqdata);
            return res.status(200).json(data || message `data invalid`)
            console.log(data.defaultValue.id)
    } catch (error) {
        res.send(error)
    }
})
// update data with id
router.put('/:id', async(req,res,next) => {
    try {
        const {id} = req.params;

        let findDataId = await menu.findByPk(id);

        if(!findDataId){
            res.status(404).send({
                status : 'error',
                message : `data Menu with id ${id} not found`
            })
        }
        res.status(200).send(findDataId)

        const updateDataMenu = await findDataId.update(req.body)

        if(!updateDataMenu.length){
            res.status(500).send({
                status : 'error',
                message : `data Menu with id ${id} cant be update, please
                try again`
            })
        }
        res.status(200).send(updateDataMenu)
    } catch (error) {
        next(error)   
    }
})


// show all data
router.get('/', async(req,res,next) => {
    try {
        const showAll = await menu.findAll()
        console.log(showAll)
        if(showAll.length === 0){
            res.status(505).send({
                status : 'error',
                message : 'database empty'
            })
        }
        res.status(200).send(showAll)
    } catch (error) {
        next(error)
    }
})
// show data with id
router.get('/:id', async (req,res,next) => {
    try {
        const {id} = req.params;
    
        let findData = await menu.findOne({where: {id}});
    
        if(!findData){
            res.status(404).send({
                status : 'error',
                message : `data with id ${id} not found`
            })
        }

        res.status(200).send(findData)
    
        const showById = await menu.findOne({where: {id}})
        res.status(200).send(showById)
    } catch (error) {
        next(error)
    }
})

// delete data with id
router.delete('/:id', async(req,res,next) => {
    try {
        const {id} = req.params;
    
        const findId = await menu.findByPk(id)
    
        if(!findId){
            res.status(404).send({
                status : 'error',
                message : `data with id ${id} not found`
            })
        }
        const deleteDataId = await findId.destroy()
        
            if(!deleteDataId){
                res.status(500).send({
                    status : 'error',
                    message : `data Menu with id ${id} cant 
                    deleted`
                })
            }
            res.status(200).send({
                status : 'ok',
                message : `data Menu with id ${id} has been deleted`
            })
    } catch (error) {
        next(error)
    }
})

module.exports = router;