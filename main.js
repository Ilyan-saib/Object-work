let tablo = [{

    titre: "1. Hotel facilities",
    subtitle: `We've got everything you need covered, from hairdryer to
    ski storage at the lobby. Don't worry about that!`
},
{

    titre: "2. Je sais pas quoi  ",
    subtitle: `We've got everything you need covered, from hairdryer to
    ski storage at the lobby.`

},

{

    titre: "3. Je sais quoi  ",
    subtitle: `from hairdryer to
    ski storage at the lobby.`

},

{

    titre: "4. Je sais quoi  ",
    subtitle: `from hairdryer to
    ski storage at the lobby.`

},
]

let general = document.getElementById('general')

general.style.height = `${100 * tablo.length}px`


for (let i = 0; i < tablo.length; i++) {

    let art = document.createElement('article')
    let h1 = document.createElement('h1')
    let para = document.createElement('p')
    art.classList.add('sect')
   
    h1.innerHTML = tablo[i].titre
    
    para.innerHTML = tablo[i].subtitle
    para.classList.add('subtitle')
art.addEventListener('click',()=>{
para.style.display = "flex"
art.style.height = "200px"




})

    h1.classList.add('titre')

    art.appendChild(h1)
    art.appendChild(para)
    general.appendChild(art)
}

