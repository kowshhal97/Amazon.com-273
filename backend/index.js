const app=require('./app')
const port = process.env.PORT || 3001;





// configure routes here





const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports=app;