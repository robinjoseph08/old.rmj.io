import { Component }  from 'angular2/core';
import { RouterLink } from 'angular2/router';

@Component({
  directives: [RouterLink],
  selector: 'home-button',
  template: `
    <div class="home-button">
      <a [routerLink]="['Home']">
        <button><i class="fa fa-home"></i></button>
      </a>
    </div>
  `
})
export class HomeButtonComponent {}
