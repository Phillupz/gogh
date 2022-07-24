class OrderMailer < ApplicationMailer
  default from: 'vangoghapperal@gmail.com'
 
  def thank_you_email
    mail(to: params[:email], subject: "Thank You For Your Order!")
  end
end
