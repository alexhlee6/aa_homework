require 'rails_helper'

RSpec.describe User, type: :model do
  
  # subject(:user) { User.new(email: "alexalex@alex.com", password:"password") }

  describe "validations" do 
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }

    it "should return true for correct passwords" do 
      user = User.new(email: "alexalex@alex.com", password: "password")
      expect(user.is_password?("password")).to be true 
    end

    it "should return false for correct passwords" do 
      user = User.new(email: "alexalex@alex.com", password: "password")
      expect(user.is_password?("pass")).to be false
    end

    it "should reset the session token" do 
      user = User.new(email: "alexalex@alex.com", password: "password")
      token_1 = user.session_token
      token_2 = user.reset_session_token! 
      expect(token_1).not_to eq(token_2)
    end 

    it "should find a user by credentials" do 
      user = User.new(email: "alexalex@alex.com", password: "password")
      user.save! 
      expect(User.find_by_credentials("alexalex@alex.com", "password")).to eq(user)
    end 
  end 



end
