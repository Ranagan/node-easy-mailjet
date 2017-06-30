- [Manage Campaigns](#manage-campaigns)
- [Manage a Contact List](#manage-a-contact-list)


# Deployment

You need to set the environment variables of wherever you host the API for the MailJet Public and Private Keys.

>MJ_APIKEY_PUBLIC = { Your public key }

>MJ_APIKEY_PRIVATE = { Your private key }

# Usage
##### All endpoints accept POST methods with JSON.

## Manage Campaigns

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

## Contact List Management

### Create a Contact List

{API_URL}/contacts/createContactList

Requires:

- "name"

Example Data:

```json
{
    "name": "your contact list name"
}
```

Will return a JSON response in the following format:

```json
{
    "Count": 1,
    "Data": [
        {
            "Address": "",
            "CreatedAt": "",
            "ID": "",
            "IsDeleted": "false",
            "Name": "your contact list name",
            "SubscriberCount": ""
        }
    ],
    "Total": 1
}
```


### Manage a Contact List
{API_URL}/contacts/managemany

You can use the ID generated and returned in the /createContactList request to manage the subscribers to that contact list.

Requires:

- "id" - contact list ID
- "action": "your action" - Actions are described [here](https://dev.mailjet.com/guides/?javascript#contact_managemanycontacts)
- "contacts": JSON array of contacts. Example below.

Example Data:

```json
{
	"id": "contact list id",
	"contacts": [{
		"Email": "test1@example.com",
		"Name": "test1"
	},{
		"Email": "test2@example.com",
		"Name": "test2"
	}]
}
```
