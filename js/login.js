console.log('login.js loaded!')
function showloginpopup(){
    //
    // Shows login screen
    //
    let loginform = document.createElement('div')
    loginform.id = 'loginform';
    loginform.innerHTML = `<div class="loginform">
    <form target="dummyframe" method="post">
        <div class="login_header">
            <label>Войти</label>
            <span><i class="fa fa-times-circle-o" aria-hidden="true" onclick='removeloginpopup()'></i></span> 
        </div>
        <input type="email" placeholder="Логин">
        <input type="password" placeholder="Пароль">
        <input type="submit" onclick="alert('Ну, это в будущем можно будет развивать для возможности создания постов, для удаления или для просмотра эксклюзивных постов, но для этого нужно реализовывать бэк, а это вроде ну нельзя')" value="Войти">
    </form>
</div>`
    document.body.prepend(loginform)
}
function removeloginpopup(){
    //
    // Remove login popup
    //
    loginform.style.animation = 'dark_background_login_form_remove .4s ease-in-out forwards'
    loginform.style.animationDelay = '.4s'
    let temp = loginform.querySelector('.loginform')
    temp.style.animation = 'remove_login_form .4s ease-in-out forwards'
    setTimeout(function(){document.body.removeChild(loginform)},800)
}