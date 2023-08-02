// informacion de fecha
const dateNumber= document.getElementById('dateNumber');
const dateMunth=document.getElementById('dateMunth');
const dateYear= document.getElementById('dateYear');
const dateText=document.getElementById('dateText');

// contenedor de lista
const taskContainer = document.getElementById('taskContainer');

//ceteamos fecha
const setDate= () =>{
    const date= new Date();
    //vareable             agregamos el dato      español/ dia /numerico
    dateNumber.textContent=date.toLocaleDateString('es',{day:'numeric'});
     //vareable             agregamos el dato     español/ mes /abreviado
    dateMunth.textContent=date.toLocaleDateString('es',{month:'short'});
     //vareable             agregamos el dato    español/ año /numerico
    dateYear.textContent=date.toLocaleDateString('es',{year:'numeric'});
    //vareable             agregamos el dato    español/ fecha /completo
    dateText.textContent=date.toLocaleDateString('es',{weekday:'long'});
}
setDate();


//crameamos funcion para agregar nuvas tareas


const btnAdd = document.getElementById('btnAdd'); 


 const addNewTask = event => {

        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
      
        const { value } = event.target.elements.taskText; // Obtiene el valor del input correctamente
      
        if (!value) return; // Si está vacío el input, la función termina
      
        const task = document.createElement('div');//cra un div para poner la tarea para hacer
        task.classList.add('task', 'roundBorder'); //le agrega las clases
        task.addEventListener('click', changeTaskState);//lo hace clickeable y le pone una funcion 
        task.textContent = value;//le pone el texto del input que nosotros mandamos 
        taskContainer.prepend(task);
        event.target.reset(); // Resetea el formulario después de enviar la tarea   
};

const changeTaskState= event =>{
    event.target.classList.toggle('done');
}
const order=()=>{
    const done=[];
    const toDo=[];
    taskContainer.childNodes.forEach( el=>{
        el.classList.contains('done') ? done.push(el) : toDo.push(el);

    })
    return[ ...toDo,...done];
}

const renderOrderdTask=()=>{
    order().forEach(el=> taskContainer.appendChild(el));
}
