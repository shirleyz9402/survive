class CreateProjectiles < ActiveRecord::Migration[5.1]
  def change
    create_table :projectiles do |t|
      t.string :name
      t.integer :damage
      t.references :player, foreign_key: true
      t.references :enemy, foreign_key: true
      t.string :image

      t.timestamps
    end
  end
end
