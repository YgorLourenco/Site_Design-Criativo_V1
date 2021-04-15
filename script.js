// NOTE selecionar todas as classes .story-btn para cada uma adicionar um evento de click, onde vai colocar dentro das classes a classe 'change'
document.querySelectorAll('.story-btn').forEach(btn =>{
    btn.addEventListener('click', () =>{
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})