import { Component } from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarousel]  // add NgbCarouselConfig to the component providers

})
export class AppComponent  {

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarousel) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

}
