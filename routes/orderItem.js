var express = require('express')
const router = express.Router();
const Validator = require('fastest-validator');
const {orderItem, menu, order} = require('../models');

const v = new Validator();

// create Data 
router.post('/', async(req,res,next) => {
    try {
        let reqData = [];
        const schema = {
        orderId : 'number',
        menuId : 'number',
        qty : 'number',
        }
        

        for(let i = 0; i < req.body.length; i++){
            let validate = await v.validate(req.body[i], schema);
            if(validate.length){
                return res.status(404).send({
                    status : 'error',
                    message : validate
                });
            }
            console.log('test');
    
            const findDataOrder = await order.findOne({
                where : {id : req.body[i].orderId }, raw : true
            })
            console.log('data order ',findDataOrder)
             
            if(!findDataOrder){
                return res.status(404).send({
                    status : 'error',
                    message :  `data order with id ${req.body.orderId} not found`
                })
            }
           
                // get id menu
                const findDataMenu = await menu.findOne({where : {id: req.body[i].menuId}})
                // query harga menu x quantity
                const amount = findDataMenu.price * req.body[i].qty;
                // hasil akhir
                const hasil = {
                    orderId: req.body[i].orderId,
                    menuId: req.body[i].menuId,
                    qty: req.body[i].qty,
                    amount: amount
                };

                reqData.push(hasil);
            
        }

            const data = await orderItem.bulkCreate(reqData);
            console.log(data)
            return res.status(200).json({
                message : 'succes',
                data : data
            })
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

        // res.status(200).send(findData)
    
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

router.delete('/', async(req,res,next) => {
    try {
        const deleteall = await orderItem.destroy({
            where : req.body
        })

        res.status(200).send({
            message : 'success deleting data',
            deleteall
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router;