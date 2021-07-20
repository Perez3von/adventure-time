import quests from "../data/quest-data.js";

const searchParam = new URLSearchParams(window.location.search);
console.log(searchParam.get('id'));
const target = searchParam.get('id');
const body = document.getElementsByTagName('body');
for (let i of quests){

if(i.id === target){

 console.log(i);  
 body.innerHtml = i; 
}


}
