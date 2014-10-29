class RegexLevel < ActiveRecord::Base

  has_many :regex_words

  def left_words
    regex_words.left
  end

  def right_words
    regex_words.right
  end

end