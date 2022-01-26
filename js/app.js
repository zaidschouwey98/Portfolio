// Create scrollmagic controller
const controller = new ScrollMagic.Controller();

// Change the contact form elements position
document.getElementById('contact-title').style.transform = 'translateY(-1200px)';
document.getElementById('contact-content').style.transform = 'translateX(-200px)';
document.getElementById('contact-button').style.transform = 'translateY(1000%)';



// Particle JS
var ctx = document.getElementById("secondbackground");
var particles = Particles.init({
    selector: '#secondbackground',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true
});
ctx.width = window.innerWidth;

// Create the letter by letter appearance effect and the button appearance on the main screen
// Source : https://tobiasahlin.com/moving-letters/#1
var textWrapper = document.querySelector('.ml1 .letters1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline()
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

// Create the letter by letter apearance effect on the skills section
// --------------------------------------------
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
// --------------------------------------------


// Add the animations to the skills section
// --------------------------------------------
skillAnim = new SkillsAnimation(controller);
skillAnim.addAnimation("#php-div","#progress-php","80%");
skillAnim.addAnimation("#js-div","#progress-js","70%");
skillAnim.addAnimation("#ruby-div","#progress-ruby","55%");
skillAnim.addAnimation("#unity-div","#progress-unity","85%");
skillAnim.addAnimation("#react-div","#progress-react","70%");
// --------------------------------------------

// Source : https://codepen.io/juliangarnier/pen/ZeEpgd
// --------------------------------------------
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
// --------------------------------------------

// Add the animations to the project section
// --------------------------------------------
let project = new ProjectAnimation(controller);
if (window.matchMedia("(min-width: 1200px)").matches) {
    project.draw(".snakejs-project", ".snake-svg", ".snake-title", ".snake-content", ".snake-image");
    project.draw(".beatthemall-project", ".beatthemall-svg", ".beatthemall-title", ".beatthemall-content", ".beatthemall-image");
    project.draw(".pinteplagiat-project", ".pinteplagiat-svg", ".pinteplagiat-title", ".pinteplagiat-content", ".pinteplagiat-image");
    project.draw(".ageofevolution-project", ".ageofevolution-svg", ".ageofevolution-title", ".ageofevolution-content", ".ageofevolution-image");
    project.drawCard(".snake-card")
    project.drawCard(".beatthemall-card")
    project.drawCard(".pinteplagiat-card")
    project.drawCard(".ageofevolution-card")
} else {
    // If the windows isn't large enough to show correctly the project details, just show the card.
    project.drawCard(".snake-card")
    project.drawCard(".beatthemall-card")
    project.drawCard(".pinteplagiat-card")
    project.drawCard(".ageofevolution-card")
}
// --------------------------------------------



// Animate contact section
// --------------------------------------------
const animationContactTitle = anime({
    targets: "#contact-title",
    easing: "easeInQuad",
    translateY: "0",
 
    autoplay: false
  });
  const animationContactContent = anime({
    targets: "#contact-content",
    easing: "easeInQuad",
    translateX: "0",

    autoplay: false
  });
  const animationContactButton = anime({
    targets: "#contact-button",
    easing: "easeInQuad",
    translateY: "0",

    autoplay: false
  });

  
  new ScrollMagic.Scene({
    triggerElement: "#contact-us",
    triggerHook:1,
    duration: 1750
  })
    .on("progress", (scroll) => {
    
      const seekValue = 1000 * scroll.progress;
      animationContactTitle.seek(seekValue);
      animationContactContent.seek(seekValue);
      animationContactButton.seek(seekValue);
    })
    .addTo(controller);
// --------------------------------------------
















