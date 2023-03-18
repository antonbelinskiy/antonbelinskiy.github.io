$(document).ready(function(ready) {
    gsap.registerPlugin(ScrollTrigger);
    $('body').addClass('ready');
    const titlesArray = gsap.utils.toArray('[data-anim-title]');
    const textArray = gsap.utils.toArray('[data-anim-text]');

    const baseAnimations = gsap.utils.toArray('[data-base-anim]');


    gsap.set(baseAnimations, {
        autoAlpha: 0,
    });

    baseAnimations.forEach(base => {
        gsap.to(base, {
         autoAlpha: 1,
            duration: 1,
            scrollTrigger: {
             trigger: base,
             start: "top 100%",
            }
        })
    })


    titlesArray.forEach(title => {
        let splitTitle = new SplitText(title, {type: "words, chars"});
        let chars = splitTitle.chars;
       
        gsap.from(chars, {
            duration: 1.5,
            autoAlpha: 0,
            stagger: 0.1,
            y: 1000,
            ease: "power4.out",
            scrollTrigger: {
                trigger: title,
                start: "top 100%"
            }
        })
    })

    textArray.forEach(text => {
        let splitTitle = new SplitText(text, {type: "words, chars"});
        let chars = splitTitle.chars;
       
        gsap.from(chars, {
            duration: .7,
            autoAlpha: 0,
            stagger: 0.08,
            y: 1000,
            ease: "power4.out",
            scrollTrigger: {
                trigger: text,
                start: "top 100%"
            }
        })
    })
})