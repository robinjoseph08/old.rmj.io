class TakuzuBoardSerializer < ActiveModel::Serializer

  attributes :id, :size, :takuzu_box_ids
  embed :ids, include: true

end