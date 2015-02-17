class StaticController < ApplicationController

  def index
    @id = request.ip
    puts @id
    $tracker.people.set @id, {
      "IP Address" => @id
    }
  end

end