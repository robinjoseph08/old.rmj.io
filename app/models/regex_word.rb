class RegexWord < ActiveRecord::Base

  belongs_to :regex_level

  def left
    where :side => 'left'
  end

  def right
    where :side => 'right'
  end

end