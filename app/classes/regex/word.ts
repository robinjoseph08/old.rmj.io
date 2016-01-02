import { IRegexWord } from '../../interfaces/regex/word';

export class RegexWord {

  public value: string;
  public side: string;
  public regex: string;

  public get matches (): string[] {
    let regex;

    try {
      regex = new RegExp(this.regex);
    } catch (ex) {
      regex = new RegExp('');
    }

    return regex.exec(this.value);
  }

  public get matched (): boolean {
    let matches = this.matches;

    return this.value !== '' && matches && matches[0] !== '';
  }

  public get fullyMatched (): boolean {
    let matches = this.matches;

    return this.value !== '' && matches && matches[0] === this.value;
  }

  public get passed (): boolean {
    let matched = this.matched;
    let fullyMatched = this.fullyMatched;
    let passed;

    if (fullyMatched) {
      passed = this.side === 'left';
    } else {
      passed = this.side === 'right' && !matched;
    }

    return passed;
  }

  public get icon (): string {
    return this.passed ? 'fa-check' : 'fa-times';
  }

  public get coloredValue (): string {
    let value = this.value;
    let matches = this.matches;

    if (value !== '' && matches && matches[0] !== '') {
      value = value.replace(matches[0], `<span class="match">${matches[0]}</span>`);
    }

    return value;
  }

  constructor (params: IRegexWord) {
    this.value = params.value;
    this.side = params.side;
  }

}
