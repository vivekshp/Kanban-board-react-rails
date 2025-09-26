class JwtService
    SECRET_KEY = Rails.application.credentials.secret_key_base
    
    def self.encode(payload, exp = 24.hours.from_now)
      payload[:exp] = exp.to_i
      JWT.encode(payload, SECRET_KEY)
    end
    
    def self.decode(token)
      Rails.logger.info ">>> Decoding token: #{token}"
      decoded = JWT.decode(token, SECRET_KEY)[0]
      Rails.logger.info ">>> Decoded JWT: #{decoded.inspect}"
      HashWithIndifferentAccess.new decoded
    rescue JWT::DecodeError => e
      Rails.logger.info ">>> JWT DecodeError: #{e.message}"
      raise StandardError, e.message
    end
  end