SHELL := /bin/bash

dev:
	if which docker-compose >/dev/null; then \
		docker-compose -f ./docker/docker-compose.yml up $(FLAG) --build; \
	else \
		docker compose -f ./docker/docker-compose.yml up $(FLAG) --build; \
	fi

prod:
	rm -rf build \
	&& docker stop bytebank \
	&& docker rm -f bytebank \
	&& docker build --target production -t bytebank -f ./docker/dockerfile . \
	&& docker run -d --name bytebank -t bytebank \
	&& docker cp bytebank:/usr/src/bytebank/build ./ \
	&& docker stop bytebank \
	&& docker rm -f bytebank \
	&& docker rmi -f bytebank
