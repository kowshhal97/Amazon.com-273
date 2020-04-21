const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerName: {
        type: String
    },
    sellerName: {
        type: String
    },
    orderDate: {
        type: Date
    },
    billing: {
        name: String,
        cardNumber: String,
        totalPrice: Number,
        
    }, 
    shippingAddress: {
        AddressId: String,
        name: String,
        address1: String,
        adress2: String,
        city: String,
        state: String,
        country: String,
        zipcode: String,
        phoneNumber: String   
    },
    products: [{
        productName: String,
        quantity: Number,
        perQuantityPrice: Number,
        totalPrice: Number,
        orderStatus: String,
        orderHistory: [{
            date: Date,
            deliveryStatus: String,
            gift: Boolean
        }]

    }]

})

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;