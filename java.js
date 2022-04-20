let preview = document.querySelectorAll('[data-popup-show]');
let overlay = document.getElementById('overlay');

preview.forEach(function(e) {
    e.addEventListener('click', function() {
        let popup = document.querySelector(e.dataset.popupShow);
        openPopup(popup);
    })
});

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active');
    overlay.classList.add('active');
}

overlay.addEventListener('click', function() {
    let hidePopup = document.querySelectorAll('.active');
    hidePopup.forEach(function (e){
        closePopup(e)

    })
})

function closePopup(hidePopup) {
    if(hidePopup == null) return
    hidePopup.classList.remove('active');
       
}