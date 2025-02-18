# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

## Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing the user's email (required)
- `password`: A string with a minimum length of 6 characters (required)

### Example Response

Example:
```json
{
  "user": {
    "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
  },
  "token": "dfge35ger"
}
```

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns an authentication token along with the user details.

## Request Body
The request body should be a JSON object with the following fields:

- `email`: A string representing the user's email (required)
- `password`: A string with a minimum length of 6 characters (required)

## Example Response

Example:
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "dfge35ger"
}
```