const express =require('express')
const app=express();
const port =3000;

app.use(express.json());

let users=['tony','stark','steve','chirs','nickk']

app.get('/users',(req,res)=>{
    res.status(200).send(users);
});

app.post('/users',(req,res)=>{
    const newusers=('nat','burse','banner')

    users.push(newusers);
    res.status(201).send(users)
});

app.put('/users',(req,res)=>{
     users[2]='ben';
     res.status(202).send(users)
});

app.delete('/users',(req,res)=>{
    users.splice(1);
    res.status(203).send(users)
});



app.listen(
    port,()=>console.log(`server is running on http://localhost:${port}`)
)