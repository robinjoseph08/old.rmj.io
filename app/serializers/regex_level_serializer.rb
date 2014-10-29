class RegexLevelSerializer < ActiveModel::Serializer

  attributes :id, :left_word_ids, :right_word_ids, :regex_word_ids
  embed :ids, include: true

  def left_word_ids
    object.left_words.pluck :id
  end

  def right_word_ids
    object.right_words.pluck :id
  end

end