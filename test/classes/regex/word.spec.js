var word_1 = require('../../../app/classes/regex/word');
describe('classes', function () {
    describe('regex word', function () {
        describe('matches', function () {
            it('returns the matches of the regex', function () {
                var value = 'test';
                var regex = new word_1.RegexWord({ side: 'left', value: value });
                regex.regex = '^.';
                expect(regex.matches[0]).toBe(value[0]);
            });
            it('defaults to the empty string if regex is invalid', function () {
                var regex = new word_1.RegexWord({ side: 'left', value: 'test' });
                regex.regex = '(';
                expect(regex.matches[0]).toBe('');
            });
        });
        describe('matched', function () {
            it('returns false if matches is empty', function () {
                var regex = new word_1.RegexWord({ side: 'left', value: 'test' });
                regex.regex = 'nomatch';
                expect(regex.matched).toBe(false);
            });
            it('returns false if value is empty', function () {
                var regex = new word_1.RegexWord({ side: 'left', value: '' });
                regex.regex = 'test';
                expect(regex.matched).toBe(false);
            });
            it('returns true if matches is not empty', function () {
                var regex = new word_1.RegexWord({ side: 'left', value: 'test' });
                regex.regex = 't';
                expect(regex.matched).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=word.spec.js.map