# Andela_Teamwork
[![Build Status](https://travis-ci.org/patricktunez123/Andela_Teamwork.svg?branch=develop)](https://travis-ci.org/patricktunez123/Andela_Teamwork)

[![Coverage Status](https://coveralls.io/repos/github/patricktunez123/Andela_Teamwork/badge.svg?branch=develop)](https://coveralls.io/github/patricktunez123/Andela_Teamwork?branch=develop)

[![Maintainability](https://api.codeclimate.com/v1/badges/7015e029116009bfc81c/maintainability)](https://codeclimate.com/github/patricktunez123/Andela_Teamwork/maintainability)

Teamwork is an internal social network for organizations’ employees. The goal of this application is to facilitate more interaction between colleagues and facilitate team bonding.
------------------------------------------------------------------------------

## UI

## User Interface (UI)
* HTML
* CSS
* Javascript

### GitHub Pages link for UI
[TeamWork/UI link](https://patricktunez123.github.io/Andela_Teamwork/UI/)

---------------------------------------------------------------------

## SERVER

## API ENDPOINTS

| Ressource URL | Methods  | Description  |
| ------- | --- | --- |
| /api/v1/auth/signup| POST | Create user account |
| /api/v1/auth/signin | POST | Login a user |
| /api/v1/articles | POST | Create an article |
| /api/v1/articles/:id/ | PATCH | Edit an article |
| /api/v1/articles/:id | GET | View a specific article |
| /api/v1/articles/:id | DELETE | Delete an article|
| /api/v1/articles/:id/comments | POST | Comment on a post |
| /api/v1/feeds | GET | View most recently posted articles |

## Used Tools

### Language
```
*Javascript*
```
### Server Environment
```
 *NodeJS* (run time Environment for running JS codes)
 ```
### Framework
```
 *Express* (for building fast APIs)
 ```
### Testing Framework and Assertion library
```
 *Mocha* and *Chai*
 ```
### Continuous Integration
```
Travis CI
```
### Test Coverage
```
nyc
```
### Git badge
```
coveralls
```
### Deployment
```
Heroku
```
### Heroku link
[TeamWork heroku link](https://andela-teamwork.herokuapp.com/)

### SWAGGER DOCUMENTATION
[API docs](https://andela-teamwork.herokuapp.com/teamwork/)

## Getting Started
These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

## Prerequisites
To install the software on your local machine, you need first to clone the repository ```https://github.com/patricktunez123/Andela_Teamwork.git``` or download the zip file and once this is set up you are going to need this packages. [NodeJS]

```
 [Node Package Installer - NPM] this usually comes with Node or YARN in case NPM doesn't work.
```

## Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine, cd into the package folder using your terminal and run the following

```
> npm install
```

It will install the node_modules which will help you run this project on your local machine.

## Run the server
```
> node server
```
## Run the test
```
> npm run test
```


## Author
- Tunezerwane Patrick <tunezepatrick@gmail.com>

---

## License & copyright
Copyright (c) Tunezerwane Patrick
