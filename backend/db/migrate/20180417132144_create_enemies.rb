class CreateEnemies < ActiveRecord::Migration[5.1]
  def change
    create_table :enemies do |t|
      t.string :name
      t.integer :health
      t.string :image
      t.boolean :alive

      t.timestamps
    end
  end
end
