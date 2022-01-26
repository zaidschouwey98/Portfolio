class SkillsAnimation{
    constructor(controller){
        this.controller = controller;
    }
    addAnimation(skillDiv,progressBar,percentage){
        new ScrollMagic.Scene({
            triggerElement: skillDiv,
            triggerHook: 0.9,
            duration: "80%",
            offset: 50
        }).on("enter", () => {
            anime.timeline()
                .add({
                    targets: skillDiv,
                    opacity: 1,
                    easing: "easeOutExpo",
                    duration: 1000
                })
                .add({
                    targets: progressBar,
                    width: percentage,
                    easing: 'linear',
                });
        })
            .addTo(this.controller);
    }
}