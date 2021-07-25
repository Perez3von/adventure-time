
export function createLink(item, parent){

    const href = `../quest/?id=${item.id}`;
    const link = document.createElement('a');
    link.href = href;
    link.textContent = item.title;
    parent.appendChild(link);

}

export function createSpan(item, parent){

    let complete = document.createElement('span');
    complete.style.color = 'white';
    complete.innerText = `Completed: ${item.title}`;
    parent.appendChild(complete);


}


export function completedQuests(data){
    let track = 0;
    let user = data;
    for (let key in user.completed){
        if (user.completed[key]){
            track = track + 1;
        }
    }
    return track;
}
