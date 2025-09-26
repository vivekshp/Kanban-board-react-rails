require 'net/http'

class ProxyController < ApplicationController
  

  
  def forward
    service_url = choose_service(request.fullpath)

    uri = URI("#{service_url}#{request.fullpath}")
    http = Net::HTTP.new(uri.host, uri.port)

    
    req_class = Object.const_get("Net::HTTP::#{request.method.capitalize}")
    proxy_req = req_class.new(uri)
    proxy_req.body = request.body.read if request.body.present?
    copy_headers(proxy_req)
    Rails.logger.info ">>> Forwarding with headers: #{proxy_req.each_header.to_h}"


    response = http.request(proxy_req)
    render plain: response.body, status: response.code
  end

  private

  def choose_service(path)
    if path.start_with?("/api/history")
      "http://history_service:3002"  # history_service
    else
        # "http://localhost:3001"  # core_service 
      Rails.logger.info ">>> Non-history path, handled by main backend: #{path}"
    end
  end

 def copy_headers(proxy_req)
  if cookies[:jwt].present?
    proxy_req['Authorization'] = "Bearer #{cookies[:jwt]}"
  elsif request.headers['Authorization']
    proxy_req['Authorization'] = request.headers['Authorization']
  end

  proxy_req['Content-Type'] = request.headers['Content-Type'] if request.headers['Content-Type']
end
end
