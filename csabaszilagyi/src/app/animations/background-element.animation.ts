import { animation, style, animate, keyframes } from '@angular/animations';

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