class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :points
  has_one :player
end
