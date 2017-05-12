## Usage

### Campaigns

#### Create a campaign

{API_URL}/campaigns/createCampaign

POST Method - Accepts JSON

Requires

- "sender" - Sender Name
- "senderEmail" - Sender Email
- "subject" - Email subject
- "contactsListID" - ID number of contact list you're sending to
- "title" - Title of the email

#### Modify Campaign body
{API_URL}/campaigns/modifyCampaign

POST method - Accepts JSON

Requires

- "ID" - Campaign ID
- "htmlPart" - Html-part
- "textPart" - Text-part (optional)
