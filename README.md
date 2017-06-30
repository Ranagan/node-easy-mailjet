# Deployment

You need to set the environment variables of wherever you host the API for the MailJet Public and Private Keys.

>MJ_APIKEY_PUBLIC = { Your public key }

>MJ_APIKEY_PRIVATE = { Your private key }

# Usage

## Campaigns

##### POST Methods

### Create a campaign

{API_URL}/campaigns/createCampaign

Requires:

- "sender" - Sender Name
- "senderEmail" - Sender Email
- "subject" - Email subject
- "contactsListID" - ID number of contact list you're sending to
- "title" - Title of the email

Example Data:

```json
{
    "sender": "Example",
    "senderEmail": "newsletters@example.com",
    "subject": "Hello world!",
    "contactsListID": "0000",
    "title": "A Test Newsletter"
}
```

### Modify Campaign body

{API_URL}/campaigns/modifyCampaign

Requires:

- "id" - Campaign ID
- "htmlPart" - Html-part
- "textPart" - Text-part (optional)

Example Data:

```json
{
    "id": "your campaign id",
    "htmlPart": "Hello <strong>world</strong>!",
    "textPart": "Hello world!"
}
```

### Send Campaign test

{API_URL}/campaigns/sendCampaignTest


>Before sending, the API will check if the draft has all mandatory fields filled in and that they are valid. In case of error, the API will return a 400 Bad Request.


Requires:

- "id" - Campaign ID
- "recipients" - Array of Test recipients in the following format:

Example Data:

```json
{
    "id": "your campaign id",
    "recipients": [{
        "email": "example@example.com",
        "name": "Mr. Example"
        },{
            "email": "example2@example.com",
            "name": "Mrs. Example"
        }
    ]
}
```

### Send Campaign Immediately

{API_URL}/campaigns/sendCampaign

Requires:

- "id"

Example Data:

```json
{
    "id": "your campaign id"
}
```
