# Use an official PHP runtime as a parent image
FROM php:8.1-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev libzip-dev unzip git

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www

# Copy the application code
COPY . .

# Install PHP dependencies
RUN composer install

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs

# Install frontend dependencies and build assets
RUN npm install && npm run prod

# Expose port 80 for the web server
EXPOSE 80

# Start PHP-FPM
CMD ["php-fpm"]
