## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Running the containers

```bash
# start the containers // remember to put the .env file in the root directory
$ yarn up

# stop the containers
$ yarn down
```

## Use on browser
```html
http://localhost:3000/
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## mySQL Database Connection Instructions:

```bash
# copy the .env.template file to .env
$ cp docker/.env.template .env

# edit the .env file and set the mySQL configuration variables

# make sure Docker Desktop is running, then start the containers if they're not already running (this starts the database and application containers)
$ yarn up

# (optional) connect to the mySQL shell of the database
$ docker exec -it allwell_db bash
```
## API Paths

The API has the following paths:

## /sum 
This path accepts a POST request with a JSON body containing two numbers, number1 and number2. The API returns the sum of the two numbers.

Example request body:

```
{
  "number1": 40,
  "number2": 2
}
```
Example response body:
```
{
  "result": 42
}
```
## /notes
This path accepts GET, POST, PATCH, and DELETE requests for managing notes. The API returns a list of notes in JSON format.

Example response body:
```
[
  {
    "id": 1,
    "title": "Note 1",
    "content": "This is the content of note 1"
  },
  {
    "id": 2,
    "title": "Note 2",
    "content": "This is the content of note 2"
  }
]
```

## GET /notes
This path returns a list of all notes.

## GET /notes/:id
This path returns the note with the given ID.

Example response body:
```
{
  "id": 1,
  "title": "Note 1",
  "content": "This is the content of note 1"
}
```

## POST /notes
This path creates a new note with the given title and content.

Example request body:
```
{
  "title": "Note 3",
  "content": "This is the content of note 3"
}
```
## PATCH /notes/:id
This path updates the note with the given ID with the new title and content.

Example request body:
```
{
  "title": "Note 3 (updated)",
  "content": "This is the updated content of note 3"
}
```

## DELETE /notes/:id
This path deletes the note with the given ID.

## Tasks
- clone this repo
- create a new local branch `git switch -c alice-task-1` changing alice with your name
- run `yarn test` and correct the error in the test file
- add a `POST` controller that accepts a json `{"number1": 40, "number2": 2}` and returns the sum
  - important: the controller doesn't know how to sum, but a new service does. So write the sum service in the proper place
- write a new test for this `POST` controller, testing different numbers
- when done use `git status` to check that your changes are ok. Then use `git add *` and `git commit -m "<put a short explanation here>"` and `git push`
- then go to the github project. You will see a button to make a new Pull Request out of your last commit. Do it and put me as the reviewer 