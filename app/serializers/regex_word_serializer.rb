class RegexWordSerializer < ActiveModel::Serializer

  attributes :id, :value, :side, :regex_level_id
  embed :ids, include: true

end