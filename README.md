# node-easy-mailjet


# Usage

## Campaigns

POST Methods

### Create a campaign

{API_URL}/campaigns/createCampaign

Requires:

- "sender" - Sender Name
- "senderEmail" - Sender Email
- "subject" - Email subject
- "contactsListID" - ID number of contact list you're sending to
- "title" - Title of the email

### Modify Campaign body

{API_URL}/campaigns/modifyCampaign

Requires:

- "ID" - Campaign ID
- "htmlPart" - Html-part
- "textPart" - Text-part (optional)

Example:

```json
{
    "id": "your id",
    "htmlPart": "Hello <strong>world</strong>!",
    "textPart": "Hello world!"
}
```

### Send Campaign test

{API_URL}/campaigns/sendCampaignTest

Requires:

- "ID" - Campaign ID
- "recipients" - Array of Test recipients in the following format:

Example:

```json
"recipients" : [
    {
        "email": "example@test.com",
        "name": "Mr. Mister"
    },{
        "email": "example2@test.com",
        "name": "Mrs. Mister"
    }
]
```
