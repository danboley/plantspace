class PlantsController < ApplicationController
  
  def index
    render json: Plant.all, status: :ok
  end
  
  def create
    plant = @current_user.plants.create!(plant_params)
    render json: plant, status: :created
  end

  private

  def plant_params
    params.permit(:name, :picture_url, :last_watered, :user_id, :store_id, :species_id)
  end
end
