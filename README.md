# colleges-api
API to get all the colleges in India

Here we have used the data from https://data.gov.in/catalog/list-colleges-aishe-survey 

## Requirements

* Node.JS

## Installation

Download the project and use the command ``node index`` to run the app. Or you can use our live heroku app colleges-api-india.fly.dev

## Usage

API URL : ``colleges-api-india.fly.dev``

### Listing total number of colleges

**POST:** */colleges/total*

**RESPONSE :**

```json
{  
   "total":38377
}
```

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
Keyword: sriguru
 ```

**RESPONSE :**

```json
[  
   [  
      "1447",
      "Anna University, Chennai ",
      "Sriguru Institute Of Technology ",
      "Affiliated College",
      "Tamil Nadu",
      "Coimbatore"
   ]
]
```

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
State: Tamil Nadu
Offset: 10
content-length: 0
 ```

**RESPONSE :**

```json
[  
   [  
      "588",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "Alagappa Government Arts College, Karaikudi ",
      "Affiliated College",
      "Tamil Nadu",
      "Sivaganga"
   ],
   [  
      "589",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "ALAGAPPA UNIVERSITY CONSTITUENT COLLEGE ",
      "Constituent / University College",
      "Tamil Nadu",
      "Ramanathapuram"
   ],
   [  
      "590",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "ALAGAPPA UNIVERSITY EVENING COLLEGE, PARAMAKKUDI ",
      "Affiliated College",
      "Tamil Nadu",
      "Ramanathapuram"
   ],
   [  
      "591",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "ALAGAPPA UNIVERSITY EVENING COLLEGE, RAMANATHAPURAM ",
      "Affiliated College",
      "Tamil Nadu",
      "Ramanathapuram"
   ],
   [  
      "592",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "ALAGAPPA UNIVERSITY EVENING COLLEGE, RAMESWARAM ",
      "Affiliated College",
      "Tamil Nadu",
      "Ramanathapuram"
   ],
   [  
      "593",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "ALAGAPPA UNIVERSITY EVENING COLLEGE, THIRUPPUVANAM ",
      "Affiliated College",
      "Tamil Nadu",
      "Ramanathapuram"
   ],
   [  
      "594",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "ALAGAPPA UNIVERSITY EVENING COLLEGE, THONDI ",
      "Affiliated College",
      "Tamil Nadu",
      "Ramanathapuram"
   ],
   [  
      "595",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "Ananda College, Devakottai ",
      "Affiliated College",
      "Tamil Nadu",
      "Sivaganga"
   ],
   [  
      "596",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "Arumugam Pillai Seethaiammal College, Tiruppathur ",
      "Affiliated College",
      "Tamil Nadu",
      "Sivaganga"
   ],
   [  
      "597",
      "Alagappa University, Alagappa Nagar, Karaikudi ",
      "Caussanel College of Arts and Science, Muthuppettai ",
      "Affiliated College",
      "Tamil Nadu",
      "Ramanathapuram"
   ]
]
```

 ---------------------------------------

### Getting colleges in a District

**POST:** */colleges/district*

**Headers:** 

District - District to search

#### Example

**REQUEST :**
```
POST /colleges/district HTTP/1.1
HOST: localhost:8081
District: coimbatore
Offset: 0
```

**RESPONSE :**

```json
[  
   [  
      "633",
      "Amrita Vishwa Vidyapeetham, Coimbatore ",
      "Amrita School of Business, Coimbatore ",
      "Constituent / University College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "638",
      "Amrita Vishwa Vidyapeetham, Coimbatore ",
      "Amrita School of Engineering, Coimbatore ",
      "Constituent / University College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "641",
      "Amrita Vishwa Vidyapeetham, Coimbatore ",
      "Department of Communication, Coimbatore ",
      "Constituent / University College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "645",
      "Amrita Vishwa Vidyapeetham, Coimbatore ",
      "Department of Social Work, Coimbatore ",
      "Constituent / University College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "988",
      "Anna University, Chennai ",
      "Adithya Institute of Technology ",
      "Affiliated College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "992",
      "Anna University, Chennai ",
      "AJK Institute of Management ",
      "Affiliated College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "993",
      "Anna University, Chennai ",
      "Akshaya College of Engineering and Technology ",
      "Affiliated College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "994",
      "Anna University, Chennai ",
      "AKSHAYA INSTITUTE OF MANAGEMENT STUDIES, COIMBATORE ",
      "Affiliated College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "1030",
      "Anna University, Chennai ",
      "ARULMURUGA TECHNICAL CAMPUS ",
      "Affiliated College",
      "Tamil Nadu",
      "Coimbatore"
   ],
   [  
      "1034",
      "Anna University, Chennai ",
      "ASL Pauls College of Engineering and Technology ",
      "Affiliated College",
      "Tamil Nadu",
      "Coimbatore"
   ]
]
```

---------------------------------------

###Listing all State

#### Example

**REQUEST :**
```
POST /allstates HTTP/1.1
HOST: localhost:8081
```

**RESPONSE :**

```json
[  
   "Andhra Pradesh",
   "Telangana",
   "Punjab",
   "Gujarat",
   "Tamil Nadu",
   "West Bengal",
   "Kerala",
   "Uttar Pradesh",
   "Karnataka",
   "Bihar",
   "Assam",
   "Madhya Pradesh",
   "Chhatisgarh",
   "Himachal Pradesh",
   "Odisha",
   "Haryana",
   "Maharashtra",
   "Delhi",
   "Jharkhand",
   "Rajasthan",
   "Lakshadweep",
   "Sikkim",
   "Manipur",
   "Tripura",
   "Meghalaya",
   "Arunachal Pradesh",
   "Mizoram",
   "Uttrakhand",
   "Goa",
   "Dadra & Nagar Haveli",
   "Daman & Diu",
   "Chandigarh",
   "Nagaland",
   "Jammu and Kashmir",
   "Puducherry",
   "Andaman & Nicobar Islands"
]
```

---------------------------------------

###Listing districs in a State

#### Example

**REQUEST :**

```
POST /district HTTP/1.1
HOST: localhost:8081
State: Tamil Nadu
 ```

**RESPONSE :**

```json
[  
   "Sivaganga",
   "Ramanathapuram",
   "Coimbatore",
   "Thiruvallur",
   "Chennai",
   "Kancheepuram",
   "Vellore",
   "Krishnagiri",
   "Madurai",
   "Erode",
   "Viluppuram",
   "Namakkal",
   "Tiruppur",
   "Thiruvarur",
   "Thanjavur",
   "Kanniyakumari",
   "Tiruvannamalai",
   "Salem",
   "Dindigul",
   "Ariyalur",
   "Cuddalore",
   "Nagapattinam",
   "Tirunelveli",
   "Theni",
   "Tiruchirappalli",
   "Thoothukkudi",
   "Pudukkottai",
   "Karur",
   "The Nilgiris",
   "Perambalur",
   "Dharmapuri",
   "Virudhunagar"
]
```

##Contributers
* [Arun ( Lead. Coordinator )](https://github.com/ArunKumarSS)
* [Jacob Samro](https://github.com/JacobSamro)
* [Dhinakaran](https://github.com/DhinakaranSDK)


Project Developed at Center of Excellence, SriGuru Institute of Technology

