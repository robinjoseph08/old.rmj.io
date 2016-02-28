import { Component }  from 'angular2/core';
import { RouterLink } from 'angular2/router';
import { Title }      from 'angular2/platform/browser';

const HTML = require('../views/home.html');

@Component({
  directives: [RouterLink],
  providers: [Title],
  template: HTML
})
export class HomeComponent {

  constructor (_title: Title) {
    _title.setTitle('rmj');
  }

}
