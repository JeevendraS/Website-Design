
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
let elements = document.querySelectorAll(".elem")

elements.forEach((elem)=>{
    elem.addEventListener('mouseenter',(e)=>{
        let image = e.target.attributes[1].textContent
        let staticBox = document.querySelector('#staticBox');
        staticBox.style.display = 'block';
        staticBox.style.backgroundImage = `url('${image}')`;
        // console.log(e.target.attributes[1].textContent);
    })
})
elements.forEach((elem)=>{
    elem.addEventListener('mouseout',()=>{
        let box = document.querySelector("#staticBox");
        box.style.display = 'none'
    })
})