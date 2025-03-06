import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';

@Component({
  selector: 'introduction',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

}
