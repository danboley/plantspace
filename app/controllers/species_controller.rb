class SpeciesController < ApplicationController
  def index
    render json: Species.all, status: :ok
  end
end
