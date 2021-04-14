const scrollBtn = document.querySelector('.isShowBtn');
 scrollBtn.onclick = () => {
     scrollTo(0,0)
 };


document.querySelector('.burger__btn').addEventListener('click', (e) => {
    e.preventDefault()
   document.querySelector('.media__menu').classList.toggle('burger')
   document.querySelector('.burger__btn').classList.toggle('burger__btn-active')
   document.querySelector('.burger__icon').classList.toggle('burger__icon-right')
})