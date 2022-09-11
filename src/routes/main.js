//dont use partial file in routes otherwise you get error as failled to lookup views
const express = require('express')
const routes = express.Router()
const ejs = require('ejs') //import template engine
const hbs = require('hbs')
routes.get("/",(req,res)=>{
    res.render('index1')
})
routes.get("/result",(req,res)=>{
    res.render('results')
})
routes.get("/info",(req,res)=>{
    res.render('information')
})
routes.get("*",(req,res)=>{
    res.render('errorpage')
})
module.exports=routes