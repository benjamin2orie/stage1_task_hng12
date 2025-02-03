# Project title:
Number Classification API

## Description:
This an API that takes a number and returns interesting mathematical properties about it, along with a fun fact


## Usage/setup instructions

Instructions on how to use the project.
You can run the project on your local machine with the following steps:

1 Create a new folder in your terminal with this command
# mkdir numberApi

2 Navigate to the new folder create with this command

## cd numberAPi

3 Clone the repo by entering this command in your current directory

# git clone https://github.com/benjamin2orie/stage1_task_hng12


4 Enter this command to open the Vs code

## code .

5 Enetr this command to open terminal in the Vs code 
## CONTROL+SHIFT+

6 Run this command to install all the dependencies

# npm install

7 Run this command to start the server
## npm run dev



## Api Documentation:

## Endpoint URL:
[endpoint-url] (https://stage1-task-hng12.vercel.app/api/classify-number/[put any integer here])

# Method:
GET

# Description: 
This an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

## Request Format:
No request body is required for this endpoint. Simply send a GET request to the endpoint URL


# Response Format:
The response will be in JSON format and includes the following fields:

# status:
200: Ok

## status: 
400: Bad request

## status:
500: Server error

{
    "number": "50",
    "is_prime": "false",
    "is_perfect": "false",
    "properties": [
        "even"
    ],
    "digit_sum": "50",
    "fun_fact": "50 is the smallest number that can be written as the sum of of 2 squares in 2 ways."
}



## Example Usage

 [GET] (https://stage1-task-hng12.vercel.app/api/classify-number/[put any integer here])