# regex

l = RegexLevel.create

l.regex_words.create :value => 'rotation', :side => 'left'
l.regex_words.create :value => 'rotten', :side => 'left'
l.regex_words.create :value => 'rotisserie', :side => 'left'
l.regex_words.create :value => 'rottweiler', :side => 'left'
l.regex_words.create :value => 'rotator', :side => 'left'
l.regex_words.create :value => 'rotunda', :side => 'left'

l.regex_words.create :value => 'godot', :side => 'right'
l.regex_words.create :value => 'wrote', :side => 'right'
l.regex_words.create :value => 'tornado', :side => 'right'
l.regex_words.create :value => 'roman', :side => 'right'
l.regex_words.create :value => 'retail', :side => 'right'
l.regex_words.create :value => 'holiday', :side => 'right'

l = RegexLevel.create

l.regex_words.create :value => 'foot', :side => 'left'
l.regex_words.create :value => 'feeling', :side => 'left'
l.regex_words.create :value => 'rubber', :side => 'left'
l.regex_words.create :value => 'moons', :side => 'left'
l.regex_words.create :value => 'spoon', :side => 'left'
l.regex_words.create :value => 'reef', :side => 'left'

l.regex_words.create :value => 'forlorn', :side => 'right'
l.regex_words.create :value => 'rusting', :side => 'right'
l.regex_words.create :value => 'response', :side => 'right'
l.regex_words.create :value => 'ferns', :side => 'right'
l.regex_words.create :value => 'whole', :side => 'right'
l.regex_words.create :value => 'knocked', :side => 'right'

l = RegexLevel.create

l.regex_words.create :value => 'joe@gmail.com', :side => 'left'
l.regex_words.create :value => 'jsmith538@me.com', :side => 'left'
l.regex_words.create :value => 'joe_smith@smith.io', :side => 'left'
l.regex_words.create :value => 'js9274@college.edu', :side => 'left'
l.regex_words.create :value => 'joe.smith@hotmail.co.uk', :side => 'left'
l.regex_words.create :value => 'joe-s@sbcglobal.net', :side => 'left'

l.regex_words.create :value => '@.com', :side => 'right'
l.regex_words.create :value => '@gmail.com', :side => 'right'
l.regex_words.create :value => 'joesmith@', :side => 'right'
l.regex_words.create :value => 'joe_s.yahoo.com', :side => 'right'
l.regex_words.create :value => 'joe@smith@me', :side => 'right'
l.regex_words.create :value => 'joe..smith@hotmail.com', :side => 'right'

l = RegexLevel.create

l.regex_words.create :value => '214-555-8260', :side => 'left'
l.regex_words.create :value => '(415) 237-9732', :side => 'left'
l.regex_words.create :value => '646.864.9731', :side => 'left'
l.regex_words.create :value => '1-800-239-8261', :side => 'left'
l.regex_words.create :value => '2129630725', :side => 'left'
l.regex_words.create :value => '972 832 7236', :side => 'left'

l.regex_words.create :value => '765234046', :side => 'right'
l.regex_words.create :value => '(652-125-6732)', :side => 'right'
l.regex_words.create :value => '-800-825-8259', :side => 'right'
l.regex_words.create :value => '(9) 527-8152', :side => 'right'
l.regex_words.create :value => '9260 8326 23', :side => 'right'
l.regex_words.create :value => '12 (800) 180 1963', :side => 'right'

# takuzu

boards = [{
  :size =>  4,
  :full =>  [2,2,1,1,1,1,2,2,1,2,1,2,2,1,2,1],
  :empty => [0,0,1,0,0,0,0,2,1,0,1,0,0,0,0,0]
}, {
  :size =>  4,
  :full =>  [2,1,2,1,2,1,1,2,1,2,1,2,1,2,2,1],
  :empty => [0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0]
}, {
  :size =>  6,
  :full =>  [1,1,2,2,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,2,1,2,1,2,2,1,2,1,1,1,2,1,1,2,2],
  :empty => [0,0,0,0,0,0,0,0,1,0,2,0,0,2,0,0,0,0,2,0,0,0,2,0,2,2,0,0,0,0,0,2,0,0,2,0]
}, {
  :size =>  6,
  :full =>  [1,2,2,1,1,2,2,2,1,1,2,1,2,1,1,2,1,2,1,1,2,2,1,2,1,2,2,1,2,1,2,1,1,2,2,1],
  :empty => [0,2,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}, {
  :size =>  8,
  :full =>  [2,2,1,1,2,1,2,1,1,2,1,2,1,2,1,2,2,1,2,1,2,1,1,2,2,1,2,2,1,1,2,1,1,2,1,1,2,2,1,2,1,1,2,2,1,2,2,1,2,1,1,2,2,1,1,2,1,2,2,1,1,2,2,1],
  :empty => [0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,2,2,0,0,2,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,1,0,0,1,0,0,2,0]
}, {
  :size =>  8,
  :full =>  [2,1,2,1,2,1,2,1,1,2,1,2,2,1,2,1,2,1,2,1,1,2,1,2,2,1,1,2,2,1,1,2,1,2,1,2,1,2,2,1,1,1,2,1,2,1,2,2,2,2,1,2,1,2,1,1,1,2,2,1,1,2,1,2],
  :empty => [0,0,0,0,2,0,2,0,0,0,0,2,0,1,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,2,0,2,0,2,0,1,0,0,0,0,0,1,0,0,2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2]
}, {
  :size =>  10,
  :full =>  [1,1,2,2,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,2,2,1,2,1,1,2,1,2,2,1,1,2,1,2,1,2,1,1,2,2,1,2,1,1,2,1,2,2,1,2,2,1,2,1,2,2,1,2,1,1,1,1,2,2,1,2,2,1,2,1,2,2,1,1,2,1,1,2,1,2,2,2,1,2,1,1,2,1,2,1],
  :empty => [0,0,0,0,0,0,0,2,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,2,0,0,0,0,0,2,0,0,2,1,0,2,1,0,0,2,0,0,2,0,0,0,1,1,0,1,0,0,0,0,2,0,2,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,2,0,0,0,0,0,0,1,0,0,2,0,0,1,0,0,0,2,1]
}, {
  :size =>  10,
  :full =>  [1,2,2,1,2,2,1,1,2,1,2,2,1,2,1,1,2,1,1,2,2,1,1,2,1,2,1,2,2,1,1,1,2,1,2,1,2,1,2,2,2,2,1,2,1,2,1,2,1,1,1,1,2,2,1,1,2,2,1,2,2,2,1,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1,1,1,2,1,2,2,1,2,1,2],
  :empty => [0,0,0,0,2,0,0,1,0,1,2,2,1,0,0,1,0,0,0,2,0,1,1,2,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,2,0,0,1,0,0,1,0,0,0,1,2,0,1,0,2,0,0,1,0,0,0,0,0,1,2,1,1,0,0,2,0,0,0,0,0,0,0,0,2,1,2,0,2,1,0,0,2,1,0,2,0,0,0,0]
}]

boards.each do |board|
  b = TakuzuBoard.create :size => board[:size]

  board[:full].count.times do |i|
    b.takuzu_boxes.create :correct_value => board[:full][i], :value => board[:empty][i]
  end
end
