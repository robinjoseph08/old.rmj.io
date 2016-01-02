import { Component, OnInit } from 'angular2/core';

import { RegexLevel }          from '../classes/regex/level';
import { RegexService }        from '../services/regex';
import { HomeButtonComponent } from './home-button';

@Component({
  directives: [HomeButtonComponent],
  providers: [RegexService],
  template: `
    <home-button></home-button>
    <div class="container regex">
      <div class="inner">
        <div class="header">
          <h1>regex</h1>
          <h2><em>Try to match the first six words completely while not matching any of the last six words at all. When they all have checkmarks, you've gotten it. The shorter the regex, the lower the score, the better you are. Currently, there are only {{levels.length}} levels, and the lowest score I ever got was {{lowestScore}}.</em></h2>
          <noscript>
            <p><em>You need JavaScript for this site to work properly.</em></p>
          </noscript>
        </div>
        <hr>
        <div class="main-container">
          <div class="status">
            <div class="level-container">Level: {{level + 1}}</div>
            <div class="score-container">Score: {{score}}</div>
          </div>
          <div *ngIf="currentLevel">
            <div class="words">
              <ul class="left">
                <li *ngFor="#word of currentLevel.leftWords"><i class="fa" [ngClass]="word.icon"></i><span [innerHTML]="word.coloredValue"></span></li>
              </ul>
              <ul class="right">
                <li *ngFor="#word of currentLevel.rightWords"><i class="fa" [ngClass]="word.icon"></i><span [innerHTML]="word.coloredValue"></span></li>
              </ul>
            </div>
            <form (submit)="nextLevel()">
              <div class="input">
                <input type="text" autocomplete="off" autocapitalize="none" placeholder="Enter regex" [(ngModel)]="currentLevel.regex" class="code">
              </div>
              <div class="help">
                <p><em>You should omit any surrounding '/'s and any modifiers.</em></p>
              </div>
              <div class="submit">
                <button [disabled]="!currentLevel.finished">next</button>
              </div>
            </form>
          </div>
          <div *ngIf="!currentLevel" class="finish">
            <h3>Congratulations! You finished it with a score of {{score}}!</h3>
          </div>
        </div>
      </div>
    </div>
  `
})
export class RegexComponent implements OnInit {

  public lowestScore: number = 55;
  public levels: RegexLevel[] = [];
  public level: number = 0;
  public score: number = 0;

  private _regexService: RegexService;

  public get currentLevel (): RegexLevel {
    return this.levels[this.level];
  }

  constructor (_regexService: RegexService) {
    this._regexService = _regexService;
  }

  public ngOnInit () {
    this._regexService.getLevels()
    .then((levels) => {
      this.levels = levels;
    });
  }

  public nextLevel () {
    if (this.currentLevel && this.currentLevel.finished) {
      let score = this.currentLevel.regex.length;
      this.score += score;
      this.level++;
    }
  }

}
