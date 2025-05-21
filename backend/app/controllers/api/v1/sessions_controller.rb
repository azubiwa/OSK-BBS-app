#ログイン用
class Api::V1::SessionsController < ApplicationController
  before_action :authenticate_request, only: [:destroy]

  def create
    user = User.find_by(email: session_params[:email])
    if user&.authenticate(session_params[:password])
      token = jwt_encode(user_id: user.id)
      render json: { token: token, user: user }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    # Logic for logging out the user (e.g., invalidating the session or token)
    head :no_content
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end