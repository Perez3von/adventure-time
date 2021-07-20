import quests from '../data/quest-data.js';




console.log(quests);
const questList = document.getElementById('quest-link');


for (let item of quests){

const href = `../quest/?id=${item.id}`;
const link = document.createElement('a');
link.href = href;
link.textContent = item.title;

questList.appendChild(link);


}
