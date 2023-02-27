var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);

//Q1.Get all the countries from the Asia continent /region using the Filter function
var res=result.filter((ele)=>ele.region==="Asia");
console.log(res);

//Q2.Get all the countries with a population of less than 2 lakhs using Filter function
var res=result.filter((ele)=>ele.population<200000);
var final=res.map((ele)=>ele.name);
console.log(final);

//Q3.Print the following details name, capital, flag using forEach function
result.forEach((ele)=>console.log(ele.name,ele.capital,ele.flag));

//Q4.Print the total population of countries using reduce function
var final=result.reduce((a,b)=> a+b.population,0);
console.log(final);

//Q5.Print the country which uses US Dollars as currency.
var res=result.filter((ele)=>ele.currencies);
var final=res.filter((ele)=>ele.code==="USD");
console.log(final);
}