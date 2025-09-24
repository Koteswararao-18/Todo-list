todosarray=[
    {task:"i want to play cricket.",time:"7am"},
    {task:"i have to go to market.",time:"10am"},
    {task:"i want to meet sandya.",time:"6pm"},
    {task:"i want to meet Radha.",time:"8pm"},
    {task:"i have to read books.",time:"10pm"}
]

function display(){
    let trs="";
    for(let ind in todosarray){
        trs+=`
        <tr>
            <td>${todosarray[ind].task}</td>
            <td>${todosarray[ind].time}</td>
            <td><button onclick="deletetask(${ind})">delete</button></td>
            <td><button onclick="edittask(${ind})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button></td>
        </tr>
        `
    }
       let table=`
       <table border="1px">${trs}</table>
       `
        let elem=document.getElementById("abc");
        elem.innerHTML=table;
}
display();


function deletetask(index){
    todosarray.splice(index,1);
    display();
}
let i=0;
function edittask(index){
  i=index;
    let taskelem=document.getElementById("tasktextbox");
    let timeelem=document.getElementById("timetextbox");

    let selectedtask=todosarray[index];

    taskelem.value=selectedtask.task;
    timeelem.value=selectedtask.time;
}
function save(){
    let taskelem=document.getElementById("tasktextbox");
    let timeelem=document.getElementById("timetextbox");

    let obj={
        task:taskelem.value,
        time:timeelem.value
    }
    todosarray[i]=obj;
    display();
    
}

function addtask(e){
    e.preventDefault();
    let allforms=document.forms;
    let taskelem=allforms.addform.task;
    let timeelem=allforms.addform.time;
    
    let obj={
        task:taskelem.value,
        time:timeelem.value
    }
    todosarray.push(obj);
    display();
}