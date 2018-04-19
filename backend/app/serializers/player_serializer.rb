class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :health, :image, :alive, :score
end
