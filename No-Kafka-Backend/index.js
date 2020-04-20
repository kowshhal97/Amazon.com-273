

const app=require('./app')

const adminRouter=require('./routers/admin/admin');
const customerRouter=require('./routers/customer/customer');
const sellerRouter=require('./routers/seller/seller');

//route configurations

app.use('/admin',adminRouter);
app.use('/customer',customerRouter);
app.use('/seller',sellerRouter);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


