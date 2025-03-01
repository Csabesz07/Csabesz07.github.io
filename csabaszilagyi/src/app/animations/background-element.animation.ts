import { animation, style, animate } from '@angular/animations';

export const meteoriteFall = animation([
  style({    
    transform: 'rotate({{rotation}}deg)',
    top: 'calc({{fromTop}}px + {{fromTopOffset}}px)',
    left: 'calc({{fromLeft}}px - {{fromLeftOffset}}px)',
  }),  
  animate('{{timingMs}}ms', style({
    transform: 'rotate({{operator}}{{rotation}}deg)',
    top: 'calc({{toTop}}px - {{toTopOffset}}px)',
    left: 'calc({{toLeft}}px + {{toLeftOffset}}px)',
  })),  
]);

export const rocketSmoke = animation([
  style({    
    transform: 'translateX(0) translateY(0) scale(1)',
    opacity: '1',
  }),
  animate('{{timingMs}}ms', style({
    transform: 'translateX({{operatorX}}{{distance}}px) translateY({{operatorY}}{{offset}}px) scale(0)',
    opacity: '0',
  }))
]);