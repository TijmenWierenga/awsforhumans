server:
	docker run -itd --rm -v $$(pwd):/app -w /app/public -p 80:80 php:7.2-alpine -S 0.0.0.0:80
webpack-watch:
	docker run -it --rm -v $$(pwd):/app -w /app -u $$(id -u):$$(id -g) awsforhumans/node:dev ./node_modules/.bin/encore dev --watch
unittest:
	docker run -it --rm -v $$(pwd):/app -w /app php:7.2-alpine vendor/bin/phpunit

.SILENT: server unittest webpack-watch
.PHONY: server unittest webpack-watch