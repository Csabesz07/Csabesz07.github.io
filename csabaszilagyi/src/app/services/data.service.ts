import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {  

  public getRandomNumberFromInterval(min: number, max: number): number {
    max = max + 1;
    return Math.floor(Math.random() * (max - min) + min);
  }

  public getRandomBoolean(): boolean {
    return Math.random() > 0.5;
  }
}
