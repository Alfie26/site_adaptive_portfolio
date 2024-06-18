const openPopup = document.getElementById('profile__changes');
const closePopup = document.getElementById('popup__close');
const popup = document.getElementById('popup');

openPopup.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('active');
})

closePopup.addEventListener('click', () =>{
    popup.classList.remove('active')
})

const hurt1 = document.getElementById('hurt');

hurt1.addEventListener('click', function(e){
    e.preventDefault();
    hurt1.classList.add('activ');
})

hurt1.addEventListener('dblclick' , () => {
    hurt1.classList.remove('activ');
})

// $('.popup').hide(0);
// $('.popup__container').hide(0);

// $('.profile__changes').click(function(){
//   $('.popup__container').show(0);
//   $('.popup').fadeIn(300);
// });

// $('.popup__close').click(function() {
//   $('.popup__container').hide(0);
//   $('.popup').hide(0);
// });

// $('.popup').hide(0);
// Element.addEventListener('click',function(){
//     $('.popup').show(0);
// });
