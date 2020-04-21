const express = require('express');
const router = express.Router();
const Customer = require('./../../../mysqlModels/Customer')
const Comments = require('./../../../mysqlModels/Comments')
const Product = require('./../../../mysqlModels/Product')



router.post('/:userId//:productId', async (req, res) => {
    const { comment } = req.body
    const userId = req.params.userId;
    const productId = req.params.productId;
    try {
        const user = await Customer.findOne({
            where: {
                id: userId
            }
        });
        if (user === null) {
            return res.status(404).send("User not found!");
        }
        else {
            const product = await Product.findOne({
                where: {
                    id: productId
                }
            });
            if (product === null) {
                return res.status(404).send("product not found!");
            }
            else {
                const newComment = await Comments.create({
                    comment: comment,
                    customerId: userId,
                    productId: productId
                })
                return res.status(200).send(newComment);
            }
        }

    }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");

})

router.delete('/:id', async (req, res) => {
    const id=req.params.id;
    try {
        const result=await Comment.destroy({
            where:{
                id:id
            }
        })
        return res.sendStatus(200).send(result);
        }
    catch (err) {
        console.log(err);
    }
    return res.status(500).send("Internal Server Error!");
})

router.put('/:id', async (req, res) => {
    const { comment } = req.body
    const id = req.params.id;
    try {
        const comment = await Comment.findOne({
            where: {
                id: id
            }
        });
        if (comment === null) {
            return res.sendStatus(404).send("Comment not found!");
        }
        else {
            const updatedComment = await Comment.update({
                comment: comment,
            }, { where: { id: id } })

            return res.sendStatus(200).send(updatedComment);
        }
    }
    catch (err) {
        console.log(err);
    }
    return res.sendStatus(500).send("Internal Server Error!");

})

module.exports = router;