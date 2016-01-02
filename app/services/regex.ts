import { Injectable } from 'angular2/core';

import { RegexLevel } from '../classes/regex/level';

const LEVELS: RegexLevel[] = [
  new RegexLevel({
    leftWords: ['rotation', 'rotten', 'rotisserie', 'rottweiler', 'rotator', 'rotunda'],
    rightWords: ['godot', 'wrote', 'tornado', 'roman', 'retail', 'holiday']
  }),
  new RegexLevel({
    leftWords: ['foot', 'feeling', 'rubber', 'moons', 'spoon', 'reef'],
    rightWords: ['forlorn', 'rusting', 'response', 'ferns', 'whole', 'knocked']
  })
];

@Injectable()
export class RegexService {

  public getLevels (): Promise<RegexLevel[]> {
    return Promise.resolve(LEVELS);
  }

}
