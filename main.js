
const articles = [
    {

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
];
let general = document.getElementById('general')

for (let i = 0; i < articles.length; i++) {

    let art = document.createElement('article')
    art.classList.add('lock');

    let h1 = document.createElement('h1')
    h1.textContent = articles[i].titre
    h1.classList.add('titre')


    let para = document.createElement('p')
    para.textContent = articles[i].subtitle
    para.classList.add('subtitle')

    art.appendChild(h1)
    art.appendChild(para)
    general.appendChild(art)

}

let articlesEl = document.getElementsByClassName('lock')

for (let i = 0; i < articlesEl.length; i++) {
    articlesEl[i].addEventListener('click', (e) => {


        for (let j = 0; j < articlesEl.length; j++) {
            console.log(articlesEl[j])
            console.log(e.currentTarget)

            if (articlesEl[j] === e.currentTarget) {

                if (articlesEl[j].classList.contains('lock')) {
                    articlesEl[j].classList.remove('lock')
                    articlesEl[j].classList.add('unlock')
                }
                else {
                    articlesEl[j].classList.remove('unlock')
                    articlesEl[j].classList.add('lock')
                }
            }
            else {
                articlesEl[j].classList.remove('unlock')
                articlesEl[j].classList.add('lock')
            }

        }
    })
}









