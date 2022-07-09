class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :text
      t.integer :user_id
      t.integer :product_id

      t.timestamps
    end
  end
end
