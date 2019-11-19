#!/bin/bash
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get -q -y install nginx
sudo apt-get -q -y install php7.0-fpm
sudo apt-get -q -y install php-fpm php-mysql

# TODO Download demo-php.config
sudo wget -O /etc/nginx/sites-available/demo-php.config https://raw.githubusercontent.com/cmaneu/modern-workshops/master/samples/simple-vm-lb-setup-azure/demo-php.config
sudo ln -s /etc/nginx/sites-available/demo-php.config /etc/nginx/sites-enabled/
sudo unlink /etc/nginx/sites-enabled/default
sudo systemctl reload nginx

# copy index.php to /var/www/html/
sudo wget -O /var/www/html/index.php https://raw.githubusercontent.com/cmaneu/modern-workshops/master/samples/simple-vm-lb-setup-azure/index.php
