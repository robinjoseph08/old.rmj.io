import { RegexWord } from '../../../app/classes/regex/word';

describe('classes', () => {

  describe('regex word', () => {

    describe('matches', () => {

      it('returns the matches of the regex', () => {
        let value = 'test';
        let regex = new RegexWord({ side: 'left', value: value });
        regex.regex = '^.';

        expect(regex.matches[0]).toBe(value[0]);
      });

      it('defaults to the empty string if regex is invalid', () => {
        let regex = new RegexWord({ side: 'left', value: 'test' });
        regex.regex = '(';

        expect(regex.matches[0]).toBe('');
      });

    });

    describe('matched', () => {

      it('returns false if matches is empty', () => {
        let regex = new RegexWord({ side: 'left', value: 'test' });
        regex.regex = 'nomatch';

        expect(regex.matched).toBe(false);
      });

      it('returns false if value is empty', () => {
        let regex = new RegexWord({ side: 'left', value: '' });
        regex.regex = 'test';

        expect(regex.matched).toBe(false);
      });

      it('returns true if matches is not empty', () => {
        let regex = new RegexWord({ side: 'left', value: 'test' });
        regex.regex = 't';

        expect(regex.matched).toBe(true);
      });

    });

  });

});
