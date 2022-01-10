//function getlength(){
//    let result=document.getElementById("first").value;
//    let len=result.length;

//    document.getElementsByClassName("output")[0].innerHTML="Length of theword is "+len;
//}
//function getcountry(){
//    var select=document.getElementsById("list");
//    var newoption=document.createElement("option");
//    newoption.text=document.getElementById("textbox").value;
//    select.add(newoption)
//}
let y=Math.floor(Math.random()*10+1);
var guess=1;
document.getElementById("submitguess").addEventListener("click",function(){
    let x=document.getElementById("guessnumber").value;
    if(x==y){
        alert("Congratulations,You guessed the number in "+guess+" guesses")
    }
    else if(x>y){
        alert("your number is too high")
        guess++;
    }
    else if(x<y)
    {
        alert("your number is too low");
        guess++;
    }
})