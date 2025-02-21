import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    imports: [
      RouterOutlet,
      TranslateModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['hu', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
