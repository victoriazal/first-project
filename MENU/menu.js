
const list = document.querySelector('.Top_menu');
let previousVal;
list.addEventListener('mouseover', (event) => {
    const el = event.target;
    if (el.tagName !== 'A') {
        return;
    }
    if (previousVal) {
        previousVal.classList.remove('underline');
    };
    el.classList.add('underline');
    previousVal = el;
});
//tut typo otkuda ti sidish 
let agent = navigator.userAgent;
console.log(agent)


