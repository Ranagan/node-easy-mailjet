var express = require('express');
var router = express.Router();

const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

router.post('/managemany', function(req, res){
    let requestData = req.body;

    let request = mailjet.post("contactslist").id(requestData.id).action("ManageManyContacts").request({
        "Action": "addnoforce",
        "Contacts": [
            {
                "Email": "ryanflanagan12@gmail.com",
                "Name": "Ryan"
            }
        ]
    })
    request.then((result) => {
        console.log(result.body)
        res.send(result.body)
    }).catch((err) => {
        console.log(result.body)
        res.send(result.body)
    })
});

module.exports = router;
