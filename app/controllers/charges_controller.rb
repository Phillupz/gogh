require 'stripe'
require 'dotenv'
Dotenv.load

class ChargesController < ApplicationController

    def create

        Stripe::PaymentLink.create(
            line_items: [{price: '{{PRICE_ID}}', quantity: 1}],
          )

        Stripe.api_key = ENV['STRIPE_SECRET_KEY']
        token = params[:charge][:token]
        price = params[:price]

        charge = Stripe::Charge.create({
            amount: price,
            currency: 'usd',
            source: token,
            description: 'Test Charge!',
        })

        render json: charge

    end

end