class CreateRegexLevel < ActiveRecord::Migration
  def change
    create_table :regex_levels do |t|

      t.timestamps

    end
  end
end
