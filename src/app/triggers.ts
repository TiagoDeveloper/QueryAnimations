import { trigger, transition, query, animate, style, stagger } from '@angular/animations';


export const navegacao = [ 
    trigger('entra',[
      transition(':enter', [
        query('.animados', style({ opacity: 0, transform: 'translateX(-50%)' })),
        query('.animados', stagger('350ms', [
          animate('300ms 900ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])),
      ]),
      transition(':leave', [
        query('.animados', style({ opacity: 1, transform: 'translateX(0)' })),
        query('.animados', stagger('100ms', [
          animate('200ms 400ms ease-out', style({ opacity: 0, transform: 'translateX(-50%)' }))
        ])),
      ])
])];