const handleClick=()=>{
    const todoContainer=document.querySelector('.todo_container');

    // take input
    const input=document.getElementById('input').value;
    document.getElementById('input').value=''
    // console.log(input);

    // create todo item element
    const todoItem=document.createElement('div');
    todoItem.setAttribute('class','todo_item');
    
    const h3=document.createElement('h3');
    h3.innerText=input;
    todoItem.appendChild(h3);

    const btns=document.createElement('div');
    btns.setAttribute('class','btns');

    const updateBtn=document.createElement('button');
    updateBtn.setAttribute('class','btn');
    updateBtn.setAttribute('onclick',"handleUpdate(this)");
    updateBtn.innerText='Update';


    const deleteBtn=document.createElement('button');
    deleteBtn.setAttribute('class','btn');
    deleteBtn.setAttribute('onclick',"handleDelete(this)");
    deleteBtn.innerText='Delete'

    btns.appendChild(updateBtn);
    btns.appendChild(deleteBtn);

    todoItem.appendChild(btns);


    // append in main container
    todoContainer.append(todoItem);
    // console.log(todoItem);
}


const handleDelete = (e) => {
    const todoItem=e.parentNode.parentNode;
    const todoContainer=todoItem.parentNode;
    todoContainer.removeChild(todoItem);
    console.log(todoContainer);
}

// const handleUpdate=(e)=>{
//     if(e.innerText=='Save'){
//         e.innerText='Update'
//     }
//     else{
//         e.innerText='Save'

//     }
//     console.log(e);
// }