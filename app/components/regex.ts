import { Component } from 'angular2/core';

import { HomeButtonComponent } from './home-button';

@Component({
  directives: [HomeButtonComponent],
  template: `
    <home-button></home-button>
  `
})
export class RegexComponent {}
