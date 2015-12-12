Given(/^Open the homepage last$/) do
  @homepage = HomePage.new
  @homepage.load
  sleep 10
end

Given(/^click delete button have "([^"]*)"$/) do |keyword|
  @homepage.delete keyword
end

Given(/^search "([^"]*)"$/) do |keyword|
  @homepage.search keyword
end

Given(/^Have (\d+) result$/) do |expect|
  expect(@homepage.result).to eq expect.to_i
end
