## PHD Mailer
It's a simple server API only to handle the form submission
Basic features:
> **It gets a  request from the client-side, it saves to the database, and send a gratitude email to the client and the client data to a commercial team**

## important 
Due to the mailer integration with Typescript and .env files issue I've been decided to create a file called envconfig.ts only to handle email provider connections. To get it working fine just edit the file ended with "example". Don't forget to remove this "example" or it'll run a bug.