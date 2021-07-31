import bp from 'body-parser';
import express from 'express';
// import bp from 'body-parser';
import morgan from 'morgan'

const app = express ();     //Specifying that it's an express App.

app.use(bp.urlencoded({extended:true}));   
//qs string for powerful serialization/deserialization, more can be found here: https://stackoverflow.com/a/29177740
app.use(bp.json());
app.use(morgan('dev'));

const db = [];

app.post('/todo',(req,res)=>{
  const newTodo = {
    id: new Date(),
    text: req.body.text}
  db.push(newTodo);
  res.json(newTodo);
});

app.get('/todo',(req,res)=>{
  res.json(db);
});

app.listen(8000, ()=>{
  console.log('Server is up and running on https://localhost:8000');
})