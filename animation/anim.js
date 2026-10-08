gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let mm = gsap.matchMedia();

// --- ДЕСКТОП (экран > 768px) ---
mm.add("(min-width: 769px)", () => {

    // Включаем плавный скролл
    let smoother = ScrollSmoother.create({
        wrapper: '.wrapper', 
        content: '.content',
        smooth: 2.5,
        effects: true
    });

    // Анимация затухания первой секции
    gsap.to('.first', {
        opacity: 0,
        y: -100,
        scrollTrigger: {
            trigger: '.first',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    }); 

    // Анимация Modern
    gsap.fromTo('#Modern', {
        y: 0
    }, {
        y: 400,
        scrollTrigger: {
            trigger: '.first',
            start: 'top 0%',
            end: 'bottom 10%',
            scrub: true
        }
    });

    // Анимация L
    gsap.fromTo('#L', {
        opacity: 0,
        x: -200
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.second',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1.5
        }
    }); 

    // Анимация R
    gsap.fromTo("#R", {
        opacity: 0,
        x: 200
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".second",
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1.5
        }
    });

    // Карточка 1: Картинка (SHAKE)
    gsap.fromTo("#first_img", {
        x: -400,
        y: 400,
        rotate: -35
    }, {
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        scrollTrigger: {
            trigger: '#shake-section',
            start: 'top 95%',
            end: 'top 20%',
            scrub: 2.5
        }
    });

    // Карточка 1: Текст (SHAKE)
    gsap.fromTo('#first_img_tx', {
        x: 200
    }, {
        x: 0,
        scrollTrigger: {
            trigger: '#shake-section',
            start: 'top 95%',
            end: 'top 20%',
            scrub: 2.5
        }
    });

    // Карточка 2: Картинка (Monolith)
    gsap.fromTo('#J', { 
        opacity: 0, 
        x: -300 
    }, {
        x: 0, 
        opacity: 1,
        scrollTrigger: {
            trigger: '#monolith-section',
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1.5
        }
    });

    // Карточка 2: Текст (Monolith)
    gsap.fromTo('#J_tx', { 
        opacity: 0, 
        x: 300 
    }, {
        x: 0, 
        opacity: 1,
        scrollTrigger: {
            trigger: '#monolith-section',
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1.5
        }
    });

    // Карточка 3: Текст (John Wick)
    gsap.fromTo('#John_tx', { 
        opacity: 0, 
        x: -300 
    }, {
        x: 0, 
        opacity: 1,
        scrollTrigger: {
            trigger: '#john-section',
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1.5
        }
    });

    // Карточка 3: Картинка (John Wick)
    gsap.fromTo('#John', { 
        opacity: 0, 
        x: 300, 
        rotate: 15 
    }, {
        x: 0, 
        rotate: 0, 
        opacity: 1,
        scrollTrigger: {
            trigger: '#john-section',
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1.5
        }
    });

    return () => smoother.kill();
});

// --- МОБИЛЬНЫЕ (экран <= 768px) ---
mm.add("(max-width: 768px)", () => {

    // 1. Анимация для текстов (плавный вылет снизу)
    const texts = gsap.utils.toArray('.second p, .zag_section, .final-section h1');
    texts.forEach((text) => {
        gsap.fromTo(text, 
            { opacity: 0, y: 30 }, 
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: text,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // 2. Поочередный вылет картинок (первая слева, вторая справа, третья слева...)
    const images = gsap.utils.toArray('.card-img');
    images.forEach((img, index) => {
        // Если индекс чётный (0, 2...) — вылетает слева (-50px), если нечётный (1, 3...) — справа (50px)
        let startX = (index % 2 === 0) ? -50 : 50;

        gsap.fromTo(img, 
            { opacity: 0, x: startX }, 
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: img,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
});