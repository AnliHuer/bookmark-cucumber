Given(/^Open the homepage second$/) do
  @homepage = HomePage.new
  @homepage.load
  sleep 5
end

Given(/^click the insert button$/) do
  @homepage.insert
end

Given(/^input name "([^"]*)" and address "([^"]*)"$/) do |name, address|
  @homepage.input name,address
end

Given(/^click sure button$/) do
  @homepage.sure name,address
end
