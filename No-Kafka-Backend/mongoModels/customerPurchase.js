const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    customerName: String,
    purchase: {
        type: Number,
        default: 0
    }

})

const Purchase = mongoose.model('purchase', PurchaseSchema);

module.exports = Purchase;