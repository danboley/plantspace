class PlantsController < ApplicationController
  def index
    render json: Plant.all, status: :ok
  end
  
  def create
    render json: Plant.create!(plant_params), status: :created
  end

  private

  def plant_params
    params.permit(:name, :picture_url, :last_watered, :user_id, :store_id, :species_id)
  end
end
