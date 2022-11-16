class SpeciesController < ApplicationController
  def index
    render json: Species.all, status: :ok
  end

  def create
    species = @current_user.species.create!(spe_params)
    render json: species, status: :created
  end

  private

  def spe_params
    params.permit(:species_name, :frequency_watered, :care)
  end
end
