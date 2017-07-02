

init: clean
	npm install

clean:
	rm -rf node-modules

test:
	npm test

watch:
	NODE_ENV=dev webpack -w

serve:
	node server.js

.PHONY: init clean test watch serve
