import { RegexWord }   from './word';
import { IRegexLevel } from '../../interfaces/regex/level';

export class RegexLevel {

  public leftWords: RegexWord[];
  public rightWords: RegexWord[];

  private _regex: string;

  public get regex (): string {
    return this._regex;
  }
  public set regex (regex: string) {
    this._regex = regex;
    let words = this.leftWords.concat(this.rightWords);

    words.map((word: RegexWord) => {
      word.regex = regex;
    });
  }

  public get finished (): boolean {
    let finished = true;
    let words = this.leftWords.concat(this.rightWords);

    for (let word of words) {
      finished = finished && word.passed;
      if (!finished) {
        break;
      }
    }

    return finished;
  }

  constructor (params: IRegexLevel) {
    this.leftWords = params.leftWords.map((word: string) => {
      return new RegexWord({ side: 'left', value: word });
    });
    this.rightWords = params.rightWords.map((word: string) => {
      return new RegexWord({ side: 'right', value: word });
    });
  }

}
