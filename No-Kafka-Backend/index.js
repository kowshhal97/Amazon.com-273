

const app=require('./app')

const adminRouter=require('./routers/admin/admin');
const customerRouter=require('./routers/customer/customer');
const sellerRouter=require('./routers/seller/seller');
const loginRouter=require('./routers/seller/seller');
const signupRouter=require('./routers/seller/seller');
const productsRouter=require('./routers/seller/seller');
const commentRouter=require('./routers/comments/comments');

//route configurations

app.use('/admin',adminRouter);
app.use('/customer',customerRouter);
app.use('/seller',sellerRouter);
app.use('/products',productsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/comments',commentRouter);


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


