class StoresController < ApplicationController

    def index
        render json: Store.all, status: :ok
    end

    def create
        store = @current_user.stores.create!(sto_params)
        render json: store, status: :created
    end

    private

    def sto_params
        params.permit(:name, :location, :store_url)
    end
end
