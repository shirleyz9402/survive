class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :health, :default => 100
      t.string :image
      t.boolean :alive, :default => true

      t.timestamps
    end
  end
end
