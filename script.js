for(var i=0;i<myGender.length;i++){
    if(myGender[i].checked){
        if(myGender[i].value === "Male"){
            document.getElementById('message').innerHTML = "Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
            document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
            $('#message span:first-child').addClass("animated fadeInDown");
            $('#message span:last-child').addClass("animated fadeInUp");
        }
        else {
            document.getElementById('message').innerHTML = "Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
            document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
            $('#message span:first-child').addClass("animated fadeInDown");
            $('#message span:last-child').addClass("animated fadeInUp");
let date = document.getElementById("date")
let month = document.getElementById("month")
let year = document.getElementById("year")
let btn = document.getElementById("submit")

btn: addEventListener("click, function(e)"){
    e.preventDefault();
    calculate
}
function calculate(){
    let CC = year.value.slice(0,2)
    let YY = year.value.slice(2)
    let MM = month.value;
    let DD = date.value;
(d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7

// Set/Change the Year in the dropdown
// Eg: var month=new array("January","February",..);
let month = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var startyear = "1950"; // Change the Starting year in your dropdown
var endyear = "2013";
// Change the ending year in the dropdown
function dayborn() {
var month = document.bornday.birthmonth.options[document.bornday.birthmonth.selectedIndex].value;
var day = document.bornday.birthday.options[document.bornday.birthday.selectedIndex].value;
var year = document.bornday.birthyear.options[document.bornday.birthyear.selectedIndex].value;
var birthday = new Date(month,day,year);
var dayborn = birthday.getDay();
var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
alert("You were born on a " + weekday[dayborn]);
}

function formSubmit(event){
    event.preventDefault();
}

let yearofBirth = document.getElementById("DOB").value;
console.log(yearofBirth);

 femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"
     document.myForm.year.focus() 
]


  //creating arrays of Akan names for males & females and days of the week
  let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]

  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ]

  let femaleAkanNames = [
    "Akosua", "Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"
  ]

  if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
    return false;
  } else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
    return false;
  } else {
    alert("You entered an invalid day or month, please try again");


//CC - is the century digits. For example 1989 has CC = 19//

//YY - is the Year digits (1989 has YY = 89)//

//MM -  is the Month//

//DD - is the Day of the month 

//mod - is the modulus function ( % )//
}}