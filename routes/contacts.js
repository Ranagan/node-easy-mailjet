var express = require('express');
var router = express.Router();

const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

// Creates a contact list with given name and returns list info (Id, created at, etc)
router.post('/createContactList', function(req, res){
    let requestData = req.body;

    let request = mailjet.post("contactslist").request({
        "Name": requestData.name
    })

    request.then((result) => {
        console.log(result.body)
        res.send(result.body)
    }).catch((err) => {
        console.log(err.statusCode)
        res.send(err.statusCode)
    })
})

router.post('/managemany', function(req, res){
    let requestData = req.body;

    let request = mailjet.post("contactslist").id(requestData.id).action("ManageManyContacts").request({
        "Action": requestData.action,
        "Contacts": requestData.contacts
    })
    request.then((result) => {
        console.log(result.body)
        res.send(result.body)
    }).catch((err) => {
        console.log(err.statusCode)
        res.send(err.statusCode)
    })
});

module.exports = router;
