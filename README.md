## Setup

- Clone the repository
- RUN npm run start or npm run start:dev

## For running migrations

- ts-node ts-node src/seed

**Note: May need to added ts-node globally**
npm install -g ts-node

## For mongodb run through docker

- docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:latest

## Collection Dump

- Import Sample_ServerSide.postman_collection.json
- There is swagger api documentation which can be accessed by {URL}/api
- Also, api postman documentation can be <https://identity.getpostman.com/handover/multifactor?user=1737238&handover_token=3d07d320-3fe1-48f4-b7c4-23b27bbf4c74>

## MongoDump

- Dump sql is in dump.sql folder
