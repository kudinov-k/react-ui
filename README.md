# TypeScript React UI Library

This repository contain React app with TypeScript. React app need only for development and demo all components.
When it builds package has only content of folder `lib` and main `index.js` file and `index.d.ts` for typing.

To run it just use:

```shell
npm install
```

and 

```shell
npm start
```

For testing project already has [Enzyme](http://airbnb.io/enzyme/) and [Mocha](https://mochajs.org/)

To run test use:

```shell
npm test
```

After adding new components in `lib` need add export to main `lib/index.ts` file.
Then build code with command:

```shell
npm build
```

And after that push.

To use this lib in another project just add in package.json 

`"react-ui": "git+ssh://git@github.com/kudinov-k/react-ui.git"`

and install it.

Import components in your code

```js
import { Hello, Bye } from 'react-ui';
```

```jsx
<Hello/>
<Bye/>
```
