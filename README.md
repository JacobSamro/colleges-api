# colleges-api
API to get all the colleges in India

Here we have used the data from https://data.gov.in/catalog/list-colleges-aishe-survey 

## Requirements

* Noje.JS

## Installation

Download the project and use the command ``node index`` to run the app. Or you can use our live heroku app colleges-india.herokuapp.com

## Usage

API URL : ``colleges-in.herokuapp.com``

### Listing total number of colleges

**POST:** */colleges/total*

**RESPONSE :**

``{"total":38377}``

---------------------------------------

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

---------------------------------------

### Getting colleges in a State

**POST:** */colleges/state*

**Headers:** 

State - State to search

#### Example

**REQUEST :**
```
POST /colleges/state HTTP/1.1
HOST: localhost:8081
state: Tamil Nadu
offset: 10
content-length: 0
 ```

**RESPONSE :**

```[["598","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Dr. Umayal Ramanathan College for Women, Karaikudi (Id: C-28518)","Affiliated College","Tamil Nadu","Sivaganga"],["599","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Dr.Zakir Hussain College, Ilayangudi (Id: C-28533)","Affiliated College","Tamil Nadu","Ramanathapuram"],["600","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Government Arts College for Women, Ramanathapuram (Id: C-28521)","Affiliated College","Tamil Nadu","Ramanathapuram"],["601","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Government Arts College for Women, Sivaganga (Id: C-28524)","Affiliated College","Tamil Nadu","Sivaganga"],["602","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Government Arts College, Paramakudi (Id: C-28523)","Affiliated College","Tamil Nadu","Ramanathapuram"],["603","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Idhaya College for Women, Sarugani (Id: C-28509)","Affiliated College","Tamil Nadu","Sivaganga"],["604","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Madurai Sivakasi Nadar Pioneer Meenaksmi Women college, Poovanthi (Id: C-28534)","Affiliated College","Tamil Nadu","Sivaganga"],["605","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Matha College of Arts and Science, Manamadurai (Id: C-28519)","Affiliated College","Tamil Nadu","Sivaganga"],["606","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","PMT Memorial college, Kamuthi (Id: C-28530)","Affiliated College","Tamil Nadu","Ramanathapuram"],["607","Alagappa University, Alagappa Nagar, Karaikudi (Id: U-0435)","Raja Doraisingam Government Arts College, Sivaganga (Id: C-28512)","Affiliated College","Tamil Nadu","Sivaganga"]]```

 ---------------------------------------

### Getting colleges in a State

**POST:** */colleges/state*

**Headers:** 

District - District to search

#### Example

**REQUEST :**
```
POST /colleges/district HTTP/1.1
HOST: localhost:8081
district: coimbatore
offset: 0
content-length: 0
 ```

**RESPONSE :**

```[["633","Amrita Vishwa Vidyapeetham, Coimbatore (Id: U-0436)","Amrita School of Business, Coimbatore (Id: C-7023)","Constituent / University College","Tamil Nadu","Coimbatore"],["638","Amrita Vishwa Vidyapeetham, Coimbatore (Id: U-0436)","Amrita School of Engineering, Coimbatore (Id: C-7021)","Constituent / University College","Tamil Nadu","Coimbatore"],["641","Amrita Vishwa Vidyapeetham, Coimbatore (Id: U-0436)","Department of Communication, Coimbatore (Id: C-7024)","Constituent / University College","Tamil Nadu","Coimbatore"],["645","Amrita Vishwa Vidyapeetham, Coimbatore (Id: U-0436)","Department of Social Work, Coimbatore (Id: C-7033)","Constituent / University College","Tamil Nadu","Coimbatore"],["988","Anna University, Chennai (Id: U-0439)","Adithya Institute of Technology (Id: C-37053)","Affiliated College","Tamil Nadu","Coimbatore"],["992","Anna University, Chennai (Id: U-0439)","AJK Institute of Management (Id: C-37098)","Affiliated College","Tamil Nadu","Coimbatore"],["993","Anna University, Chennai (Id: U-0439)","Akshaya College of Engineering and Technology (Id: C-36985)","Affiliated College","Tamil Nadu","Coimbatore"],["994","Anna University, Chennai (Id: U-0439)","AKSHAYA INSTITUTE OF MANAGEMENT STUDIES, COIMBATORE (Id: C-46582)","Affiliated College","Tamil Nadu","Coimbatore"],["1030","Anna University, Chennai (Id: U-0439)","ARULMURUGA TECHNICAL CAMPUS (Id: C-48254)","Affiliated College","Tamil Nadu","Coimbatore"],["1034","Anna University, Chennai (Id: U-0439)","ASL Pauls College of Engineering and Technology (Id: C-37009)","Affiliated College","Tamil Nadu","Coimbatore"]]```
