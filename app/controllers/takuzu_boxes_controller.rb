class TakuzuBoxesController < ApplicationController

  def index
    if params[:ids]
      render :json => TakuzuBox.find(params[:ids])
    else
      render :json => TakuzuBox.all
    end
  end

  def show
    render :json => TakuzuBox.find(params[:id])
  end

end