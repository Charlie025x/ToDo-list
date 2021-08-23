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