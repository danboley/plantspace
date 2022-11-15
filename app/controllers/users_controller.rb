class UsersController < ApplicationController
    def index
        render json: User.all, status: :ok
    end

    def create
        render json: User.create!(user_params), status: :created
    end

    def destroy
        find_user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password_digest)
    end
    
    def find_user
        User.find(params[:id])
    end
end
