class CreateEnemies < ActiveRecord::Migration[5.1]
  def change
    create_table :enemies do |t|
      t.string :name
      t.integer :health, :default => 100
      t.string :image
      t.boolean :alive, :default => true

      t.timestamps
    end
  end
end
