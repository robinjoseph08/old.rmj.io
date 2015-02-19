class StaticController < ApplicationController

  def index
    @id = request.ip
    $tracker.people.set @id, {
      "IP Address" => @id
    }
  end

end