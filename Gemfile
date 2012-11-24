source 'https://rubygems.org'

# ruby '1.9.2'

gem 'rails', '3.2.8'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'pg'

gem 'haml'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
# gem 'clearance'
gem 'thin'
gem 'high_voltage'
gem 'paperclip'
gem 'formtastic'
gem 'flutie'
gem 'bourbon'
gem 'airbrake'

gem 'tabs_on_rails'
gem 'draper'
gem 'validate_url'
gem 'acts_as_commentable'
gem 'kaminari'

# content
gem 'htmlentities'

# gem-hack to hide warnings in cucumber
gem 'escape_utils'

gem 'activeadmin', git: "git://github.com/gregbell/active_admin.git"

gem 'friendly_id', git: "https://github.com/norman/friendly_id.git"

gem 'devise'
gem 'omniauth-twitter'

group :development do
  gem 'foreman'
  gem 'css_sprite'

  # best console development (colors, pm & ap methods)
  gem "wirble"                          # colors
  gem "hirb"                            # show query's result in table format
  gem "awesome_print", :require => "ap" # example: ap object
  gem 'what_methods'                    # example: pm User.first, /ind/

  # sec
  gem "brakeman" # detect security fails. Execute in shell: brakeman

  # optimization
  # gem "bullet"              # watch log/bullet.log
  # gem "rack-mini-profiler"
end

group :development, :test do
  gem 'guard'
  gem 'guard-spork'
# gem 'rspec-rails'
  gem 'sham_rack'
  gem 'factory_girl_rails'
end

group :test do
  gem 'shoulda', git: "https://github.com/thoughtbot/shoulda.git"
  gem 'test-unit'
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'bourne'
  gem 'database_cleaner'
  gem 'timecop'
  # gem 'shoulda-matchers'
  gem 'launchy'
  gem 'simplecov', require: false
end

group :staging, :production do
  gem 'newrelic_rpm'
end

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
