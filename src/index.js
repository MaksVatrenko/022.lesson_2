import users from './configs/data.js';
import renderUser from "./configs/renderUser";

const container = document.querySelector('.page__container');


users.forEach(user => {
    container.innerHTML += renderUser(user);
})

import '../src/css/style.css';