import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'galaxy',
  imports: [
    SharedModule,
    IntroductionComponent,
  ],
  templateUrl: './galaxy.component.html',
  styleUrl: './galaxy.component.scss'
})
export class GalaxyComponent {

}
