import { Component, OnInit } from 'angular2/core';

import { RegexLevel }          from '../classes/regex/level';
import { RegexService }        from '../services/regex';
import { HomeButtonComponent } from './home-button';

const HTML = require('../views/regex.html');

@Component({
  directives: [HomeButtonComponent],
  providers: [RegexService],
  template: HTML
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
