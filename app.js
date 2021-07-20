// import functions and grab DOM elements

import { setUser } from './storage.js';

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const form = document.getElementById('form');


form.addEventListener('submit', e=>{

    e.preventDefault();
    const formData = new FormData(form);
    //console.log(formData.get('name'));
    setUser(formData);
  
});
