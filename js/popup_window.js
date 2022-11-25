console.log('popup_window.js LOADED!')
function show_popup(name, iframe){
    // 
    // Create div element on page with getted frame. (я не знаю как правильно оформляется описание функции по стандарту в js, поэтому как в python сделаю с:)
    //
    // *param iframe:str - url for iframe
    //
    // *param name:str - title for window (я думал брать элемент через this, но потом подумал что ну, не оптимально и слишком узконаправленно)
    //
    console.log(name,iframe)
    let popup = document.createElement('div')
    popup.classList.add('popup')
    popup.innerHTML = `<div class="popup_content"><div class="popup_header">
        <div class="popup_title">${name}</div>
        <div class="popup_closebtn" onclick='remove_popups()'><i class="fa fa-times-circle-o fa-2x" aria-hidden="true"></i></div>
    </div>
    <div class="popup_iframe">
        <iframe src="extendedhtmls/${iframe}"></iframe>
    </div></div>`
    document.body.prepend(popup)
    return true
}

function remove_popups(){
    //
    // Remove all popups windows
    //
    let allpopups = document.getElementsByClassName('popup')
    for (let index = 0; index < allpopups.length; index++) {
        // document.body.removeChild(allpopups[index])
        allpopups[index].classList.add('popup_remove')
        setTimeout(function(){
            document.body.removeChild(allpopups[index])
        },500)
    }
    return true
}