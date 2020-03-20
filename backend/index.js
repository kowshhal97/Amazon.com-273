const app=require('./app')
const port = process.env.PORT || 3001;

const kafka= require('./kafka/client')


app.post('/login',(req,res)=>{
    console.log(req.body);
    kafka.make_request('test', req.body, (err, result) => {
        res.send(result)
      });
})






app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports=app;