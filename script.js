let list=document.getElementById("lists");
let display=document.getElementById("display");
let btn=document.getElementById("Task");
let message=document.getElementById('message');
let newel;
let flag=false;
btn.addEventListener('click',()=>{
    if(display.value==""){
        message.innerHTML="Enter New Task";
    }else{
        message.innerHTML="";
        newel=document.createElement('li');
        list.appendChild(newel);
        newel.innerHTML=`${display.value} &#160 <svg onclick="myfuction()" class="closebtn
        " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 60 30">
        <path d="M 6.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>`;
        display.value="";
    }
})
function myfuction(){
    list.removeChild(list.firstElementChild);
}




