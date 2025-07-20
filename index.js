const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')


app.use(express.urlencoded({extended:true}));//public 2
app.set("view engine","ejs");//ejs 1
app.set("views",path.join(__dirname,"views"));// ejs2 
app.use(express.static(path.join(__dirname,"public")));//public 1
app.use(methodOverride('_method'));

// database replica , not const because we will face issues later if so
let posts=[
    {   
        id:uuidv4(),
        username : "apnacolelge",
        content : "I Love coding"
    },
    {
        id:uuidv4(),
        username : "nauman",
        content : "I got selected in google"
    },
    {
        id:uuidv4(),
        username : "ahmed",
        content : "I  code"
    }
]

//  basic route
app.get("/posts",(req,res)=>{
    // console.log({posts})
    res.render("index.ejs",{posts});
})

// add new post 2 routes
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content} = req.body;
    posts.push({id:uuidv4(),username,content});
    res.redirect("/posts");
})
// show route 
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id===p.id);
    // console.log(post);
    res.render("show.ejs",{post});
})
// update route 
app.patch("/posts/:id",(req,res)=>{
    let{id}=req.params;
    // console.log(id);
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p)=> id === p.id);
    // console.log(post);
    post.content=newContent;
    // console.log(post);
    res.redirect("/posts")
})
// form for edit i,e update route
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=> id===p.id);
    // console.log(post);
    res.render("edit.ejs",{post});
    // res.send("working");
})
// destroy route
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts=posts.filter((p)=> id!==p.id );
    res.redirect("/posts");
})


app.listen(port , ()=>{
    // posts.forEach(post => {
    //     console.log(post.id);
    // });
    console.log("Listening to port : 8080");
    
})