let tablo = [{

    titre: "1. Lorem Ipsum ?",
    subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Nihil, quia quos quidem sequi pariatur omnis atque vel. Quasi!`
},
{

    titre: "2.  Ipsum Lorem?",
    subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Nihil, quia quos quidem sequi pariatur omnis atque vel. Quasi!`

},

{

    titre: "3. ¿muspI meroL",
    subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Nihil, quia quos quidem sequi pariatur omnis atque vel. Quasi!`

},

{

    titre: "4. L o r e m ( ﾉ ﾟｰﾟ)ﾉ i p s u m ",
    subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Nihil, quia quos quidem sequi pariatur omnis atque vel. Quasi!`

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
general.style.height = `${125 * tablo.length}px`


if (art.style.height === "200px") {
    para.style.display = "none"
art.style.height = "100px"
art.style.width = "800px"
art.style.position = "relative"
   art.style.right = "0px"
general.style.height = `${100 * tablo.length}px`
}



else{
    para.style.display = "flex"
    art.style.height = "200px"
   art.style.width = "900px" 
   art.style.position = "relative"
   art.style.right = "50px"
}

})




    h1.classList.add('titre')

    art.appendChild(h1)
    art.appendChild(para)
    general.appendChild(art)
}

