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

## MongoDump

- Dump sql is in dump.sql folder
