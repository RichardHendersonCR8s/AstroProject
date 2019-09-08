/*
Notes to remember:

True and False are lowercase like true and false.

To use the logical operator AND we use &&

Increment adds one ot the current number. To use increment we use ++. For the opposite we use --

A function is written like...

function area(width,height) {
    return width * height;
}
var size = area(3,4)

You can also use a function expressoin/ anonymous function. It uses a variable to creat it...

var area = function(width,height) {
    return width * height;
}

var size = area(3,4)

Immediatly Invoked Function Expressions...(IIFE)
These are not given a name, instead they are executed once as the interpreter comes across them.

var area = (function() {

    var width = 3;
    var height = 2;
    return width * height;
}() )

The () after the curly bracket is what tells the interpreter to call the function immediatly.



------------

{} = an Object in Javscript. They work almost like a dictionary from Python combined with a class / object in python...
    For example...

    var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double' , 'suite' ],

    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}

A "constructior:" basically lets you use these objects as if the were classes, similar to Python.

The object this is similar to self in Python.

You can access object properties or methods by using

hotel.name;     OR      hotel['name'];

JS doesn't use the same type of inheritance that Python uses. It instead uses somethign called prototypes.





You could also do

var hotel = new Object();
hotel.name = 'Quay'
hotel.rooms = 40
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
}
etc.



BEST WAY IF MAKING MULTIPLE SIMILAR OBJECTS! CLASS-LIKE WAY

funtion Hotel(name,rooms,booked) {
    this.name = name;
    this.rooms = rooms ;
    this.booked = booked;
    this.checkAvailability = function(){
            return this.rooms - this.booked;
    }

}

then you can go ahead AND

var hotel1 = new Hotel('swank',12,4)


delete hotel.booked ,   this would basically be used to delete anything from an object.



DEFAULT GLOBAL SCOPE OBJECT = WINDOW OBJECT!
-


*/

// The script below is placed in an immediatly invoked functoin Expressions
// This helps to protect the scope of variables




/* DATES!

getDate()   /  setDate()      : returns a Date
getDay()
getFullYear() / setFullYear()
getHours() / setHours()
getMilliseconds() / setMilliseconds()
getMinutes() / setMinutes()
getMonth() / setMonth()
getSeconds() / setSeconds()
getTimes() / setTime()   : number of milliseconds since jan 1, 1970 and a negitive number for anytime before.
getTimezoneOffset()   : rturns time zone offset in mins for locale.

toDateString()    : returns "date as a human-readable string"  ie: Wed APr 16 1975
toTimeString()
toString()


all specific date times are formated as such...

YYYY, MM , DD, HH, MM , SS
1995, 03,  15, 21, 50 , 40

*/


var getDates = function(startDate, stopDate){
    var arr = [];
    var currentDate = new Date(startDate);
    while (currentDate <= stopDate) {
        arr.push(currentDate);
        currentDate.setDate(currentDate.getDate()+1);

    }
    return arr;
}



function Zodiac(name,start,end,element,quality,zodiacMonths,comments){
    this.name = name;
    this.start = start;
    this.end = end;
    this.range = getDates(start,end);
    this.element = element;
    this.quality = quality;
    this.zodiacMonths = zodiacMonths;
    this.comments = comments;
}



/* So to find the consumer's zodiac what should first do is find the birth month.
    After getting the birth month that allows us to quickly reduce the choices down to two different zodiacs.
    After doing that we can then check the birth day to find out what zodiac the consumer has.

    A for loop would do this for a shania's birthday.

        for zodiac in zodiacList {
            while zodiac.

    Ehhh now that i think of it the above would be quite difficult and confusing. Maybe it would have
    been easier if each Zodiac object simply had a startDay ,startMonth, endDay,endMonth parameters.
    Not really sure.


    I could either do that or instead just check for their birthdate in each zodiac range and then exit out of the loop as soon as a match is found. EIther way we have to loop through

    first we have to set the birthdate to something that corresponds to what we have in our code....which is dates for the year 2000 for the most part, except for Janurary 1- 19.

    idk if miy and below is written correctly.

    if (birthMonth = 0 && birthDay =< 19 ){
        zodiacBirthDate = new Date(setDate(2001,birthMonth,birthDay))
    else {
        zodiacBirthDate = new Date(setDate(2000,birthMonth,birthDay))

    }


    I might be able to use a Switch here to find the consumer's zodiac sign...


    }
-

    for zodiac in zodiacList{}


*/

