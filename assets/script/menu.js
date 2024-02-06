// var prevScrollpos = window.scrollY;
// window.onscroll = function () {
//     var currentScrollPos = window.scrollY;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("nav").;
//     } else {
//         document.getElementById("nav").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }

// let prevScrollpos = window.scrollY;
// window.onscroll = function () {
//     debugger;
//     let currentScrollPos = window.scrollY;
//     console.log(currentScrollPos);
//     // if (prevScrollpos > currentScrollPos)
//     //     $('.menu').addClass('d-none');
//     // else
//     //     $('.menu').removeClass('d-none');
// }

// $(document).ready(function () {
//     $(window).scroll(function () {
//         let height = window.innerHeight;
//         let topHeight = window.scrollY;
//         if ($(document).scrollTop() > height / 2)
//             $('.menu').animate({
//                 opacity: '0',
//             })

//         if (topHeight > window.scrollY)
//             $('.menu').animate({opacity: 1})
//     });
// });


// Correct one:



// $(document).ready(function () {
//     let height = window.innerHeight;
//     var lastScrollTop = 0;
//     $(window).scroll(function () {
//         debugger;
//         var st = $(this).scrollTop();
//         if (st > lastScrollTop) {
//             $('.menu').fadeOut('slow');
//         }
//         // if (st > lastScrollTop + 100)
//         else
//          {
//             $('.menu').fadeIn();
//         }
//         lastScrollTop = st;
//     });
// });
