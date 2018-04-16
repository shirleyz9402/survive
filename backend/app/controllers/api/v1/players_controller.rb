class Api::V1::PlayersController < ApplicationController
  def index
    @players = Player.all
    render json: @players
  end
  def create
    @player = Player.create(name: params[:name])
    render json: @player
  end
  def show
    @player = Player.find(params[:id])
    render json: @player
  end
end
