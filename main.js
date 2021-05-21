let more = document.querySelectorAll('.more')

for(let kohde of more) {
    kohde.addEventListener('click', function(e){  
        e.preventDefault() 
        console.log(kohde)   
        kohde.parentNode.classList.toggle('active')
    })
}