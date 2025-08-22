document.querySelector("button").addEventListener("click", function () {
var Variable1 = Math.floor((Math.random())*6)+1;
 var dices1 = "images/dice" + Variable1 + ".png";
 document.querySelectorAll("img")[0].setAttribute("src", dices1);

 var Variable2 = Math.floor((Math.random())*6)+1;
 var dices2 = "images/dice" + Variable2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src", dices2);

  var Variable3 = Math.floor((Math.random())*6)+1;
 var dices3 = "images/dice" + Variable3 + ".png";
 document.querySelectorAll("img")[2].setAttribute("src", dices3);

 
if (Variable1 > Variable2 && Variable1 > Variable3) {
    document.querySelector("h1").innerHTML= "Ganja Kai Wins";
}
else if(Variable2 > Variable1 && Variable2 > Variable3) {
    document.querySelector("h1").innerHTML= "Routeuh Thala Wins";
}
else if(Variable3 > Variable2 && Variable3 > Variable1) {
     document.querySelector("h1").innerHTML= "President Wins";
}
else {
    document.querySelector("h1").innerHTML= "Draw The Match";
}
});
