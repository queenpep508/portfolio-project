// ===============toggle icon navbar================
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}

//============== scrol section link===========

let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navlinks.offEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });
    // =========================sticky navbar=================
    let header = document.querySelector('header');

    header.classList.toggle('stcky', window.scrollY > 100);

    // ================remove toggle icon and navbar when click navbar link==================
    menuIcon.classList.remove('fa-x')
    navbar.classList.remove('active')
};
// typed js
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer', 'Freelancer', 'Affiliate Marketer'],
    typeSpeed:60,
    backSpeed:60,
    backDelay:60,
    loop:true,
});

