const express = require('express')
const mongoose = require('mongoose');
const appointments = require('./modules/appointment');
mongoose.connect('mongodb://127.0.0.1:27017/medical')


const app = express()
const bodyParser = require('body-parser');
const archives = require('./modules/archives');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



app.get('', (req, res)=>{
    res.send('hello world')
})

// appointment patient
app.post('/appointments/appointment', (req, res)=>{
        const patientSchema = new appointments({
            nameP : req.body.nameP,
            email : req.body.email,
            number : req.body.number,
            date : req.body.date,
            time : req.body.time,
            valide : req.body.valide
        })
        patientSchema.save().then(()=>{
            console.log('Saved successfully'); 
            res.status(200).json({
                message : 'success'
            })  
            })
            .catch((error)=>{
                console.error('Error saving:', error);
                res.status(200).json({
                    message : 'error'
                })
            })
        })
    
//  get all appointment
app.get('/appointments', (req, res)=>{
    appointments.find().then((result)=>{
        res.status(200).json({
            app : result
        })
    })
}) 

// get appointment by id
app.get('/appointments/:id', (req, res)=>{
    appointments.findOne({_id:req.params.id}).then((result)=>{
        res.status(200).json({
            finded : result
        })
    })
})

// validate appointment 
app.put('/appointments/:id', (req, res)=>{
    appointments.updateOne({_id:req.params.id}, req.body).then((result)=>{
        if (result) {
            res.status(200).json({
                message:'update'
            })
        }
    })
})

app.delete('/appointments/:id', (req, res)=>{
    appointments.deleteOne({_id:req.params.id}).then((result)=>{
        if (result) {
            res.status(200).json({
                message : 'deleted'
            })
        }
    })
})

// post archives
app.post('/archive/archives', (req, res)=>{
    const archiveSchema = new archives({
        nameP : req.body.nameP,
        email : req.body.email,
        number : req.body.number,
        date : req.body.date,
        time : req.body.time,
        notes : req.body.notes
    })
    archiveSchema.save().then(()=>{
        console.log('Saved successfully'); 
        res.status(200).json({
            message : 'success'
        })  
    }).catch((error)=>{
        console.error('Error saving:', error);
        res.status(200).json({
            message : 'error'
        })
    })
})

// get all archive
app.get('/archive', (req, res)=>{
    archives.find().then((result)=>{
        res.status(200).json({
            findedA : result
        })
    })
})

// get archive by id
app.get('/archive/:id', (req, res)=>{
    archives.findOne({_id:req.params.id}).then((result)=>{
        if (result) {
            res.status(200).json({
                findedId:result
            })
        }
    })
})

// edit archive
app.put('/archive/:id', (req, res)=>{
    archives.updateOne({_id:req.params.id}, req.body).then((result)=>{
        if (result) {
            res.status(200).json({
                message : 'update'
            })
        }
    })
})


module.exports = app 