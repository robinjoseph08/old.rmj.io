import { Component }  from 'angular2/core';
import { RouterLink } from 'angular2/router';

const HTML = require('../views/home.html');

@Component({
  directives: [RouterLink],
  template: HTML
})
export class HomeComponent {}
