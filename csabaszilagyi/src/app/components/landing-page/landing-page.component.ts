import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { RocketButtonComponent } from "../rocket-button/rocket-button.component";

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [
    SharedModule,
    RocketButtonComponent,
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
