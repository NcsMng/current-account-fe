
# Current Account API

## Spring Boot and ReactJS Application

This project provides APIs to fetch customers and to create current accounts for them.
Link to the back-end of the application : [current-account](https://github.com/NcsMng/current-account)


## Requirements

• The API will expose an endpoint which accepts the user information (customerID,
initialCredit).

• Once the endpoint is called, a new account will be opened connected to the user whose ID is
customerID.

• Also, if initialCredit is not 0, a transaction will be sent to the new account.

• Another Endpoint will output the user information showing Name, Surname, balance, and
transactions of the accounts.


## Tech Stack

- ReactJS
- React Bootstrap
- nginx


## Prerequisites

- Docker

## Run & Build
Pull Docker images from GitHub Packages:
```bash
docker pull ghcr.io/ncsmng/current-account-fe:latest
```
To run the pulled image locally using Docker:
```bash
docker run -p 80:80 ghcr.io/ncsmng/current-account-fe:latest
```
