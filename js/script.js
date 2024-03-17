// Ref for event listeners.
const toggleBtn = document.getElementById('toggleBtn');

// Refs for things to change at DOM.
const sunImg = document.getElementById('sunImg');
const moonImg = document.getElementById('moonImg');

// Dark mode refs.
const dmTexts = document.querySelectorAll('.dm__text');
const dmTittle = document.querySelectorAll('.dm__tittle');
const dmBackground = document.querySelectorAll('.dm__background');
const dmButton = document.querySelectorAll('.dm__btn');
// Array of DOM refs to made iteration easier.
const domItems = [dmTexts, dmTittle, dmBackground, dmButton];

// Set inital values for local storage on firts load. It changes the view on load too.
setLocalStorage();

// Listener to change the view mode. Get's the actual view mode from localStorage, changes it, changes the view, and then
// stores the new value on localStorage.
toggleBtn.addEventListener('click', () => {
    let darkmodeState = JSON.parse(localStorage.getItem('darkmode'));

    darkmodeState = !darkmodeState;

    changeMode(darkmodeState, true);

    localStorage.setItem('darkmode', JSON.stringify(darkmodeState));
});

// Function to set the initial value on localStorage items on first load of the webpage. It applies the value that corresponds.
function setLocalStorage() {
    localStorage.getItem('darkmode') === null ? localStorage.setItem('darkmode', JSON.stringify(false)) : "";
    
    let darkmodeState = JSON.parse(localStorage.getItem('darkmode'));

    changeMode(darkmodeState);
}

// Function to control the change of dark mode to ligth mode, and reverse. Runs the array of DOM items, and then each individual
// item. If it's a item with an animation, it gives the value so it can initiate his animation.
function changeMode(state, click){
    domItems.forEach((itemArr) => {
        itemArr.forEach((domItem) => {
            state ? domItem.classList.add('darkMode') : domItem.classList.remove('darkMode');
            itemArr === dmButton && click && domItem.style.animationDuration != '0.3s' ? domItem.style.animationDuration = '.3s' : "";
        })
    })
}