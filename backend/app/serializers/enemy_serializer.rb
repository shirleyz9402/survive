class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :health, :image, :alive
end
