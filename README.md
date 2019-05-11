# water-overflow

## Description
The application is to calculate and illustrate how much liquid is in the j’th glass of the i’th row when K litres are poured into the top
most glass. The input should be k, i, j in order split by spaces. All the input should be in the acceptable range (<= 10000) so that it can get a valid result. Any unexpected result will be disregarded. To exit, type ctrl + c.

## Design and Implementation
* **Glassess**
This class accept required parameters, calculate the value and return the value. The solution is based on dynamic programming.
* **Input**
This module handle the input and output from stdin.
* **App**
This is the entry to run and demonstrate the application.

## Setup
The application is developed in `Node.js (version v10.15.1)`. So, to execute the application, `Node.js` and `NPM` should be installed beforehand.

To install required npm modules for the application, run
> npm install 

## Execution
To execute the app, run
> npm start

or
> node app

## Test
To execute test cases, run
> npm test

## Example
Run the application:
> npm start

```
Please input water (litres) poured into, the row and column of the glass.
For example: 1 0 0
```
Input commands:
> 1 0 0

```
There is 250ml water in the glass.
```
Input commands:
> 1 2 0

```
There is 62.5ml water in the glass.
```
