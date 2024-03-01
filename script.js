const inputText = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask(){
    if(inputText.value === ''){
        alert("Please add your Task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputText.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputText.value = "";
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

// Darkmode Settings
let darkmode=localStorage.getItem('darkmode');
const darkModeToggle = document.querySelector('#darkMode-toggle')

const enableChange = () =>{
    document.body.classList.add('darkmode');

    localStorage.setItem("darkmode", "enabled");
}
const disableChange = () =>{
    document.body.classList.remove('darkmode');

    localStorage.setItem("darkmode", null);
}

if (darkmode === "enabled"){
    enableChange();
}

darkModeToggle.addEventListener('click', () =>{
    darkmode = localStorage.getItem('darkmode')
    if(darkmode !== "enabled"){
        enableChange();
    }else{
        disableChange();
    }
})