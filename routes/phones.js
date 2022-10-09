const express = require("express");
const router = express.Router();
const Phone = require('../models/Phone');

router.get('/', (req, res) => {
    res.send('We are on phones');
});

router.post('/add', (req, res) => {
    const phone = new Phone({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        price: req.body.price
    });

    phone.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log("Error", err);
            res.json({
                message: err
            });
        });
});

module.exports = router;