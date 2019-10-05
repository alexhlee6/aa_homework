class UserMailer < ApplicationMailer
    default from: 'everybody@appacademy.io'

    def welcome_email(user)
        @user = user
        @url = "http://www.99cats.com"
        mail(to: user.email, subject: 'Welcome to the 99Cats site!')
    end 
end
