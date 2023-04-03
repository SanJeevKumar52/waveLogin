const element = document.querySelectorAll('.panel')

element.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    element.forEach(panel =>{
        panel.classList.remove('active')
    })
}