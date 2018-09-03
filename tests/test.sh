#!/bin/bash

cd tests
tsc
cd ..
./node_modules/.bin/mocha --require tests/setup.js tests/tests/*_test.js
exit 0