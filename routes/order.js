var express = require('express');
const router = express.Router();
const { order } = require('../models');
const Validator = require('fastest-validator');

const v = new Validator()
// create Data 
router.post('/', async (req, res, next) => {
    try {
        const schema = {
            order_type: {
                type: 'enum',
                values: ['dine in', 'take away']
            },
            table_no: 'number|optional',
        }

        const validate = await v.validate(req.body, schema);
        const check = v.compile(schema)
        check({ order_date : new Date() })

        if (validate.length) {
            res.status(404).send({
                status: 'error',
                message: validate
            });
        }

        console.log(req.body);
        const reqData = {
            order_type : req.body.order_type,
            table_no : req.body.table_no
        }
        const data = await order.create(reqData);
        return res.status(200).json(data || message`data invalid`)
    } catch (error) {
        next(error)
    }
})
// update data with id
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        let findDataId = await order.findByPk(id);

        if (!findDataId) {
            res.status(404).send({
                status: 'error',
                message: `data order with id ${id} not found`
            })
        }
        res.status(200).send(findDataId)

        const updateDataorder = await findDataId.update(req.body)

        if (!updateDataorder.length) {
            res.status(500).send({
                status: 'error',
                message: `data order with id ${id} cant be update, please
                try again`
            })
        }

        res.status(200).send(updateDataorder)
    } catch (error) {
        next(error)
    }
})

// show all data
router.get('/', async (req, res, next) => {
    try {
        const showAllData = await order.findAll()
        if (showAllData.length === 0) {
            res.status(404).send({
                status: 'error',
                message: `database empty`
            })
        }
        res.status(200).send(showAllData)
        // const getOrderId = await orderItem.finOne({
        //     wehre : {orderId : req.body.amount}
        // })
    } catch (error) {
        res.send(error)
    }
})
// show data with id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        let findData = await order.findByPk(id);

        if (!findData) {
            res.status(404).send({
                status: 'error',
                message: `data with id ${id} not found`
            })
        }

        res.status(200).send(findData)

        const showById = await order.findOne()
        res.status(200).send(showById)
    } catch (error) {
        next(error)
    }
})

// delete data with id
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;

        const findId = await order.findByPk(id)

        if (!findId) {
            res.status(404).send({
                status: 'error',
                message: `data with id ${id} not found`
            })
        }
        const deleteDataId = await findId.destroy({
            attributes : {
                exclude : ['menuId']
            }
        })

        if (!deleteDataId) {
            res.status(500).send({
                status: 'error',
                message: `data order with id ${id} cant 
                    deleted`
            })
        }
        res.status(200).send({
            status: 'ok',
            message: `data order with id ${id} has been deleted`
        })
    } catch (error) {
        res.send(error)
    }
})
module.exports = router;