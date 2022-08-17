function hideContent(){
    document.getElementById('content').innerHTML="";
}
function hideDemo(){
    document.getElementById('demo').innerHTML ="";
}
function changecolor(){
    document.getElementById('content').style.color='red';
}
function hide(){
    const cars = ["Saab","Volvo","BMW"];
    const car = {name:"Audi",model:"A1"}
document.getElementById("demo").innerHTML ='const <span class="black">cars = ["Saab","Volvo","BMW"];</span>'+'<br/>'+'const <span class="black">car = {name:"Audi",model:"A1"} </span>'+'<br/>'+'Result :car.model +","+ cars[2] ::   '+car.model +","+ cars[2];
}



