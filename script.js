const item = document.querySelector("#display")
const toDo = document.querySelector("#lists");

           
const newtask = () => {
    if(item.value==""){
        message.innerHTML="Enter New task";
    }else{
        const newel = document.createElement("li");
    newel.innerHTML = `
         ${item.value}
        <i class="fas fa-times"></i>
    `;
    newel.querySelector("i").addEventListener(
        "click",
        function() {
            newel.remove()
        }
    )
    message.innerHTML="";
    item.value="";
    toDo.appendChild(newel);
    }
    
}





