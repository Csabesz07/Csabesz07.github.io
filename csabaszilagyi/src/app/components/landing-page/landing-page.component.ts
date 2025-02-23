import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { RocketButtonComponent } from "../rocket-button/rocket-button.component";
import { Language } from '../../enums/language.enum';
import { ActivatedRoute, Router } from '@angular/router';

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
  LanguageEnum = Language;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  navigateToGalaxy(lang: Language): void {
    this.router.navigate(['/galaxy'], { queryParams: {lang: lang} })
  }
}
