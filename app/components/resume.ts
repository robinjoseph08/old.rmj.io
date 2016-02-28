import { Component } from 'angular2/core';
import { Title }     from 'angular2/platform/browser';

import { HomeButtonComponent } from './home-button';

const HTML = require('../views/resume.html');

@Component({
  directives: [HomeButtonComponent],
  providers: [Title],
  template: HTML
})
export class ResumeComponent {

  constructor (_title: Title) {
    _title.setTitle('résumé');
  }

}
