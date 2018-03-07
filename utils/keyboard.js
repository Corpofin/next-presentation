import Router from 'next/router'

export default  () => {
    document.addEventListener("keyup", (e) => {
        e.stopPropagation()
        e.preventDefault()
        if(e.keyCode === 37 && window.prevSlide){
            Router.push(window.prevSlide, window.prevSlide, { shallow: true })
        }
        if(e.keyCode === 39  && window.nextSlide){
            Router.push(window.nextSlide, window.nextSlide, { shallow: true })
        }
    });
}