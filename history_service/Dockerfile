FROM ruby:3.2

# Install dependencies including MySQL client
RUN apt-get update -qq && \
    apt-get install -y build-essential default-libmysqlclient-dev curl

# Set working directory
WORKDIR /app

# Copy Gemfile and install gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 3002

# Start server
CMD ["bin/rails", "server", "-b", "0.0.0.0", "-p", "3002"]
