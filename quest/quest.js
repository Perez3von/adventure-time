import quests from '../data/quest-data.js';
import * as utils from './questUtils.js';
import { complete } from '../storage.js';


const searchParam = new URLSearchParams(window.location.search);
//console.log(searchParam.get('id'));
const target = searchParam.get('id');
const details = document.getElementById('content');
const confirm_btn = document.getElementById('confirm');

let obj = {};
for (let i of quests){

    if (i.id === target){
        obj = i;
        let title = utils.createTitle(i);
        let image = utils.createImage(i, 400, 200);
        let description = utils.createDescript(i);
       
        details.appendChild(title);
        details.appendChild(image);
        details.appendChild(description);

        for (let j of i.choices){

            let option = utils.createOption(j);
            details.appendChild(option[0]);
            details.appendChild(option[1]);
            
        }
     
    }
    
}


confirm_btn.addEventListener('click', ()=>{

    const user_selected = document.querySelector('input[type=radio]:checked');
    const selected = user_selected.value;
    
    for (let i of obj.choices){
        if (selected === i.id){
            let result = utils.createResults(i);
            details.innerHTML = result;
            complete(obj.id, i.hp, i.gold);
        }
        
    }
    confirm_btn.style.visibility = 'hidden';
    
});