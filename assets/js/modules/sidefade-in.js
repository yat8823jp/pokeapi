import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger );

gsap.fromTo( '.js-sidefade-in1',
	{
		x: "100%",
		autoAlpha: 0
	},
	{
		x: 0,
		autoAlpha: 1,
		delay: 0,
		duration: .5,
		scrollTrigger: {
			trigger: '.js-sidefade-in1',
			start: 'top center',
			markers: false
		},
		stagger: {
			each: .5,
			from: 'start',
		}
	}
);

gsap.fromTo( '.js-sidefade-in2',
	{
		x: "100%",
		autoAlpha: 0
	},
	{
		x: 0,
		autoAlpha: 1,
		delay: 0,
		duration: .5,
		scrollTrigger: {
			trigger: '.js-sidefade-in2',
			start: 'top center',
			markers: false
		},
		stagger: {
			each: .5,
			from: 'start',
		}
	}
);
gsap.fromTo( '.js-sidefade-in3',
	{
		x: "100%",
		autoAlpha: 1
	},
	{
		x: 0,
		autoAlpha: 1,
		delay: 0,
		duration: .5,
		scrollTrigger: {
			trigger: '.js-sidefade-in3',
			start: 'top center',
			markers: false
		},
		stagger: {
			each: .5,
			from: 'start',
		}
	}
);
gsap.fromTo( '.js-sidefade-in4',
	{
		x: "100%",
		autoAlpha: 0
	},
	{
		x: 0,
		autoAlpha: 1,
		delay: 0,
		duration: .5,
		scrollTrigger: {
			trigger: '.js-sidefade-in4',
			start: 'top center',
			markers: false
		},
		stagger: {
			each: .5,
			from: 'start',
		}
	}
);

export const sidefadein = () => {}
