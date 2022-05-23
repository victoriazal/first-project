//что-то с фечом
async function getResponce() {
    let responce = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
    let content = await responce.json()



    let table = document.querySelector('.table');
    let womenCount = document.getElementById("women");
    let menCount = document.getElementById("men")
    let wealth = document.getElementById("wealth")

    let men = 0;
    let women = 0;
    let money = '0';
    

    for (const key in content) {
        let date = new Date(content[key].registered);
        console.log(date.getDate)
        if (content[key].gender == "female") {
            women += 1;
        } else {
            men += 1;
        };


        if ((content[key].balance) > money) {
            money == (content[key].balance)
        };
        console.log(content[key].balance)

        table.innerHTML +=
            ` 
            <tr style="background: ${content[key].isActive ? '#F7DC68' : 'inherit'};">
            <td>${content[key].name}</td>
            <td>${content[key].company}</td>
            <td>${content[key].email}</td>
            <td>${content[key].phone}</td>
            <td>${content[key].balance}</td>
            <td>${content[key].registered}  </td>
            <td><button type="submit" class="buttonDelete" onclick="delStudent(this)">Delete</button></td>
            
        </tr>`
        
    }
    function delStudent(Stud){
        var s=Stud.parentNode.parentNode;
        s.parentNode.removeChild(s);
    }

    
    womenCount.innerHTML += 
    ` ${women}
    `
    menCount.innerHTML += 
    ` ${men}
    `
    wealth.innerHTML += 
    ` ${money}
    `

}
getResponce()



//menu
const list= document.querySelector('.Top_menu');
let previousVal;
list.addEventListener("mouseover",(event)=>{
    const el=event.target;
if(el.tagName !=='A') {
    return;
}
if(previousVal) previousVal.classList.remove('underline');
    el.classList.add('underline');
    previousVal=el;
}); 


 
