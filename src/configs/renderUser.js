function renderUser(user) {
    return `
    <div class="user">
        <h2 class="user__name">Name: ${user.name}</h2>
        <p class="user__age">Age: ${user.age}</p> 
        <p class="user__email">Email: ${user.email}</p>
        <p class="user__country">Country: ${user.country}</p>
        <p class="user__company">Company: ${user.company}</p>
        <p class="user__birthday">Birthday: ${user.birthday}</p>                       
    </div>
  `
}

export default renderUser;