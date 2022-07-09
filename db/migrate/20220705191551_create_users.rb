class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :email
      t.boolean :admin
      t.string :stripe_email
      t.string :customer_id
      t.string :stripe_token
      t.string :password_digest

      t.timestamps
    end
  end
end
