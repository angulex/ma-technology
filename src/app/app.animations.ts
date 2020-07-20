
import { trigger, transition, style, animate, stagger, query, keyframes } from '@angular/animations';

export const childrenFadeInLeft = trigger('childrenFadeInLeft', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('100ms', [
            animate('.5s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateX(-50%)', offset: 0 }),
                style({ opacity: .5, transform: 'translateX(-10px) scale(1.1)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
            ]))]), { optional: true }),
    ]),
]);

