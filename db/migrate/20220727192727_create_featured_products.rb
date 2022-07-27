class CreateFeaturedProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :featured_products do |t|
      t.integer :product_id
      t.timestamps
    end
  end
end
