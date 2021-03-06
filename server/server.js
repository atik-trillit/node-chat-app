const path=require('path');
const express=require('express');

const app=express();
const publicPath=path.join(__dirname,'../public');
console.log(__dirname+'/../public');
console.log(publicPath);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port,()=>{
  console.log(`Started server on port ${port}`);
})
