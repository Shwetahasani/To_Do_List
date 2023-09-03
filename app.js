const item =   document.querySelector("#item")
const todo_box =   document.querySelector("#todo_box");
 item.addEventListener(
    "keyup",
    function(event){
      if(event.key=="Enter"){
        Todo(this.value);
        this.value="";
      }
    }
 )
 const Todo =(item)=>{
     const ListItem = document.createElement("li");
     ListItem.innerHTML=`
     ${item}
      <i class="fas fa-times"></i>
     `;
     ListItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
     )
     ListItem.querySelector("i").addEventListener(
 "click",
function(){
ListItem.remove()
}
     )
     todo_box.appendChild(ListItem);
 }
