import { Component }                 from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';

import { HomeComponent }  from './home';
import { RegexComponent } from './regex';

@Component({
  directives: [RouterOutlet],
  selector: 'rmj-io',
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  { component: HomeComponent,  name: 'Home',  path: '/' },
  { component: RegexComponent, name: 'Regex', path: '/regex' }
])
export class AppComponent {}
