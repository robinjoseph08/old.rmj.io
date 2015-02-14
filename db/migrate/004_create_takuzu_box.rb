class CreateTakuzuBox < ActiveRecord::Migration
  def change
    create_table :takuzu_boxes do |t|

      t.integer :value
      t.integer :correct_value

      t.belongs_to :takuzu_board

      t.timestamps

    end
  end
end
