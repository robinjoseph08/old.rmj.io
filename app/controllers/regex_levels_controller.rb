class RegexLevelsController < ApplicationController

  def index
    if params[:ids]
      render :json => RegexLevel.find(params[:ids])
    else
      render :json => RegexLevel.all
    end
  end

end