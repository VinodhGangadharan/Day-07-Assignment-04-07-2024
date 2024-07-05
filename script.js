
/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
1)Get all the countries from Asia continent /region using Filter method
2)Get all the countries with a population of less than 2 lakhs using Filter method
3)Print the following details name, capital, flag, using forEach method
4)Print the total population of countries using reduce method
5)Print the country that uses US dollars as currency.*/


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload= function (){
   var result = JSON.parse(request.response);
   //console.log(result);

   
   //1) Get all the countries from Asia continent /region using Filter method

   var countries = result.filter((ele) => ele.region =="Europe").map ((ele)=>ele.name.common);
   console.log(countries);

   /*Output:

   (53) ['Iceland', 'Luxembourg', 'Estonia', 'Belarus', 'Greece', 'Åland Islands', 'San Marino', 'Italy', 
    'Monaco', 'Slovakia', 'Faroe Islands', 'North Macedonia', 'Cyprus', 'Lithuania', 'Moldova', 'Switzerland',
     'Norway', 'Croatia', 'Finland', 'Russia', 'Andorra', 'Austria', 'Spain', 'Jersey', 'Sweden', 
     'Isle of Man', 'Romania', 'Bosnia and Herzegovina', 'Malta', 'Netherlands', 'United Kingdom', 
     'Ukraine', 'Portugal', 'Slovenia', 'Belgium', 'Poland', 'Czechia', 'Denmark', 'Montenegro', 'France',
      'Ireland', 'Hungary', 'Liechtenstein', 'Gibraltar', 'Guernsey', 'Germany', 'Vatican City', 'Albania',
       'Svalbard and Jan Mayen', 'Latvia', 'Serbia', 'Kosovo', 'Bulgaria']*/

   //2) Get all the countries with a population of less than 2 lakhs using Filter method

   var countries1 = result.filter((ele) => ele.population < 200000).map ((ele)=>ele.name.common);
   console.log(countries1);

   /*Output:

   (62) ['Wallis and Futuna', 'United States Virgin Islands', 'Åland Islands', 'San Marino', 'Monaco', 
    'Faroe Islands', 'Niue', 'Micronesia', 'Montserrat', 'Curaçao', 'Cocos (Keeling) Islands', 
    'Turks and Caicos Islands', 'Cayman Islands', 'Marshall Islands', 'Anguilla', 'Saint Barthélemy', 
    'Grenada', 'Tuvalu', 'Heard Island and McDonald Islands', 'United States Minor Outlying Islands', 
    'Saint Helena, Ascension and Tristan da Cunha', 'Andorra', 'Tokelau', 'Sint Maarten', 'Jersey', 
    'Isle of Man', 'Saint Kitts and Nevis', 'Greenland', 'British Indian Ocean Territory', 'Seychelles',
     'British Virgin Islands', 'Bouvet Island', 'Saint Vincent and the Grenadines', 'Caribbean Netherlands',
      'Cook Islands', 'Saint Lucia', 'South Georgia', 'Samoa', 'Falkland Islands', 'Nauru', 
      'Saint Pierre and Miquelon', 'Pitcairn Islands', 'Guam', 'Liechtenstein', 'Gibraltar', 'Guernsey',
       'Vatican City', 'French Southern and Antarctic Lands', 'Svalbard and Jan Mayen', 'Tonga', 
       'Antigua and Barbuda', 'Antarctica', 'Kiribati', 'Palau', 'Norfolk Island', 'Christmas Island', 
       'Bermuda', 'Dominica', 'Northern Mariana Islands', 'American Samoa', 'Aruba', 'Saint Martin']*/

   //3) Print the following details name, capital, flag, using forEach method
 
   result.forEach((element)=>{
    console.log(element.name.common,element.capital,element.flag);
})

/*Output : 

Wallis and Futuna ['Mata-Utu'] 🇼🇫
Iceland ['Reykjavik'] 🇮🇸
Luxembourg ['Luxembourg'] 🇱🇺
Mali ['Bamako'] 🇲🇱
Comoros ['Moroni'] 🇰🇲
Australia ['Canberra'] 🇦🇺
Estonia ['Tallinn'] 🇪🇪
Canada ['Ottawa'] 🇨🇦 
.....................
...................... */

   //4) Print the total population of countries using reduce method

   var res = result.map((ele) => ele.population).reduce((acc,cv) => acc+cv,0);
   console.log(res);

   /*Output :

   7777721563*/

   //5) Print the country that uses US dollars as currency

  
    const datas = result
      .filter((item) => item?.currencies?.USD)
      .map((value) => value.name.common);
    //console.log(datas);
    datas.forEach((element)=>{
      console.log(element);})

/*Output:

Cambodia
United States Virgin Islands
El Salvador
Micronesia
Turks and Caicos Islands
Puerto Rico
Marshall Islands
.............................
.............................*/

}

