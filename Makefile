install: install-deps

install-deps:
	npm install
	
start: start-brain-gcd

start-brain-calc:
	npx babel-node -- src/bin/brain-calc.js

start-brain-even:
	npx babel-node -- src/bin/brain-even.js	

start-brain-games:
	npx babel-node -- src/bin/brain-games.js

start-brain-gcd:
	npx babel-node -- src/bin/brain-gcd.js		

publish:
	npm publish --access=public

lint:
	npx eslint .