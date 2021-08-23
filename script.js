const newListInput = document.querySelector('[data-new-list-input]')
const addBtn = document.querySelector('[data-btn-add-list]')
const listContainer = document.querySelector('[data-list-container]')

newListInput.onkeyup = () => {
    let userData = newListInput.value //getting user entered value
    if(userData.trim() !=0 ) { //if user values aren't only spaces
        addBtn.classList.add("active"); // activate add button
    } else {
        addBtn.classList.remove("active"); // deactivate add button
    }
}


// if user click on the add button
addBtn.onclick = () => {
    let userData = newListInput.value; // getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localStorage
    if(getLocalStorage == null) { // if localStorage is null
    listArr = []; //creating a blank array
    } else {
        listArr = JSON.parse(getLocalStorage); // transforming json string into a js object
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // transforming js object into a json string
    showTasks() // calling showTasks function
}

// function to add task list inside ul
const showTasks = () => {
    let getLocalStorage = localStorage.getItem("New Todo"); // getting localstorage
    if(getLocalStorage == null) { // if localStorage is null
        listArr = []; //creating blank array
    } else {
        listArr = JSON.parse(getLocalStorage); // transforming json string into a js object
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `
        <li>
            <span class="check"><i class="fas fa-check"></i></span>
            ${element}
            <span class="trash"><i class="fas fa-trash trash"></i></span>
        </li>
        `
    });
    listContainer.innerHTML = newLiTag; // adding new li tag inside ul tag
    newListInput.value = ''; // clear input field when new list is created
}

showTasks();