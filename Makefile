install: install-deps

install-deps:
	npm install
	
start: start-brain-progression

start-brain-calc:
	npx babel-node -- src/bin/brain-calc.js

start-brain-even:
	npx babel-node -- src/bin/brain-even.js	

start-brain-games:
	npx babel-node -- src/bin/brain-games.js

start-brain-gcd:
	npx babel-node -- src/bin/brain-gcd.js	

start-brain-progression:
	npx babel-node -- src/bin/brain-progression.js		

publish:
	npm publish --access=public

lint:
	npx eslint .