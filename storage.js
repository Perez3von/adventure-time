export const USER = 'User';




export function getUser(){

    const data = localStorage.getItem(USER);
    const user = JSON.parse(data);
    return user;
}

export function setUser(user){

    const json = {

        name:user.get('name'),
        race:user.get('race'),
        hp:50,
        gold:0,
        completed:{}

    };

    localStorage.setItem(USER, JSON.stringify(json));
}

export function complete(quest, hp, gold){

    let user = getUser();

    user.hp = user.hp + hp;
    user.gold = user.gold + gold;
    user.completed[quest] = true;

    localStorage.setItem(USER, JSON.stringify(user));

}

