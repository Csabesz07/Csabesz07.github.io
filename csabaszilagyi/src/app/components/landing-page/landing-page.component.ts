import { Component, ElementRef, OnDestroy } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { RocketButtonComponent } from "../rocket-button/rocket-button.component";
import { Language } from '../../enums/language.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationBuilder } from '@angular/animations';
import { meteoriteFall } from '../../animations/background-element.animation';
import { MeteoriteAnimationParams } from '../../types/animation-params';
import { DataService } from '../../services/data.service';
import { TranslateService } from '@ngx-translate/core';

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
export class LandingPageComponent implements OnDestroy {
  public LanguageEnum = Language;

  private _meteorites: Set<HTMLImageElement> = new Set();

  private _meteoriteCreator = setInterval(() => {
      if((Math.random() * this._meteorites.size) < 1.5)
      {
        let meteorite = this._createMeteorite();
        this._meteorites.add(meteorite);
        this._animateMeteorite(meteorite);
      }
    }, 500);

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _builder: AnimationBuilder,
    private _element: ElementRef,
    private _dataService: DataService,
    private _translate: TranslateService,
  ) {}  

  ngOnDestroy(): void {
    clearInterval(this._meteoriteCreator);
  }

  public navigateToGalaxy(lang: Language): void {
    this._translate.use(Language[lang]);
    const params = this._activatedRoute.snapshot.paramMap;
    this._router.navigate(
      ['/' + (params.get('previous') ?? 'galaxy')], 
      { 
        queryParams: {lang: lang},
        relativeTo: this._activatedRoute,
      }
    );      
  }

  private _createMeteorite(): HTMLImageElement {
    let meteorite = document.createElement('img');
    meteorite.style.zIndex = '-2';
    meteorite.style.position = 'absolute';
    meteorite.style.width = Math.max((Math.random() * 150), 25) + 'px';
    meteorite.style.transformOrigin = 'center center';    
    meteorite.src = 'assets/images/meteorite.png';
    return meteorite;
  }

  private _animateMeteorite(meteorite: HTMLImageElement): void {
    const animationFactory = this._builder.build(meteoriteFall);
    const player = animationFactory.create(meteorite, {
      params: this._createMeteoriteAnimationParameters() 
    });
    
    this._element.nativeElement.appendChild(meteorite);

    player.onDone(() => {
      this._meteorites.delete(meteorite);
      player.destroy()
      this._element.nativeElement.removeChild(meteorite);
    })

    player.play();
  }

  private _createMeteoriteAnimationParameters(): MeteoriteAnimationParams {
    const random = Math.random();
    const randomBoolean = random > 0.5;    

    return {
      fromTop: randomBoolean ? -50 : window.innerHeight,
      fromLeft: randomBoolean ? -50 : window.innerWidth,
      toTop: randomBoolean ? window.innerHeight : 0,
      toLeft: randomBoolean ? window.innerWidth : 0,
      rotation: random * 450,
      timingMs: Math.min(random * 20000, 12000),
      operator: '-',
      fromTopOffset: randomBoolean ? this._dataService.getRandomNumberFromInterval(0, window.innerHeight) : -(this._dataService.getRandomNumberFromInterval(0, window.innerHeight)),
      fromLeftOffset: randomBoolean ? this._dataService.getRandomNumberFromInterval(0, window.innerWidth) : -(this._dataService.getRandomNumberFromInterval(0, window.innerWidth)),
      toTopOffset: this._dataService.getRandomNumberFromInterval(0, window.innerHeight),
      toLeftOffset: this._dataService.getRandomNumberFromInterval(0, window.innerWidth),
    }
  }  
}
