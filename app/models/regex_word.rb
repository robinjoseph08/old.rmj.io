class RegexWord < ActiveRecord::Base

  belongs_to :regex_level

  def self.left
    where :side => 'left'
  end

  def self.right
    where :side => 'right'
  end

end