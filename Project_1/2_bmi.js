const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(height<=0 || isNaN(height) ||height==''){
        result.innerHTML="Please enter valid height";
    }
    else if(weight<=0 || isNaN(weight) ||weight==''){
        result.innerHTML= "Please enter valid weight" ;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category="";
    if(bmi<18.5){
        category="You are underweight";}
        else if(bmi >= 18.5 && bmi <= 24.9){
            category="You are Normal";}
            else
                {category="You are Overweight";}
    result.innerHTML=`Your BMI is ${bmi}, ${category}`;
 }
})