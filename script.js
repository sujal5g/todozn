let item = document.getElementById("display");
const toDo = document.getElementById("lists");   

let newtask=()=>{
    if(item.value==""){
        message.innerHTML="Add New Task";
    }else{
        const Task=document.createElement("li");
        toDo.appendChild(Task);
        Task.innerHTML=`${item.value}&nbsp<button id="remove" onclick="remove(this)">Delete</button>`;
        item.value="";
        save();
        message.innerHTML="";
    }
  
}
const remove=(value)=>{
    value.parentElement.remove()
    save();
}

const save=()=>{
    localStorage.setItem("Data",toDo.innerHTML)
}
const show=()=>{
    toDo.innerHTML=localStorage.getItem("Data");
}
show();
