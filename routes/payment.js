var express = require('express')
const router = express.Router();
const Validator = require('fastest-validator')
const {payment, orderItem } = require('../models');

const v = new Validator();

// create data payment
router.post('/', async(req,res,next) => {
    try {
       const schema = {
            orderId : 'number',
            payment_type : {
                type : 'enum',
                values : ['cash', 'non cash']
            },
            paid_amount : 'number'
        }
        const validate = await v.validate(req.body, schema);
        if(validate.length){
            res.status(404).send({
                status : 'error',
                message : 'error'
            })
        }
        console.log(req.body)

        const check = v.compile(schema)
        check({ 
            payment_date : new Date(),
            bill_date : new Date()
         })

         const {orderId} = req.body;
         const findData = await orderItem.sum('amount', {where : {orderId :orderId}})
         console.log(findData)

         if(!findData){
            res.status(404).send({
                status : 'error',
                message : `data order id with id ${req.body.orderId} not found`
            }) 
         }
         const reqData = {
            orderId : req.body.orderId,
            payment_type : req.body.payment_type,
            paid_amount : req.body.paid_amount,
            bill_amount : findData
        }
            const data = await payment.create(reqData)
            return res.status(200).json(data)
        
    } catch (error) {
        next(error)
    }
})

// update data payment with id
router.put('/:id', async(req,res,next) => {
    try {
        const dataOrderId = await orderItem.findOne({where : {orderId : req.body.orderId}})
        if(!dataOrderId){
            res.status(404).send({
                status : 'error',
                message : `order id with id ${req.body.orderId} not found`
            })
        }
        console.log(dataOrderId)
       const {id} = req.params;
       let findData = await payment.findByPk(id)

       if(!findData){
        res.status(404).send({
            status : 'error',
            message :  `data with id ${id} not found`
        })
        
        const dataPayment = await findData.update(req.body)
        res.status(200).send(dataPayment)
       }
    } catch (error) {
        next(error)
    }
})

// show data payment with id
router.get('/:id', async(req,res,next) => {
    try {
        const {id} = req.params;
        
        const findData = await payment.findOne({where : {id}})
        if(!findData){
            res.send(error)
        }
        console.log(req.body)
        res.send(findData)
        const showData = await payment.findOne({where : {id}})
        res.send(showData)
        
    } catch (error) {
        next(error)
    }
})

// show all data payment 
router.get('/', async(req,res,next) => {
    try {
        
        const showAll = await payment.findAll()
        if(showAll.length === 0){
            res.status(404).send({
                status : 'error',
                message : 'payment is empty'
            })
        }
        res.status(200).send(showAll)
        
    } catch (error) {
        next(error)
    }
})

// delete data with id 
router.delete('/:id', async(req,res,next) => {
    try {
        const {id} = req.params;
        const findData = await payment.findById(id)

        if(!findData){
            res.status(404).send({
                status : 'error',
                message : `data with id ${id} not found`
            })

        const data =  await payment.delete()
        res.status(200).send(data)
        }
    } catch (error) {
        
    }
})

module.exports = router;
