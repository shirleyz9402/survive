class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.integer :points, :default => 0
      t.references :player, foreign_key: true

      t.timestamps
    end
  end
end
