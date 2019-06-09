const express = require("express");
const router = express.Router();





const Message = require("../models/message");

router.get('/messages', (req, res, next) => {
    Message.find(function(err, messages) {
        res.json(messages);
    });
});

router.post('/addmessage', (req, res, next) => {
    let newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        organzation: req.body.organzation,
        message: req.body.message
    });

    newMessage.save((err, message) => {
        if (err) {
            res.json({ msg: "Failed to add Message" });
        } else {
            res.json({ msg: "Message add Suceesfully" });
        }
    });
});


router.delete('/message/:id', (req, res, next) => {

});

module.exports = router;