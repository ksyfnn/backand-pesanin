var express = require('express')
const router = express.Router();
const Validator = require('fastest-validator');
const {orderItem, menu, order} = require('../models');

const v = new Validator();

// create Data 
router.post('/', async(req,res,next) => {
    try {
        const schema = {
        orderId : 'number',
        menuId : 'number',
        qty : 'number',
        }
        
        const validate = await v.validate(req.body, schema);
            if(validate.length){
                res.status(404).send({
                    status : 'error',
                    message : validate
                });
            }
            
        const findDataOrder = await order.findOne({
            where : {id : req.body.orderId}, raw : true
        })

        if(!findDataOrder){
            res.status(404).send({
                status : 'error',
                message :  `data order with id ${req.body.orderId} not found`
            })
        }

            // get id menu
            const findDataMenu = await menu.findOne({where : {id: req.body.menuId}})
            // query harga menu x quantity
            const amount = findDataMenu.price * req.body.qty;
            // hasil akhir
            const reqData = {
                orderId: req.body.orderId,
                menuId: req.body.menuId,
                qty: req.body.qty,
                amount: amount
            };

            const data = await orderItem.create(reqData);
            console.log(data.dataValues.id)
            return res.status(200).json(data || message `data invalid`)
    } catch (error) {
        next(error)
    }
})
// update data with id
router.put('/:id', async(req,res,next) => {
    try {
        const {id} = req.params;

        let findDataId = await orderItem.findByPk(id);

        if(!findDataId){
            res.status(404).send({
                status : 'error',
                message : `data orderItem with id ${id} not found`
            })
        }
        const findDataMenu = await menu.findOne({where : {id: req.body.menuId}})
        // query harga menu x quantity
        const amount = findDataMenu.price * req.body.qty;
        // hasil akhir
        const reqData = {
            orderId: req.body.orderId,
            menuId: req.body.menuId,
            qty: req.body.qty,
            amount: amount
        };
        const updateDataorderItem = await findDataId.update(reqData)
        res.status(200).send(updateDataorderItem)
    } catch (error) {
        next(error)   
    }
})

// show all data
router.get('/', async(req,res,next) => {
    try {
        const showAll = await orderItem.findAll({
            include : [{
                model : order
            }]
        })
        // console.log(showAll)
        if(showAll.length === 0){
            res.status(505).send({
                status : 'error',
                message : 'order item is empty'
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
    
        let findData = await orderItem.findOne({where : {id}});
    
        if(!findData){
            res.status(404).send({
                status : 'error',
                message : `data with id ${id} not found`
            })
        }

        res.status(200).send(findData)
    
        const showById = await orderItem.findOne({where: {id}})
        res.status(200).send(showById)
    } catch (error) {
        next(error)
    }
})

// delete data with id
router.delete('/:id', async(req,res,next) => {
    try {
        const {id} = req.params;
    
        const findId = await orderItem.findByPk(id)
    
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
                    message : `data orderItem with id ${id} cant 
                    deleted`
                })
            }
            res.status(200).send({
                status : 'ok',
                message : `data orderItem with id ${id} has been deleted`
            })
    } catch (error) {
        next(error)
    }
})

module.exports = router;