var aquarius = new Zodiac("Aquarius",new Date(2000,0,20), new Date(2000,1,18), "Air" , "Fixed" ,[0,1],["No Comments"])
var pisces = new Zodiac("Pisces",new Date(2000,1,19), new Date(2000,2,20), "Water" , "Mutable" ,[1,2], ["No Comments"])
var aries = new Zodiac("Aries",new Date(2000,2,21), new Date(2000,3,19),"Fire" , "Cardinal" ,[2,3], ["No Comments"])
var taurus = new Zodiac("Taurus",new Date(2000,3,20), new Date(2000,4,20), "Earth" , "Fixed" ,[3,4], ["No Comments"])
var gemini = new Zodiac("Gemini",new Date(2000,4,21), new Date(2000,5,20), "Air" , "Mutable" ,[4,5], ["No Comments"])
var cancer = new Zodiac("Cancer",new Date(2000,5,21), new Date(2000,6,22),"Water" , "Cardinal" ,[5,6], ["No Comments"])
var leo = new Zodiac("Leo",new Date(2000,6,23), new Date(2000,7,22),"Fire" , "Fixed" ,[6,7], ["No Comments"])
var virgo = new Zodiac("Virgo",new Date(2000,7,23), new Date(2000,8,22),"Earth" , "Mutable" ,[7,8], ["No Comments"])
var libra = new Zodiac("Libra",new Date(2000,8,23), new Date(2000,9,22), "Air" , "Cardinal",[8,9] , ["No Comments"])
var scorpio = new Zodiac("Scorpio",new Date(2000,9,23), new Date(2000,10,21),"Water" , "Fixed",[9,10] , ["No Comments"])
var sagittarius = new Zodiac("Sagittarius",new Date(2000,10,22), new Date(2000,11,21),"Fire" , "Mutable" ,[10,11], ["No Comments"])
var capricorn = new Zodiac("Capricorn",new Date(2000,11,22), new Date(2001,0,19), "Earth" , "Cardinal" ,[11,0], ["No Comments"])


var zodiacList = [aquarius,pisces,aries,taurus,gemini,cancer,leo,virgo,libra,scorpio,sagittarius,capricorn];




function Person(name,age,sex,race,birthMonth,birthDay,birthYear) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.race = race;
    this.birthDate = new Date(birthYear , birthMonth, birthDay)
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
    this.hello = function(){
        return 'Hello ' + name + '! Welcome to our club!'
    }




    this.zodiacDateConvert = function(){
        if (this.birthMonth == 0 && this.birthDay <= 19) {
            zodiacBirthDate = new Date(2001,this.birthMonth,this.birthDay);
            return zodiacBirthDate
        }
        else {
            zodiacBirthDate = new Date(2000,this.birthMonth,this.birthDay)
            return zodiacBirthDate;
        }

    };


    this.myZodiacDate = this.zodiacDateConvert();

    this.findSign = function(){
        myZodiacMonth = this.myZodiacDate.getMonth()
        myZodiacDay = this.myZodiacDate.getDate()

        for (var i = 0 ; i < zodiacList.length; i++ ){
            currentSign = zodiacList[i];

            if  (currentSign.zodiacMonths.includes(myZodiacMonth) && currentSign.range.includes(this.myZodiacDate.getDate())){
                mySign= zodiacList[i];
                break;

            }

        }

        return i

            /*if (currentSign.zodiacMonths.includes(getMonth(this.myZodiacDate))){
                for (var i = 0; i <= currentSign.range; i++) {
                    if (currentSign.range.includes(this.myZodiacDate.getDate())){
                        mySign = currentSign.name
                        return mySign
                    };
                ;}

            } */


    }
    this.zodiacSign = this.findSign()



};











var shania = new Person('Shania Osburn',21,'Female','African American',10, 26, 1997);

var elShaniaHello = document.getElementById('shaniaHello');
elShaniaHello.textContent = shania.hello();

var elShaniaBirthday = document.getElementById('shaniaDob');
elShaniaBirthday.textContent = "Birth Date: " + shania.birthDate;

var elShaniaAge = document.getElementById('shaniaAge');
var today = new Date();
var year = today.getFullYear();
var difference = today.getTime() - shania.birthDate.getTime() ;
difference = (difference / 31556900000);

var elShaniaZodiac = document.getElementById('shaniaZodiac');

elShaniaZodiac.textContent = shania.zodiacSign

elShaniaAge.textContent = "You have stated that you are " + shania.age + "years old. Our calculations show that you are " + difference + " years old and that you were born on a" + shania.birthDate.getDay() + " !";
