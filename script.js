const newListInput = document.querySelector('[data-new-list-input]')
const addBtn = document.querySelector('[data-btn-add-list]')
const listContainer = document.querySelector('[data-list-container]')
const Li = document.getElementsByTagName("li")

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
        <input type="checkbox" id="checkToggle">
            <label for="checkToggle">
                <span onclick="checkList(${index})" class="check"><i class="fas fa-check"></i></span>
            </label>
            ${element}
            <span onclick="deleteList(${index})" class="trash"><i class="fas fa-trash trash"></i></span>
        </li>
        `
    });
    listContainer.innerHTML = newLiTag; // adding new li tag inside ul tag
    newListInput.value = ''; // clear input field when new list is created
}

// delete list function
const deleteList = (index) => {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete or remove the particular indexed li
    // after remove the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // transforming js object into a json string
    showTasks(); // calling showTasks function
}

// check list function
// const checkList = (index) => {
//     let getLocalStorage = localStorage.getItem("New Todo");
//     listArr = JSON.parse(getLocalStorage);
//     // listArr.classList.togle("checked")
//     Li[(index)].classList.togle("checked");
//     showTasks(); // calling showTasks function
// }


showTasks();