const controller = new ScrollMagic.Controller();


var particles = Particles.init({
    selector: '.secondbackground',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true
});


new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.8, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
  })
    .on("progress", (scroll) => {
        var animateProgressPhp = anime({
            targets: '#progress-php',
            width: '80%',
            easing: 'linear',
        });
        var animateProgressJs = anime({
            targets: '#progress-js',
            width: '75%',
            easing: 'linear',
        });
        var animateProgressRuby = anime({
            targets: '#progress-ruby',
            width: '50%',
            easing: 'linear',
        });
        var animateProgressUnity = anime({
            targets: '#progress-unity',
            width: '72%',
            easing: 'linear',
        });
        var animateProgressReact = anime({
            targets: '#progress-react',
            width: '83%',
            easing: 'linear',
        });
    })
    .addIndicators()
    .addTo(controller);


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 300,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 300,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  })