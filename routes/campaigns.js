var express = require('express');
var router = express.Router();

const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

router.post('/createCampaign', function(req, res) {
    let requestData = req.body;

    let request = mailjet.post("campaigndraft").request({
        "Locale": "en_US",
        "Sender": requestData.sender,
        "SenderEmail": requestData.senderEmail,
        "Subject": requestData.subject,
        "ContactsListID": requestData.contactsListID,
        "Title": req.body.title
    })
    request.then((result) => {
        console.log(result.body);
        res.send(result.body)
    }).catch((err) => {
        console.log(err.statusCode)
        res.send(statusCode)
    })
});

router.post('/modifyCampaign', function(req, res) {
    let requestData = req.body;

    let request = mailjet.post("campaigndraft").id(requestData.ID).action("detailcontent").request({"Html-part": requestData.htmlpart, "Text-part": requestData.textpart})

    request.then((result) => {
        console.log(result.body);
        res.send(result.body)
    }).catch((err) => {
        console.log(err.statusCode)
    })
});

router.post('/sendCampaignTest', function(req, res) {
    let requestData = req.body;

    let request = mailjet.post("campaigndraft").id(requestData.ID).action("test").request({
        "Recipients": [
            {
                "Email": "ryanflanagan@thewhiskyexchange.com",
                "Name": "Ryan Flanagan"
            }
        ]
    })
    request.then((result) => {
        console.log(result.body);
        res.send(result.body);
    }).catch((err) => {
        console.log(err.statusCode)
        res.send(err.statusCode)
    })
})

router.post('/sendCampaign', function(req, res) {
    let requestData = req.body;

    let request = mailjet.post("campaigndraft").id(requestData.ID).action("send").request()
    request.then((result) => {
        console.log(result.body)
        res.send(result.body)
    }).catch((err) => {
        console.log(err.statusCode)
        res.send(err.statusCode)
    })
})

router.post('/sendCampaignScheduled', function(req, res) {
    let requestData = req.body;

    let request = mailjet.post("campaigndraft").id(requestData.ID).action("schedule").request({"date": requestData.dateTime})

    request.then((result) => {
        console.log(result.body);
        res.send(result.body);
    }).catch((err) => {
        console.log(err.statusCode);
        res.send(err.statusCode)
    })
})

module.exports = router;
