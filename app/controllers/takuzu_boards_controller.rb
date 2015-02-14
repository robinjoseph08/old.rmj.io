class TakuzuBoardsController < ApplicationController

  def index
    if params[:ids]
      render :json => TakuzuBoard.find(params[:ids])
    else
      render :json => TakuzuBoard.all
    end
  end

  def show
    render :json => TakuzuBoard.find(params[:id])
  end

end