let billPrice = document.querySelector("#billPrice");
let custtomInput = document.querySelector("#custom");
let lables = document.querySelectorAll(".radio-btn");
let numofpeopleInput =document.querySelector(".inpt-numofpeople");
let taxPerPerson =document.querySelector(".tax-per-person");
let total =document.querySelector(".total");
let reset = document.querySelector(".reset");
let popupBill=document.querySelector(".popup-bill");


let billBriceValue ="0.0";
let numofpeopleValue="1";
let radioValue=".15"

         
reset.onclick = function(){
 
    billPrice.value="";
    numofpeopleInput.value="";
    custtomInput.value="";
    taxPerPerson.innerHTML="0.00";
    total.innerHTML="0.00";
    lables.forEach((l)=>{
        l.classList.remove("check");
    });
    billPrice.style.borderColor="transparent";
    numofpeopleInput.style.borderColor="transparent";
    popupBill.style.opacity=0;
    reset.style.opacity=.3;

}         





lables.forEach((label,i)=>{
    label.addEventListener("click",(event)=>{
        lables.forEach((l)=>{
            l.classList.remove("check");
            if(event.target.innerHTML == label.innerHTML){
                label.classList.add("check");
                radioValue= parseFloat(label.innerHTML)/100;
               
            } 
          })
                custtomInput.value="";
                custtomInput.style.borderColor="transparent";
                calculatorTip()
   })      
 })


billPrice.addEventListener("input",()=>{
           if(!billPrice.value.length){
               billPrice.style.borderColor="rgb(223, 60, 60)";
               popupBill.style.opacity=1;
         }else{
               billPrice.style.borderColor="transparent";
               popupBill.style.opacity=0;
               billBriceValue=parseFloat(billPrice.value);
               calculatorTip()
           }
    })



numofpeopleInput.addEventListener("input",()=>{
         
        if(!numofpeopleInput.value.length){
            numofpeopleInput.style.borderColor="rgb(223, 60, 60)";
        }else{
            numofpeopleInput.style.borderColor="transparent";
            numofpeopleValue=parseFloat(numofpeopleInput.value);
            calculatorTip()
            }  
     })


custtomInput.addEventListener("input",()=>{
        if(!custtomInput.value.length){
            custtomInput.style.borderColor="rgb(223, 60, 60)";
            }else{
            custtomInput.style.borderColor="transparent";
            radioValue=parseFloat(custtomInput.value)/100;
        
            lables.forEach((l)=>{
                l.classList.remove("check");
            })
            calculatorTip()
            }  
    })


      
       function calculatorTip(){
             let tax=(billBriceValue*radioValue)/numofpeopleValue;
               taxPerPerson.innerHTML =tax.toFixed(2);
               let billperperson =(billBriceValue/numofpeopleValue)+ (+tax.toFixed(2));
               console.log(billperperson)
               total.innerHTML=billperperson.toFixed(2);
               reset.style.opacity=1;
       }     

 








