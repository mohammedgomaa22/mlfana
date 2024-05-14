
const links = document.querySelectorAll("[nav-active]"),
    sidebar = document.querySelector(".sidebar");
    

navActive();
togglerSidebar();



function navActive () {
    links.forEach((link) => {
        link.addEventListener("click", () => {
            // Delete Class
            links.forEach((link) => { link.classList.remove("active"); });
            // Add Class
            link.classList.add("active");
        })
    })
};

function togglerSidebar() {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler-sidebar")) {
            sidebar.classList.add("open");
        } if (e.target.classList.contains("close-sidebar")) {
            sidebar.classList.remove("open");
        }
    })
};


var owl = $('.owl-carousel');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    },
    loop:true,
    margin: 10,
    rtl: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})