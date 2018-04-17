class ProjectileSerializer < ActiveModel::Serializer
  attributes :id, :name, :damage, :image
  has_one :player
  has_one :enemy
end
