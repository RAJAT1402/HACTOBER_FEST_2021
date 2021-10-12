var uid = new ShortUniqueId();
let input = document.querySelector(".task_input");
let mainContainer = document.querySelector(".main-container");
let lockContainer = document.querySelector(".lock-container");
let unlockContainer = document.querySelector(".unlock-container");
let multiplyContainer = document.querySelector(".multiply-container");
let plusContainer = document.querySelector(".plus-container");
let plus = document.querySelector(".fa-plus");
// let span1 = document.querySelector(".close");
let modal = document.querySelector(".modal");
let smallbox = document.querySelector(".small");

let defaultcolor = "pink";
let colors = ["pink", "blue", "red", "green",];
let cfilter = "";
let deletebutton = true;
input.addEventListener("keydown", function(event) {
    if(event.code == "Enter" && input.value){
        let id = uid();
        createTask( id , input.value,true,defaultcolor);
        input.value = "";
        modal.style.display = "none";
        let selectedColor = document.querySelector(".border");
        let pinkColor = colorcontainer.querySelector(".pink");
        selectedColor.classList.remove("border");
        pinkColor.classList.add("border");
        defaultcolor = "pink";

    }
});


lockContainer.addEventListener("click", function(event) {
    numberofelements = document.querySelectorAll(".task_main-container>div");
    for (let i = 0;i<numberofelements.length;i++){
      numberofelements[i].contentEditable = false;
    }

    lockContainer.classList.add("active");
    unlockContainer.classList.remove("active");
})

unlockContainer.addEventListener("click",function(event){
    numberofelements = document.querySelectorAll(".task_main-container>div");
    for (let i = 0;i<numberofelements.length;i++){
      numberofelements[i].contentEditable = true;
    }

    lockContainer.classList.remove("active");
    unlockContainer.classList.add("active");
})
let addmode = false;
plusContainer.addEventListener("click",function(event) {

    modal.style.display = "block";
   
})

let deleteMode = false;
multiplyContainer.addEventListener("click",function(event) {


    deleteMode=!deleteMode;
    if(deleteMode){
        multiplyContainer.classList.add("active");
        plusContainer.classList.remove("active");
    }else{
        multiplyContainer.classList.remove("active");
    }
})
let colorcontainer = document.querySelector(".color-container");

colorcontainer.addEventListener("click",function(event) {
    let borderselect = document.querySelector(".border");
    if(event.target.classList[2] == "small"){
        borderselect.classList.remove("border");
        event.target.classList.add("border");
        defaultcolor = event.target.classList[1];
    }
});
    

window.addEventListener("click",function(e) {
    
    if(modal == e.target){ 
     modal.style.display= "none";   
    }
    if(e.target == plusContainer || e.target == plus){
        plusContainer.classList.add("active");
    }else if(e.target != plusContainer){ 
        plusContainer.classList.remove("active");
    }
    
})



function createTask( id,task,flag,color){
    let taskcontainer = document.createElement("div");
    taskcontainer.className = "task-container";
    mainContainer.appendChild(taskcontainer);
    taskcontainer.innerHTML = `
    <div class="task-header ${color}"></div>
    <div class="task_main-container">
        <h3 class="task_id">#${id}</h3>
        <div class="text" >${task}</div>
    </div>`;

    let taskheader = taskcontainer.querySelector(".task-header");
    let inputTask = taskcontainer.querySelector(".task_main-container>div");
    taskheader.addEventListener("click", function(e) {
        let currcolor = taskheader.classList[1];
        let idx = colors.indexOf(currcolor);
        let nextidx = (1+idx)%4;
        let nextcolor = colors[nextidx];
        color = nextcolor;
        taskheader.classList.remove(currcolor);
        taskheader.classList.add(nextcolor);

        let idWalaElem = taskheader.parentNode.children[1].children[0];
        let id = idWalaElem.textContent;
        id = id.split("#")[1];
        // console.log("id", id);
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString)
        // {id: "nDCn8Q", task: "ffdsjbdshf", color: "pink} , {}
        for (let i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].id == id) {
                tasksArr[i].color = color;
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));

    })

    taskcontainer.addEventListener("click",function(){
        if(deleteMode){
            let idWalaElem = taskheader.parentNode.children[1].children[0];
        let id = idWalaElem.textContent;
        id = id.split("#")[1];
        // console.log("id", id);
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString)
        // {id: "nDCn8Q", task: "ffdsjbdshf", color: "pink} , {}
        for (let i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].id == id) {
                tasksArr.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
            taskcontainer.remove();
        }
    })
    
         
    inputTask.addEventListener("blur", function (e) {
        let content = inputTask.textContent;
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString)
        // {id: "nDCn8Q", task: "ffdsjbdshf", color: "pink} , {}
        for (let i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].id == id) {
                tasksArr[i].task = content;
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
    })
    
    if (flag == true) {
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString) || [];
        let taskObject = {
            id: id,
            task: task,
            color: defaultcolor
        }
        tasksArr.push(taskObject);
        localStorage.setItem("tasks", JSON.stringify(tasksArr));
    }
   
}

let filtercolor = document.querySelector(".add-color-container");
filtercolor.addEventListener("click", function(e) { 
    let element = e.target;
    if(element !=filtercolor ){
       headcolor = element.classList[1];
       filter(headcolor);
    }
     
})

function filter(color){
    let taskbox = document.querySelectorAll(".task-container");
    if(cfilter != color){
        for(let i = 0; i < taskbox.length; i++){
            let taskhead = taskbox[i].querySelector(".task-header");

            if(taskhead.classList[1] == color){
             taskbox[i].style.display = "block";
            }else { 
             taskbox[i].style.display = "none";
            }
        } cfilter = color;
    }else {
        cfilter = "";
        for (let i = 0; i < taskbox.length; i++) {    
                taskbox[i].style.display = "block";
           
    }
    }
}
    


(function () {
let tasks = JSON.parse(localStorage.getItem("tasks"));
for(let i = 0; i < tasks.length; i++) {
    let {id,task,color} = tasks[i];
    createTask(id,task,false,color);
}
})();



 
