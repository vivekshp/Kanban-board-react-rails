class ApplicationController < ActionController::API
  before_action :authenticate_request
  around_action :switch_tenant

  private

  # Extract JWT from headers or cookies
  def auth_token_from_request
    if request.headers['Authorization'].present?
      return request.headers['Authorization'].split(' ').last
    elsif request.headers['Cookie'].present?
      cookie_match = request.headers['Cookie'].match(/jwt=([^;]+)/)
      return cookie_match[1] if cookie_match
    end
    nil
  end

  # Authenticate the request
  def authenticate_request
    token = auth_token_from_request
    return render(json: { error: 'Missing token' }, status: :unauthorized) unless token

    begin
      @payload = JwtService.decode(token)
      @current_user_id = @payload['user_id']
      @tenant_name = @payload['tenant']
    rescue JWT::DecodeError => e
      Rails.logger.info "JWT DecodeError: #{e.message}"
      return render(json: { error: 'Unauthorized' }, status: :unauthorized)
    end
  end

  def current_user
    @current_user ||= User.find_by(id: @current_user_id)
  end

  # Switch tenant using Apartment
  def switch_tenant
    if @tenant_name.present?
      Rails.logger.info ">>> Switching tenant: #{@tenant_name}"
      Apartment::Tenant.switch(@tenant_name) { yield }
    else
      Rails.logger.info ">>> No tenant in JWT, using default"
      yield
    end
  rescue Apartment::TenantNotFound => e
    Rails.logger.info "Tenant not found: #{@tenant_name}"
    render json: { error: "Tenant not found" }, status: :unauthorized
  end
end
