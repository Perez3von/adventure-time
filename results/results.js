
import { getUser } from '../storage.js';

const results = document.getElementById('results');
const reset_btn = document.getElementById('reset');
const user = getUser();

const username = `User: ${user.name}`;
const health = `Health: ${user.hp}`;
const gold = `Gold Earned: ${user.gold}`;


if (user.hp <= 0){
    renderResults('You lost all health', results);
    renderResults(username, results);
    renderResults(health, results);
    renderResults(gold, results);

}
else {
    renderResults('You survived and earned gold', results);
    renderResults(username, results);
    renderResults(health, results);
    renderResults(gold, results);

}


reset_btn.addEventListener('click', ()=>{

    localStorage.clear();
    window.location = `../index.html`;
});



export function renderResults(data, perent){

    const ele = document.createElement('span');
    ele.innerText = data;
    ele.style.marginLeft = '10px';
    perent.appendChild(ele);

}