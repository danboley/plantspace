class StoresController < ApplicationController
    skip_before_action :authorize, only: :index

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
