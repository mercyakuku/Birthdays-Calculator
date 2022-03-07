</*for(var i=0;i<myGender.length;i++){
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
            $('#message span:last-child').addClass("animated fadeInUp");*/
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

<script type="text/javascript">
// Set/Change the Year in the dropdown
// Eg: var month=new array("January","February",..);
var month = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
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
</script>


//CC - is the century digits. For example 1989 has CC = 19//

//YY - is the Year digits (1989 has YY = 89)//

//MM -  is the Month//

//DD - is the Day of the month 

//mod - is the modulus function ( % )//
}

let str = "1989"
let str1 = str.slice(0,2)
console.log(str1)