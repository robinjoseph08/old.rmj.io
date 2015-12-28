import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { HomeComponent } from './home';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'rmj-io',
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  { component: HomeComponent, name: 'Home', path: '/' }
])
export class AppComponent {}
