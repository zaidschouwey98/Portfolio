class SkillsAnimation{
    constructor(controller){
        this.controller = controller;
    }
    /**
     * Add an animation to a div and a progressBar. Set to progressBar to the percentage given in the parameter.
     * @param {*} skillDiv 
     * @param {*} progressBar 
     * @param {*} percentage 
     */
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