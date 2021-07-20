export const USER = 'User';
export const RACE = "Race";



export function getUser(){

    const data = localStorage.getItem(USER);
    const user = JSON.parse(data);
    return user;
}

export function setUser(user){

    const json = {

        name:user.get('name'),
        race:user.get('race')

    };

    localStorage.setItem(USER, JSON.stringify(json));
}

