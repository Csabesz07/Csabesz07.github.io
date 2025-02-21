import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';

@Component({
  selector: 'app-landing-page',
  imports: [ 
    SharedModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
