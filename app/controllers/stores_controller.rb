class StoresController < ApplicationController

    def index
        render json: Store.all, status: :ok
    end

    def create
        render json: Store.create!(sto_params), status: :created
    end

    private

    def sto_params
        params.permit(:name, :location, :store_url)
    end
end
