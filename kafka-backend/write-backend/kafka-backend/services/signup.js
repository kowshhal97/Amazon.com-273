const User = require('../mysqlModels/User');
const Customer = require('../mysqlModels/Customer');
const Seller = require('../mysqlModels/Seller');
const Admin = require('../mysqlModels/Admin');

const sequelize = require('../db/SQLdatabase')

signupHandler = async (msg, callback) => {
    const transaction = await sequelize.transaction();
    try {
        const user = await User.create({
            email: msg.email,
            password: msg.password,
            userType: msg.userType
        }, { transaction: transaction })
        if (user.userType === "customer") {
            var customer = await Customer.create({ name: msg.name }, { transaction: transaction })
            customer.setUser(user);
        }
        else if (user.userType === "seller") {
            var seller = await Seller.create({ name: msg.name }, { transaction: transaction })
            seller.setUser(user);
        }
        else {
            var admin = await Admin.create({ name: msg.name }, { transaction: transaction })
            admin.setUser(user);
        }
        transaction.commit()
        return res.status(200).send(user);
    }
    catch (err) {
        console.log(err)
        transaction.rollback();
    }
    return res.status(500).send("Internal Server Error!");
}

function handle_request(msg, callback) {
    if (msg.path === 'signupHandler') {
      delete msg.path
      signupHandler(msg, callback)
    }
  };
  
  exports.handle_request = handle_request;