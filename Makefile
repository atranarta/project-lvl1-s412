install: 
	install-deps 

install-deps:
	npm install
	
start:
	# npx babel-node -- src/bin/brain-games.js
	# npx babel-node -- src/bin/brain-even.js
	npx babel-node -- src/bin/brain-calc.js

publish:
	npm publish --access=public

lint:
	npx eslint .