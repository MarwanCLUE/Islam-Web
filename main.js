//Explore Button
// let exploreBtn = document.querySelector('.title .btn'),
//     HadithSection = document.querySelector('.header');
//     exploreBtn.addEventListener('click', () => {
//         HadithSection.scrollIntoView((
//             behavior :  "smooth"
//         ))
//     })
let fixedNav = document.querySelector('.header');
window.addEventListener('scroll', ()=>{
    window.scrollY > 100 ? fixedNav .classList .add('active') : fixedNav.classList.remove('active');
})
// Hadith Changer
let hadithContainer = document.querySelector('.hadithContainer'),
    next = document.querySelector('.button .next'),
    prev = document.querySelector('.button .prev'),
    number = document.querySelector('.button .number');
    let hadithIndex = 0;
hadithChanger();
function hadithChanger()
{
    fetch("https://api.hadith.gading.dev/books/muslim?range=1-300")
    .then(respose => respose.json())
    .then(data =>{
        
        let Hadiths = data.data.hadiths;
        changeHadith();
        next .addEventListener('click', ()=> {
            hadithIndex == 299 ? hadithIndex = 0 : hadithIndex++;
            changeHadith()
        })
        prev .addEventListener('click', ()=> {
            hadithIndex == 0? hadithIndex = 299 : hadithIndex--;
            changeHadith()
        })
        function changeHadith()
        {
        hadithContainer.innerText = Hadiths[hadithIndex].arab;
        number.innerText = `300 - ${hadithIndex +1}`
        }
    })
};