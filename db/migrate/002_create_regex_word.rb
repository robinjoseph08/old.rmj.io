class CreateRegexWord < ActiveRecord::Migration
  def change
    create_table :regex_words do |t|

      t.string :value
      t.string :side

      t.belongs_to :regex_level

      t.timestamps

    end
  end
end
