const colors=document.querySelectorAll('.color');
const body=document.querySelector('body');

colors.forEach((ele) => {
    console.log(ele);
    ele.addEventListener('click',(e)=>{
        console.log(e);
        if(e.target.id=="gray"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="blue"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="purple"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=="black"){
            body.style.backgroundColor=e.target.id;
            body.style.color="white";
        }
        if(e.target.id=="green"){
            body.style.backgroundColor=e.target.id;
        }
    });
});