//что-то с фечом
async function getResponce() {
    const url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';
    let response = await fetch(url)
    let content = await response.json()



    let table = document.querySelector('.table');
    let womenCountElement = document.getElementById('women');
    let menCountElement = document.getElementById('men')
    let wealthElement = document.getElementById('wealth')

    let menCount = 0;
    let womenCount = 0;
    let moneyCount = '0';


    for (const key in content) {
        let date = new Date(content[key].registered);
        console.log(date.getDate)
        if (content[key].gender === 'female') {
            womenCount += 1;
        } else {
            menCount += 1;
        };


        if ((content[key].balance) > moneyCount) {
            moneyCount === (content[key].balance)
        };
        console.log(content[key].balance)

        table.innerHTML +=
            ` 
            <tr style='background: ${content[key].isActive ? '#F7DC68' : 'inherit'};'>
            <td>${content[key].name}</td>
            <td>${content[key].company}</td>
            <td>${content[key].email}</td>
            <td>${content[key].phone}</td>
            <td>${content[key].balance}</td>
            <td>${content[key].registered}  </td>
            <td><button type='submit' class='buttonDelete' onclick='delStudent(this)'>Delete</button></td>
            
        </tr>`

    }



    womenCountElement.innerHTML +=
        ` ${womenCount}
    `
    menCountElement.innerHTML +=
        ` ${menCount}
    `
    wealthElement.innerHTML +=
        ` ${moneyCount}
    `

}
getResponce()




//menu
const list = document.querySelector('.Top_menu');
let previousVal;
list.addEventListener('mouseover', (event) => {
    const el = event.target;
    if (el.tagName !== 'A') {
        return;
    };
    if (previousVal) {
        previousVal.classList.remove('underline');
    };
    el.classList.add('underline');
    previousVal = el;

});
function delStudent(student) {
    let row = student.parentNode.parentNode;
    document.querySelector('.table').removeChild(row);
}


