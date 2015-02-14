class CreateTakuzuBoard < ActiveRecord::Migration
  def change
    create_table :takuzu_boards do |t|

      t.integer :size

      t.timestamps

    end
  end
end
