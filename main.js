let todo=document.querySelector('#todo');
let button=document.querySelector('#add');
let input=document.querySelector('#input');

//create a todoList array helps to add and delete from storage easily
let todoList=[];
window.onload=()=>{
   todoList= JSON.parse(localStorage.getItem('todoList')) || []
   todoList.forEach(list=>addlist(list))
}
console.log(todo)
//add eventlistener for button element

button.addEventListener('click',()=>{
    todoList.push(input.value);
   addlist(input.value);
    input.value='';
})
 

function addlist(list){
    //creating p elements dynamically
    let para = document.createElement("p");
    para.innerText=list;
   
    todo.appendChild(para);
    localStorage.setItem('todoList',JSON.stringify(todoList))
    para.addEventListener('dblclick',()=>{
       todo.removeChild(para);
       remove(list);

    })
    function remove(list){
      let index = todoList.indexOf(list)
      if (index > -1) {
       
          todoList.splice(index, 1);
          
        }
        
      localStorage.setItem('todoList',JSON.stringify(todoList))
      
  }
   
}

/* const makeElement = (type, properties) => {
    const element = document.createElement(type)
    // convert the properties object into a (key-value pair) array: 
    const propertyPairs = Object.entries(properties)
    
    propertyPairs.forEach(property => {
      // destructure the property array:
      const [propertyKey, propertyValue] = property
  
      element[propertyKey] = propertyValue
    })
  
    return element
  }  */
  /*const helloBtn = makeElement("button", {className: "helloBtn", textContent: "hello!", id: "btnId"});
  document.body.append(helloBtn);*/
 
