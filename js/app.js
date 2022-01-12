const controller = new ScrollMagic.Controller();
var tl = anime.timeline()

var particles = Particles.init({
    selector: '.secondbackground',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true
});

var textWrapper = document.querySelector('.ml1 .letters1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

tl
    .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 300,
        delay: (el, i) => 70 * (i + 1)
    }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 300,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
    }).add({
        targets: '.scroll-link',
        opacity: 1,
        easing: "easeOutExpo",
        duration: 300
    })


new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.8,
    duration: "80%",
    offset: 50
})
    .on("enter", () => {
        var textWrapper2 = document.querySelector('.ml2 .letters2');
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

        anime.timeline()
            .add({
                targets: '.text-wrapper2',
                opacity: 1,
                easing: "easeOutExpo",
                duration: 300,
            })
            .add({
                targets: '.ml2 .letter2',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 300,
                delay: (el, i) => 70 * (i + 1)
            }).add({
                targets: '.ml2 .line',
                scaleX: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 300,
                offset: '-=875',
                delay: (el, i, l) => 80 * (l - i)
            })
    })
    .addIndicators()
    .addTo(controller);





new ScrollMagic.Scene({
    triggerElement: "#php-div",
    triggerHook: 0.8,
    duration: "80%",
    offset: 50
}).on("enter", () => {

    anime.timeline()
        .add({
            targets: '#php-div',
            opacity: 1,
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: '#progress-php',
            width: '80%',
            easing: 'linear',
        });
}).addIndicators()
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#js-div",
    triggerHook: 0.8,
    duration: "80%",
    offset: 50
}).on("enter", () => {
    anime.timeline()
        .add({
            targets: '#js-div',
            opacity: 1,
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: '#progress-js',
            width: '75%',
            easing: 'linear',
        });
}).addIndicators()
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#ruby-div",
    triggerHook: 0.8,
    duration: "80%",
    offset: 50
}).on("enter", () => {

    anime.timeline()
        .add({
            targets: '#ruby-div',
            opacity: 1,
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: '#progress-ruby',
            width: '50%',
            easing: 'linear',
        });
}).addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#unity-div",
    triggerHook: 0.8,
    duration: "80%",
    offset: 50
}).on("enter", () => {

    anime.timeline()
        .add({
            targets: '#unity-div',
            opacity: 1,
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: '#progress-unity',
            width: '72%',
            easing: 'linear',
        });
}).addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#react-div",
    triggerHook: 0.8,
    duration: "80%",
    offset: 50
}).on("enter", () => {

    anime.timeline()
        .add({
            targets: '#react-div',
            opacity: 1,
            easing: "easeOutExpo",
            duration: 1000
        })
        .add({
            targets: '#progress-react',
            width: '83%',
            easing: 'linear',
        });
}).addIndicators()
    .addTo(controller);


let bg3 = document.getElementById("blog")
// Wrap every letter in a span
console.log(bg3)

var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
    });
}