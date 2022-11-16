class PlantsController < ApplicationController
  # before_action :authorize
  skip_before_action :authorize, only: :index

  def index
    render json: Plant.all, status: :ok
  end

  def show
    render json: find_pla, status: :ok
  end

  def create
    plant = @current_user.plants.create!(plant_params)
    render json: plant, status: :created
  end

  def update
    render json: find_pla.update!(plant_params), status: :accepted
  end

  def destroy
    find_pla.destroy
    head :no_content
  end

  private

  def plant_params
    params.permit(:name, :picture_url, :last_watered, :user_id, :store_id, :species_id)
  end

  def find_pla
    Plant.find(params[:id])
  end
end
