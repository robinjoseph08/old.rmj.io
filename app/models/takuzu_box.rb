class TakuzuBox < ActiveRecord::Base

  belongs_to :takuzu_board

  def locked
    self.value > 0
  end

end