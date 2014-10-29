require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RmjIo
  class Application < Rails::Application

    # removes timestamp from migration files
    config.active_record.timestamped_migrations = false
    # Add fonts to the assets pipeline
    config.assets.paths << Rails.root.join("app", "assets", "fonts")

  end
end
