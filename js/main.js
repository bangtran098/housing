$('.carousel__image').square1({
    // or 'contain'
    fill_mode: 'cover',
    // CSS background-position property
    scale_from: 'center center',
    // use slide transition
    animation: 'slide',
    // in milliseconds
    slide_duration: 2000,
    transition_time: 500
});

$('.counter').countUp({
    'time': 1000,
    'delay': 10
});

let mainNav = document.getElementById('mainNav');
let listNav = mainNav.getElementsByTagName("li");
for (var i = 0; i < listNav.length; i++) {
    let el = listNav[i];
    console.log(el);
    el.addEventListener("click", function() {
        let current = document.querySelector("#mainNav .active");
        console.log(current);
    
        current.className = current.className.replace("active" , "");
        // current.className.removeClass("active");
        this.className += "active";
    });
};