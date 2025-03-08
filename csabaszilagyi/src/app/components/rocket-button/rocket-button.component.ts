import { Component, ElementRef, input, output } from '@angular/core';
import { SharedModule } from '../../../shared/modules/shared/shared.module';
import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { rocketLaunch, rocketSmoke } from '../../animations/background-element.animation';
import { RocketSmokeAnimationParameters } from '../../types/rocket-smoke-params';
import { DataService } from '../../services/data.service';
import { Direction } from '../../enums/direction.enum';
import { RocketLaunchParameters } from '../../types/rocket-launch-params';

const particleHeight = 30;
const particleWidth = 30;
const rocketWidth = 40;

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

  private _smokeGenerator?: any;

  constructor(
    private _builder: AnimationBuilder,
    private _elementRef: ElementRef<HTMLElement>,
    private _dataService: DataService,
  ) {}

  startAnimation(): void {    
    this._smokeGenerator = setInterval(() => {
      this._placeParticleWithAnimation(Direction.right);
      this._placeParticleWithAnimation(Direction.left);
    }, 100);
  }

  stopAnimation(): void {
    clearInterval(this._smokeGenerator);
  }

  private _placeParticleWithAnimation(direction: Direction): void {
    const particle = this._createSmokeParticle(direction);
    const smokeAnimationFactory = this._builder.build(rocketSmoke);  

    let player = smokeAnimationFactory.create(particle, {
      params: this._createRocketSmokeAnimationParameters(direction)
    });

    this._elementRef.nativeElement.appendChild(particle);

    player.onDone(() => {
      player.destroy();
      this._elementRef.nativeElement.removeChild(particle);
    });

    player.play();
  }

  private _createRocketWithAnimation(direction: Direction, onDone?: (player: AnimationPlayer, element: HTMLImageElement) => void): void {
    const rocket = this._createRocket(direction);
    const rocketAnimationFactory = this._builder.build(rocketLaunch);

    let player = rocketAnimationFactory.create(rocket, {
      params: this._createRocketLaunchAnimationParameters()
    });

    this._elementRef.nativeElement.appendChild(rocket);

    if(onDone !== undefined) {
      player.onDone(() => {        
        onDone(player, rocket);
      });
    }

    player.play();    
  }

  private _createSmokeParticle(direction: Direction): HTMLDivElement {
    let particle = document.createElement('div');
    const nativeElement = this._elementRef.nativeElement;

    particle.style.zIndex = '-1';
    particle.style.position = 'absolute';
    particle.style.width = particleWidth + 'px';
    particle.style.height = particleHeight + 'px';
    particle.style.top = (nativeElement.offsetTop + ((nativeElement.offsetHeight - particleHeight) / 2)) + 'px';
    particle.style.left = direction == Direction.right ? 
      (nativeElement.offsetLeft - 12) + 'px' : 
      (nativeElement.offsetLeft + nativeElement.offsetWidth - 18) + 'px';
    particle.style.borderRadius = '50%';
    particle.style.transformOrigin = 'center center';
    particle.style.backgroundColor = 'grey';

    return particle;
  }

  private _createRocket(direction: Direction): HTMLImageElement {
    let rocket = document.createElement('img');
    const nativeElement = this._elementRef.nativeElement;

    rocket.style.zIndex = '-1';
    rocket.style.position = 'absolute';
    rocket.style.width = rocketWidth + 'px';
    rocket.style.rotate = direction == Direction.right ? '-90deg' : '90deg';
    rocket.src = 'assets/images/rocket.png';
    rocket.style.top = nativeElement.offsetTop - (rocketWidth / 2) + 8 + 'px';
    rocket.style.left = (nativeElement.offsetLeft + (nativeElement.offsetWidth / 2) - (rocketWidth / 2)) + 'px';

    return rocket;
  }

  private _createRocketSmokeAnimationParameters(direction: Direction): RocketSmokeAnimationParameters {        
    return {
      timingMs: 1000,
      distance: this._dataService.getRandomNumberFromInterval(50, 100),
      offset: this._dataService.getRandomNumberFromInterval(0, 25),
      operatorX: direction == Direction.left ? '+' : '-',
      operatorY: this._dataService.getRandomBoolean() ? '+' : '-',
    };
  }

  private _createRocketLaunchAnimationParameters(): RocketLaunchParameters {
    return { 
      timingMs: 3500,
      operator: '-',
      distance: 300,
    };
  }
  
  public click(): void {
    this._createRocketWithAnimation(Direction.left);
    this._createRocketWithAnimation(Direction.right, (player, element) => {
      player.destroy();
      this._elementRef.nativeElement.removeChild(element);
      this.onClick.emit();
    });    
  }
}
