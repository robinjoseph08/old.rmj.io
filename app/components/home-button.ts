import { Component }  from 'angular2/core';
import { RouterLink } from 'angular2/router';

const HTML = require('../views/home-button.html');

@Component({
  directives: [RouterLink],
  selector: 'home-button',
  template: HTML
})
export class HomeButtonComponent {}
