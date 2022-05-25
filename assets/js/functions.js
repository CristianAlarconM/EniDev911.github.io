// path static
const relativePathImage = "assets/img/";
const relativePathMedia = "assets/media/"


const toggleTheme = document.getElementById('toggle-theme');
const skillSection = document.getElementById('skill-software');
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
let nav = document.getElementById('navbar');
const card = document.querySelector('.card');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = "assets/img/logo/sun.svg";
        toggleText.textContent = "Light Side";
        toggleTheme.classList.add('bg-warning', 'text-dark');
        toggleTheme.classList.add('bg-warning', 'text-dark');
    } else {
        toggleIcon.src = "assets/img/logo/moon.svg";
        toggleText.textContent = "Dark Mode";
        toggleTheme.classList.remove('bg-warning', 'text-dark');

    }

});

window.addEventListener('scroll', () => {
    const carousel = document.getElementById('carouselVideo');
    nav.classList.remove('move', 'navbar-light');
    if (window.pageYOffset > 30) {
        nav.classList.add('move', 'shadow');

        if (window.pageYOffset > carousel.clientHeight - 20) {
            nav.classList.add('navbar-light');
        }
    } else {
        nav.classList.remove('move', 'navbar-light');
    }
});


function showMessage(title, image, message) {
    this.title = title;
    this.image = relativePathImage + 'software/' + image;
    this.message = message;
    let background = "#373a3c";
    let color = "#fff";
    if (toggleIcon.src.includes("moon.svg")) {
        background = "";
        color = "";
    }
    Swal.fire({
        title: this.title,
        imageUrl: this.image,
        imageWidth: "140px",
        html: this.message,
        background: background,
        color: color,
        grow: 'column',
        confirmButtonColor: "#EF5350",
        confirmButtonText: "entendido"

    })
}
function showAvatar() {
    let background = "#373a3c";
    if (toggleIcon.src.includes("moon.svg")) {
        background = "";
        color = "";
    }
    Swal.fire({
        title: "<h2 class='text-center'><code class='fs-1 text-center' style='color: #f50;'><i class='fas fa-user-secret fs-1'></i> {EniDev911}</code></h2>",
        imageUrl: relativePathImage + "logo/logo_con_bg.png",
        imageWidth: "200px",
        background: background,
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: "<i class='fas fa-times'></i>",
    })
}

function showContactForm() {
    Swal.fire({
        title: "<h2 class='text-center'><code class='fs-1 text-center'><i class='fas fa-user-secret fs-1'></i> {EniDev911}</code></h2>",
        imageUrl: relativePathImage + "logo_sin_bg.png",
        imageWidth: "200px",
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: "<i class='fas fa-times'></i>",
        input: 'password',
        inputLabel: 'Password'
    })
}

function playSound(filename = "lofi-beat-chill") {
    /**
      * Plays a sound using the HTML5.
      * @param {string} filename The name of the file.!
      */
    this.filename = relativePathMedia + filename
    var mp3Source = '<source src="' + this.filename + '.mp3" type="audio/mpeg">';
    var oggSource = '<source src="' + this.filename + '.ogg" type="audio/ogg">';
    var embedSource = '<embed hidden"true" autostart="true" loop="false" src="' + this.filename + '.mp3>"';
    document.getElementById("sound").innerHTML = '<audio autoplay="autoplay" controls>' + mp3Source + oggSource + embedSource + '</audio>';
}

function showTyped(e) {
    e.target.removeEventListener(e.type, showTyped);
    let arrString = ['EniDev911', "'Marco Antonio'", 31, "'Chile'", true]
    // Typed
    let typed = new Typed('.typed', {
        strings: [
            `<i class='coding-typed'><spam style='color: darkorange;'>${arrString[0]}</spam> = <spam style='color: #fa9;'>{<br>&nbsp;&nbsp;fullname:</spam> ${arrString[1]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>age:</spam> ${arrString[2]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>country:</spam> ${arrString[3]},<br>&nbsp;&nbsp;<spam style='color: #fa9;'>availability:</spam> <spam style='color: peru; font-style: italic;'>true</spam>,<br>&nbsp;&nbsp;<spam style='color: #fa9;'>profile:</spam> 'fullstack',<br>&nbsp;&nbsp;<spam style='color: #fa9;'>stack:</spam>[<br>&nbsp;&nbsp;&nbsp;&nbsp;'mern','mean', 'mevn'<br>&nbsp;&nbsp;&nbsp;&nbsp;'lamp', 'wamp', 'mamp'<br>&nbsp;&nbsp;]<spam style='color: #fa9;'>}</spam></i>`,
        ],
        typeSpeed: 50,
        startDelay: 340,
        backend: 75,
        backDelay: 1500,
        loopCount: 1,
        contentType: "html",
        cursorChar: "|",
        showCursor: true,
    });
}

document.getElementById("aboutMe").addEventListener("click", showTyped);


// dark-mode

// Enable popover bootstrap
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=""]'));
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverList);
});
// Enable tooltip bootstrap
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});