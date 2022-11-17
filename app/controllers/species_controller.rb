class SpeciesController < ApplicationController

  def index
    render json: Species.all, status: :ok
  end

  def create
    render json: Species.create!(spe_params), status: :created
  end

  private

  def spe_params
    params.permit(:species_name, :frequency_watered, :care)
  end

  def find_plant
    Plant.find(params[:id])
  end
end
