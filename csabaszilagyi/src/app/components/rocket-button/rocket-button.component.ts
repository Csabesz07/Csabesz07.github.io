import { Component, input, output } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { Language } from '../../enums/language.enum';

@Component({
  selector: 'rocket-button',
  standalone: true,
  imports: [ 
    SharedModule,
  ],
  templateUrl: './rocket-button.component.html',
  styleUrl: './rocket-button.component.scss'
})
export class RocketButtonComponent {
  
  title = input.required<string>();

  onClick = output();
}
