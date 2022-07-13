class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :street
      t.string :apt
      t.string :city
      t.string :state
      t.integer :zip
      t.string :country
      t.string :email
      t.boolean :admin
      t.string :password_digest

      t.timestamps
    end
  end
end
