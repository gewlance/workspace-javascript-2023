//generate numbers
function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var M = randInt(300,400);
var N = randInt(100,M);
var K = randInt(1,10);

console.log(M,N,K);

//put random number in HTML
document.getElementById("s1").textContent=M.toString();
document.getElementById("s2").textContent=N.toString();
document.getElementById("s3").textContent=K.toString();

document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + "+" + K.toString();

//action -- click action and shange style
function changeStyle(e){
    e.preventDefault(); //prevent default action
    //get the style of this element
    var classname = this.getAttribute("class");

    // the style of this element
    if(classname == "answer"){
        this.setAttribute("class","answer selected");
    }else{

    }

this.animate([{transform:'rotate(0deg)'},{transform: 'rotate(180deg)'}], {duration:3000,fill:"forwards"})


}

//add event listener
for (var i=0; i<4; i++){
    document.getElementsByClassName("answer")[i].addEventListener("click",changeStyle,false);
}