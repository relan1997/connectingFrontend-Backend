import express from 'express';
//main work of express is serve and listen a route
const app=express();

app.get('/',(req,res)=>{
    res.send("Server is Running");
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'First Joke',
            content:"This is joke 1"
        },
        {
            id:2,
            title:'Second Joke',
            content:"This is joke 2"
        },
        {
            id:2,
            title:'Second Joke',
            content:"This is joke 3"
        },
        {
            id:4,
            title:'Fourth Joke',
            content:"This is joke 4"
        },
        {
            id:5,
            title:'Fifth Joke',
            content:"This is joke 5"
        }
    ];
    res.send(jokes);
})

const port=process.env.PORT || 5000;  // ya toh port hum env file se utha le ya phir hum 5000 as a default port lele

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})