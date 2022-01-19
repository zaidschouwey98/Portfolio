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
    .addTo(controller);





new ScrollMagic.Scene({
    triggerElement: "#php-div",
    triggerHook: 0.9,
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
})
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#js-div",
    triggerHook: 0.9,
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
})
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#ruby-div",
    triggerHook: 0.9,
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
})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#unity-div",
    triggerHook: 0.9,
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
})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#react-div",
    triggerHook: 0.9,
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









class ProjectAnimation {
    constructor(controller) {
        this.controller = controller
        this.shapes = [
            {
                value: "M0 0H13C13 0 18 112.117 18 184C18 255.883 13 368 13 368H0V0Z"
            },
            {
                value: "M0 0.999983H50C50 0.999983 195 -5 217 70C239 145 50 378 50 378H0V0.999983Z"
            },
            {
                value: "M0 1.00003H50C50 1.00003 478 -3.99998 372 147C266 298 50 378 50 378H0V1.00003Z"
            },
            {
                value: "M0 3.05176e-05H317C317 3.05176e-05 552 52 446 203C340 354 200 377 200 377H0V3.05176e-05Z"
            },
            {
                value: "M0 0H559.156C559.156 0 580 112.117 580 184C580 255.883 559.156 368 559.156 368H0V0Z"
            }
        ]
        this.opacity = [
            { value: 0, easing: "easeOutSine", duration: 200 },
            { value: 1, easing: "easeInOutQuad", duration: 400 }
        ]
        this.filter = [
            { value: "blur(5px) grayscale(100%)", easing: "easeOutSine", duration: 300 },
            { value: "blur(0px) grayscale(0%)", easing: "easeInOutQuad", duration: 500 }
        ]
    }
    hideBlock(className) {
        anime({
            targets: className,
            easing: "easeInQuad",
            opacity: 0,
            duration: 200,
        })
    }
    drawCard(card) {
        new ScrollMagic.Scene({
            triggerElement: card,
            triggerHook: 1,
            duration: "80%",
            offset: 50,
            reverse:false
        }).on("enter", () => {
            console.log("test")
            anime.timeline().add({
                targets: card,
                easing: "easeInQuad",
                opacity: 1,
                filter: this.filter,
                borderRadius: [
                    { value: "50%", easing: "easeOutSine", duration: 700 },
                    { value: "0%", easing: "easeInOutQuad", duration: 1000 }
                ],
                scale: [
                    { value: 1, easing: "easeInOutQuad", duration: 1100 }
                ],
                duration: 500,
            })
        }).addTo(this.controller);
    }
    draw(triggerElement, svg, title, content, image) {
        let titleDrawn = false;
        let contentDrawn = false;
        let imageDrawn = false;

        new ScrollMagic.Scene({
            triggerElement: triggerElement,
            triggerHook: 1,
            duration: "80%",
            offset: 50
        }).on("progress", (scroll) => {
            let projectTimeline = anime.timeline().add({
                targets: svg,
                d: this.shapes[Math.round(scroll.progress * (this.shapes.length - 1))],
                easing: 'easeOutQuad',
                duration: 700,
            });
            if (Math.round(scroll.progress * (this.shapes.length - 1)) >= 1 && !titleDrawn) {
                titleDrawn = true;
                projectTimeline.add({
                    targets: title,
                    easing: "easeInQuad",
                    opacity: this.opacity,
                    filter: this.filter,
                    duration: 1000,
                })
            }
            if (Math.round(scroll.progress * (this.shapes.length - 1)) >= 2 && !contentDrawn) {
                contentDrawn = true;
                projectTimeline.add({
                    targets: content,
                    easing: "easeInQuad",
                    opacity: this.opacity,
                    filter: this.filter,
                    duration: 1000,
                })
            }
            if (Math.round(scroll.progress * (this.shapes.length - 1)) >= 4 && !imageDrawn) {
                console.log("test")
                imageDrawn = true;
                projectTimeline.add({
                    targets: image,
                    easing: "easeInQuad",
                    opacity: this.opacity,
                    filter: this.filter,
                    duration: 1000,
                })
            }


            if (titleDrawn && Math.round(scroll.progress * (this.shapes.length - 1)) < 1) {
                this.hideBlock(title)
                titleDrawn = false;
            }
            if (contentDrawn && Math.round(scroll.progress * (this.shapes.length - 1)) < 2) {
                this.hideBlock(content)
                contentDrawn = false;
            }
            if (imageDrawn && Math.round(scroll.progress * (this.shapes.length - 1)) < 4) {
                this.hideBlock(image)
                imageDrawn = false;
            }


        }).addTo(this.controller);
    }
}
let project = new ProjectAnimation(controller);
if (window.matchMedia("(min-width: 1000px)").matches) {
    console.log("pc")
    project.draw(".chess-project", ".chess-svg", ".chess-title", ".chess-content", ".chess-image");
    project.draw(".snakejs-project", ".snake-svg", ".snake-title", ".snake-content", ".snake-image");
    project.draw(".beatthemall-project", ".beatthemall-svg", ".beatthemall-title", ".beatthemall-content", ".beatthemall-image");
    project.draw(".pinteplagiat-project", ".pinteplagiat-svg", ".pinteplagiat-title", ".pinteplagiat-content", ".pinteplagiat-image");
    project.draw(".ageofevolution-project", ".ageofevolution-svg", ".ageofevolution-title", ".ageofevolution-content", ".ageofevolution-image");
    project.drawCard(".chess-card")
    project.drawCard(".snake-card")
    project.drawCard(".beatthemall-card")
    project.drawCard(".pinteplagiat-card")
    project.drawCard(".ageofevolution-card")
} else {
    project.drawCard(".chess-card")
    project.drawCard(".snake-card")
    project.drawCard(".beatthemall-card")
    project.drawCard(".pinteplagiat-card")
    project.drawCard(".ageofevolution-card")
}

























