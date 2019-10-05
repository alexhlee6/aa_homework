feature "the signup process" do

  scenario "has a new user page" do
    visit new_user_url
    expect(page).to have_content "New Account"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'user[email]', :with => "testing@email.com"
      fill_in 'user[password]', :with => "biscuits"
      click_on "Create My Account!"
    end

    scenario "redirects to user's show after signup" do 
        expect(current_path).to eq("/users/#{User.find_by(email:"testing@email.com").id}")
    end 
  end

  feature "with an invalid user" do
    before(:each) do
      visit new_user_url
      fill_in 'user[email]', :with => "testing@email.com"
      click_on "Create My Account!"
    end

    scenario "re-renders the signup page after failed signup" do
        expect(current_path).to eq("/users/new")
    end 
  end

end