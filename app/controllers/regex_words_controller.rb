class RegexWordsController < ApplicationController

  def index
    if params[:ids]
      render :json => RegexWord.find(params[:ids])
    else
      render :json => RegexWord.all
    end
  end

  def show
    render :json => RegexWord.find(params[:id])
  end

end