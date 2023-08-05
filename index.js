const express = require('express');

const port = 8800;

const app = express();

app.set('view engine', 'ejs');

const db = require('./config/mongoose');
const admintbl = require('./models/form');

app.use(express.urlencoded());

app.get('/', (req, res) => {
    admintbl.find({}).then((success) => {
        return res.render('index', {
            record: success
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
})
 
app.get('/deleteData', (req, res) => {
    id = req.query.id;
    admintbl.findByIdAndDelete(id).then((success) => {
        console.log("Record successfully deleted");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/editData', (req, res) => {
    id = req.query.id;
    admintbl.findById(id).then((data) => {
        return res.render('edit', {
            data 
        });
    }).catch((err) => {
        console.log(err);
    })
})

app.post('/updateData', (req, res) => {
    id = req.body.id;
    const { name, price, page, author } = req.body;
    admintbl.findByIdAndUpdate(id, {
        name: name,
        price: price,
        page: page,
        author: author
    }).then((success) => {
        console.log("record is updated");
        return res.redirect('/')
    }).catch((err) => {
        console.log(err);
        return false
    })
})

app.post('/formdata', (req, res) => {
    const { name, price, page, author } = req.body;
    admintbl.create({
        name: name,
        price: price,
        page: page,
        author: author
    }).then((success) => {
        console.log("server is start");
        return res.redirect('back')
    }).catch((err) => {
        console.log(err);
        return false
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log("server is not start");
        return false;
    }
    console.log("server is start : " + port);
})  