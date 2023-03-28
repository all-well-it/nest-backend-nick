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

## Tasks
- run `yarn test` and correct the error in the test file
- add a `POST` controller that accepts a json `{"number1": 40, "number2": 2}` and returns the sum
  - important: the controller doesn't know how to sum, but a new service does. So write the sum service in the proper place
- write a new test for this `POST` controller, testing different numbers