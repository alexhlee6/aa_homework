require 'bcrypt'
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true 
    validates :session_token, presence: true, uniqueness: true 
    validates :password_digest, presence: {message: "Password can't be blank"}
    validates :password, length: { minimum: 6, allow_nil: true }
    before_validation :ensure_session_token


    def ensure_session_token 
        self.session_token ||= User.generate_session_token
    end 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        bcrypted_pass = BCrypt::Password.new(user.password_digest)
        if bcrypted_pass.is_password?(password)
            return user 
        else  
            return nil 
        end 
    end 

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end 

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save! 
    end

    attr_reader :password 
    def password=(pw)
        @password = pw 
        self.password_digest = BCrypt::Password.create(pw)
    end 
end
