/*emailjs*/
/*function sendMail(){
    let parms = {
        fullname:document.getElementById("Full Name").value,
        emailaddress:document.getElementById("Email Address").value,
        message:document.getElementById("Your Message").value,

    }

    emailjs.send("service_47rlujb","template_z6sk3ox",parms).then(alert("Email sent!"))
};*/


/*----toggle icon navbar-----*/

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*-----scroll section active link-----*/

let sections =  document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
                
            });
        };
    });


    /*--------sticky navbar-----------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    /*--------remove toggle icon and navbar-------*/
    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*-------scroll reveal--------*/

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,

});

ScrollReveal().reveal('home-content,heading',{origin: 'top'} );
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form',{margin:'button'});
ScrollReveal().reveal('.home-contact h1, ',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});


