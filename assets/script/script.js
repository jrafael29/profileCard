let heart = document.querySelector('#heart')

heart.addEventListener('mouseenter', ()=>{
    if(heart.classList.contains('heart-empty')){
        heart.classList.add('full-heart')
    }
})
heart.addEventListener('mouseleave', ()=>{
    if(heart.classList.contains('full-heart')){
        heart.classList.remove('full-heart')
    }
})
heart.addEventListener('click', ()=>{alert('I love you too. <3')})