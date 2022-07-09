class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.integer :order_id
      t.integer :amount
      t.string :provider
      t.string :status

      t.timestamps
    end
  end
end
