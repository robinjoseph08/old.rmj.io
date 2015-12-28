import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="splash">
      <div class="inner">
        <h1>Robin Joseph</h1>
        <ul>
          <li>
            <a href="https://www.fortheon.com" target="_blank">
              <button class="fortheon">fortheon</button>
            </a>
          </li>
          <li>
            <a [routerLink]="['Regex']">
              <button class="regex">regex</button>
            </a>
          </li>
          <li>
            <a [routerLink]="['Takuzu']">
              <button class="takuzu">takuzu</button>
            </a>
          </li>
          <li>
            <a [routerLink]="['Chat']">
              <button class="chat">chat</button>
            </a>
          </li>
          <li>
            <a href="https://github.com/robinjoseph08" target="_blank">
              <button class="github">github</button>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/robinjoseph08" target="_blank">
              <button class="twitter">twitter</button>
            </a>
          </li>
          <li>
            <a [routerLink]="['Resume']">
              <button class="resume">résumé</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class HomeComponent {}
