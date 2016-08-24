# colleges-api
API to get all the colleges in India

Here we have used the data from https://data.gov.in/catalog/list-colleges-aishe-survey 

## Requirements

* Noje.JS

## Installation

Download the project and use the command ``node index`` to run the app. Or you can use our live heroku app colleges-india.herokuapp.com

## Usage

API URL : colleges-in.herokuapp.com

### Listing total number of colleges

**POST:** */colleges/total*

**RESPONSE :**

``{"total":38377}``

### Searching a College

**POST:** */colleges/search*

**Headers:** 

Keyword - Keyword to search

#### Example

**REQUEST :**
```
POST /colleges/search HTTP/1.1
HOST: localhost:8081
keyword: sriguru
content-length: 0
 ```

**RESPONSE :**

```[["1447","Anna University, Chennai (Id: U-0439)","Sriguru Institute Of Technology (Id: C-36994)","Affiliated College","Tamil Nadu","Coimbatore"]]```



