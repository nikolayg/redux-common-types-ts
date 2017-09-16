# About this module

This module exports Common [Typescript](https://www.typescriptlang.org/) types for Redux Actions and Reducers,

# Installation:

```bash
npm install --save redux-common-types-ts
```
or

```bash
yarn add redux-common-types-ts
```
# What and How

This module exports the following common TypeScript types for Redux Actions and Reducers.

- `APIAction<Payload>`
- `APIAction<Payload>`
- `ActionCreator<Params, Payload>`
- `APIActionCreator<Params, Payload>`
- `Reducer<State, Payload>`

Import the types as:

```javascript
import { APIActionCreator, Action, /*...*/ } from "redux-common-types-ts";
```

For more information and examples read 
[this article](http://nikgrozev.com/2017/09/16/redux-common-types/).
