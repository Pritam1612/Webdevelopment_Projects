console.log("JAVASCRIPT CONNECTED")
// DATA Declaration
var age = 25;
let name = "PRITAM";
const pi = 3.14;


//FIXME - VAR :: IT IS A BLOCKED SCOPE 
if(true){
    console.log("Condition is true "+age);
}
function solution(){
    var age = 23;
    console.log(age);
}
console.log(age)
solution();

var x = 10;
var x = 20; //!SECTION :: IT WILL NOT GIVING ERROR MEANS WE CAN REDECLARE VAR ::

//FIXME - LET :: GLOBAL SCOPE AND BLOCKED SCOPE

console.log("LET ANSWER IS :: "  + name)
{
    let name2 = "SIYA";
    console.log(name2 )
}
// console.log(name2); //!SECTION :: WE CAN NOT ACCESS IT OUTSIDE THE BLOCK IT GIVE NOT DEFINED ERROR

// int name = "Priya" //!SECTION :: IT WILL GIVING ERROR MEANS WE CAN'T REDECLARE VAR ::
//NOTE - BUT WE CAN REASSIGNED IT
name = "Khusi";
console.log(name)