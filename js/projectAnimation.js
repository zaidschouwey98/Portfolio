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


        })
        .addTo(this.controller);
    }
}