import { Component, input } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';

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
}
