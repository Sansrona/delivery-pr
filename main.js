// const bucketBtn = document.querySelector('#button-bucket');
// const modal = document.querySelector('.modal');

// bucketBtn.addEventListener('click', function(event){
//     console.log(modal);
//     modal.classList.add('active');
// });

$(document).ready(function () {
    $('#button-bucket').on('click', function () {
        $('.modal').toggleClass('active');
    });
    $('.close').on('click', function () {
        $('.modal').toggleClass('active');
    });
});

new WOW().init();