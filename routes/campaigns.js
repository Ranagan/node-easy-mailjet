var express = require('express');
var router = express.Router();

const mailjet = require('node-mailjet').connect('3edf25f55115d5c66971eb9d9cfd7bfb', '4d50492f8a3768e479ce61c17df330a7');

router.post('/createCampaign', function(req, res) {
    let requestData = req.body;

    let request = mailjet.post("campaigndraft").request({
        "Locale": "en_GB",
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
    })
})

router.post('/modifyCampaign', function(req, res) {
    let requestData = req.body;

    let request = mailjet.post("campaigndraft").id(requestData.ID).action("detailcontent").request({"Html-part": requestData.htmlpart, "Text-part": requestData.textpart})

    request.then((result) => {
        console.log(result.body);
        res.send(result.body)
    }).catch((err) => {
        console.log(err.statusCode)
    })
})

module.exports = router;
