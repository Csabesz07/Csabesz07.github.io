import { animate, animation, style } from "@angular/animations";

export const fadeIn = animation([
  style({    
    opacity: 0
  }),  
  animate('{{timingMs}}ms {{delayMs}}ms'),  
]);

export const fadeOut = animation([
    style({    
      opacity: 1
    }),  
    animate('{{timingMs}}ms {{delayMs}}ms', style({
      opacity: 0
    })),  
  ]);