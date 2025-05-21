#ユーザー登録・取得
class Api::V1::UsersController < ApplicationController
  before_action :authenticate_request, only: [:show]
  wrap_parameters format: [:json]  # JSONを自動でwrap

  def create
    @user = User.new(user_params)
    if @user.save
      token = jwt_encode(user_id: @user.id)
      render json: { token: token, user: @user }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    if params[:user].present?
      # {"user":{...}} のとき
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    else
      # {username:"",email:"",...} のとき
      params.permit(:username, :email, :password, :password_confirmation)
    end
  end
end