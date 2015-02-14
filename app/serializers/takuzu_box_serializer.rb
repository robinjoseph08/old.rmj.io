class TakuzuBoxSerializer < ActiveModel::Serializer

  attributes :id, :value, :correct_value, :locked
  embed :ids, include: true

end