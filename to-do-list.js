let myArray=[];
rendertodolist();
function rendertodolist(){
    let todolisthtml='';
    myArray.forEach((todoobject,index)=>{
        const {name,dueDate}=todoobject
        const html=`<div class='name'>${name}</div>
        <div>${dueDate}</div>
        <button class='delete' onclick="myArray.splice(${index},1); rendertodolist();" >Delete</button>`;
        todolisthtml+=html;
    })
    /*for(let i=0;i<myArray.length;i++){
        const html=`<div class='name'>${myArray[i].name}</div>
        <div>${myArray[i].dueDate}</div>
        <button class='delete js-delete-button'>Delete</button>`;
        todolisthtml+=html;
    }*/
    console.log(todolisthtml);
    document.querySelector('.js-to-do').innerHTML=todolisthtml;
}

document.querySelectorAll(".js-delete-button")
.forEach((deletebutton,index)=>{
    deletebutton.addEventListener('click',()=>{
        myArray.splice(index,1); 
        rendertodolist();
    })
})

document.querySelector(".js-add-todo-button").addEventListener
    ('click',()=>{
            updateonconsole();
        }
    )
function updateonconsole(){
    const inputElement=document.querySelector(".js-input");
    let name=inputElement.value;
    const inputElementDate=document.querySelector(".js-input-date");
    let dueDate=inputElementDate.value;
    myArray.push({name,dueDate});
    inputElement.value='';
    inputElementDate.value='';
    console.log(myArray);
    rendertodolist();
}
function handleWithEnter(event){
    if(event.key==='Enter'){
        updateonconsole();
    }
}
