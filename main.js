let billPriceInput = document.querySelector("#billPrice");
let custtomInput = document.querySelector("#custom");
let lables = document.querySelectorAll(".radio-btn");
let inptradiobtns = document.getElementsByName("size");
let numofpeopleInput =document.querySelector(".inpt-numofpeople");
let taxPerPerson =document.querySelector(".tax-per-person");
let total =document.querySelector(".total");
let reset = document.querySelector(".reset")



let radiopercentage = 0;
let  radioValue=[];
inptradiobtns.forEach((radio,i)=>{
    radio.addEventListener("click",(e)=>{
                radioValue.push(parseInt(radio.value))
                 radiopercentage = i;
              
})
})

//remove check class from all lables and put it what i clicked
lables.forEach((label)=>{
    label.addEventListener("click",()=>{
        lables.forEach((l,i)=>{
            l.classList.remove("check");
          })
            label.classList.add("check");
       })
   
   })

console.log(radioValue)

// main function 

numofpeopleInput.onblur=function(){

let billBriceValue =parseFloat(billPrice.value);
let radiopercentagevalue = radioValue[0]/100;
let numofpeopleValue=parseFloat( numofpeople.value);
let custompercentage = parseInt(custom.value)/100 
 console.log(custompercentage)
    let tax = (billBriceValue*radiopercentagevalue||billBriceValue*custompercentage)/numofpeopleValue;
    console.log(tax)
    taxPerPerson.innerHTML =tax.toFixed(2);
    let billperperson =(billBriceValue/numofpeopleValue)+ (+tax.toFixed(2));
    console.log(billperperson)
    total.innerHTML=billperperson.toFixed(2);
  
}


// refresh the page 

reset.onclick = function(){
    window.location.reload();
}




