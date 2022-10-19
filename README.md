# Image-Processing-API
Udacity Image Processing API project for Advanced Back-End Web Development Nanodegree Program, image is provided by [Udacity](https://github.com/udacity/cd0292-building-a-server-project-starter).

## Table of Contents
- [Description](#description)
- [Dependancies](#dependancies)
- [Install](#install)
- [Run](#run)
- [Scripts]($scripts)
- [Usage](#usage)

## Description
This project has a endpoint to resize an image that exists in assets/full to assets/thumb folder according to the specified query paramaters.

## Dependancies
- Typescript.
- JS Version: ES2015/ES6.
- JS Standard: ESlint.
- Prettier.
- Node.
- Express.
- Nodemon.
- Jasmine.
- Sharp.

## Install
This project requires node packages like: (Typescript, Express, Eslint, Prettier, Express, and Sharp) install them via `npm run install`.

## Run
To run this project open the terminal in the directry of the file and run `npm run build && node build/index`

## Scripts
1. install: `npm install`
2. build: `npm run build`
3. lint: `npm run build`
4. prettier: `npm run prettier`
5. tests: `npm run test`
6. start server: `npm run start`
7. production server(run from build): `node build/index`

## Usage
This project have only one enpoint

http://localhost:3000/api/images

This endpoint have multiple queries:
- filename: expected to be "fjord"
- width: expected to be > 0
- height: expected to be > 0

Example:

http://localhost:3000/api/images?filename=fjord&width=200&height=200
