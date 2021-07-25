import quests from '../data/quest-data.js';
import { getUser } from '../storage.js';


import * as utils from './mapUtils.js';

//console.log(quests);
const questList = document.getElementById('quest-link');
const user = getUser();

if (utils.completedQuests(user) === 3 || user.hp <= 0){

    window.location = `../results/results.html`;
}

for (let quest of quests){
    //console.log(user.completed[quest.id]);
    if (user.completed[quest.id]){
        
        utils.createSpan(quest, questList);
    }
    else {
        utils.createLink(quest, questList);
    }
  
}









