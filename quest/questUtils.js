
export function createImage(object, w = 50, h = 50){
    let img = document.createElement('img');
    img.src = `../assets/${object.image}`;
    img.style.height = `${h}px`;
    img.style.width = `${w}px`;
    img.style.marginBottom = '10px';
    return img;
}

export function createTitle(object){
    let title = document.createElement('h3');
    title.innerText = `${object.title}`;
    return title;
}

export function createDescript(object){
    let description = document.createElement('span');
    description.innerText = `${object.description}`;
    description.style.fontWeight = 'bold';
    description.style.margin = '20px';
    return description;
}

export function createOption(object){
    
    let option = [];
    let label = document.createElement('label');
    let input = document.createElement('input');

    label.innerText = `${object.description}`;

    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'choice');
    input.setAttribute('value', `${object.id}`);
    input.style.margin = '10px';


    option.push(label);
    option.push(input);

    return option;
}

export function createResults(object){
    let results = object.result;
    return results;
}

