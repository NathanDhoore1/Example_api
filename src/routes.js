const express = require('express');
const router = express.Router();
const Campus = require('./models/campus');
const Docent = require('./models/docent');

router.get('/', (req,res) => {
    console.log('/ route called');
    res.send('<h1>Welcome to my API, these are the available routes: </h1>'
    +'<h2>/</h2>'
    +'Where you are right now'

    +'</hr>'

    +'<h2>/campus</h2>'
    +'Returns all campuses in the database using .find()'
    
    +'</hr>' 
    
    +'<h2>/campus/:id</h2>'
    +'Returns one single campus in the db using .findById(objectID)'
    +'Uses req.params.id, the id passed in url'

    +'</hr>'

    +'<h2>/campus/create</h2>'
    +'Add one single campus to the database using .create(data)'
    +'Uses req.body, which means an object is passed'
    +'/api/campus/add adds the campus to the database'

    +'</hr>'

    +'<h2>/campus/update/:id</h2>'
    +'Update one single campus by using .findByIdAndUpdate(object, {$set: })'
    +'Uses req.params.id, which means the id is passed by url'

    +'</hr>'

    +'<h2>/campus/delete/:id</h2>'
    +'Deletes one campus from db using .findByIdAndDelete(objectId)'
    +'Uses req.params.id, which means the id is passed by url'
    );
});

router.get('/campus', async (req, res) => {
    console.log('/campus route called');
    try{
        res.json(await Campus.find());
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/campus/:id', async (req,res) => {
    console.log('/campus/:id route called');
    try{
        res.send(await Campus.findById(req.params.id));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/campus/create', async (req,res) => {
    console.log('/campus/create called');
    try{
        res.send(await Campus.create(req.body));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/campus/update/:id', async (req,res) => {
    console.log('/campus/update/:id called');
    try{
        res.send(await Campus.findByIdAndUpdate(req.params.id, {$set: req.body}));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/campus/delete/:id' , async(req, res) => {
    console.log('campus/delete/:id called');
    try{
        res.send(await Campus.findByIdAndDelete(req.params.id));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/docent', async (req,res) => {
    console.log('/docent route called');
    try{
        res.json(await Docent.find().populate('campussen').sort('voornaam'));
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;