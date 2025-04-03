# itemscan-concurrency

[![Version Status](https://badge.fury.io/js/react-redux-saga-boilerplate.svg)](https://www.npmjs.com/package/react-redux-saga-boilerplate)
[![Download Status](https://img.shields.io/npm/dt/react-redux-saga-boilerplate.svg)](https://www.npmjs.com/package/react-redux-saga-boilerplate)

Item scan concurrency handle via saga

## How to Run

1. Download the package on local

```
git clone https://github.com/narasingh/itemscan-concurrency.git
```

2. Run following command to install dependencies

```
npm install or yarn install
```

3. Execute to run application in dev mode

```
npm run dev or yarn dev
```

The dev server will run on `http://localhost:3000`

## Redux

Redux is a predictable state container for JavaScript apps. (Not to be confused with a WordPress framework – Redux Framework.)
Redux has 4 major components:

1. Action Types
2. Actions
3. Reducers
4. Middleware like thunk, saga(where we handle api calls and other complex logics)

### What are Action Types and How to define Action Types?

Action Types are tiny part of application but are major building block of Redux Application.

```
const CREATE_ITEM = "CREATE_ITEM";
```

or you can use it like an object structure

```
export const Types = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};
```

It should be **unique** throughout the application.

### What are Actions and How to define Actions?

Actions are something that orchestras the whole flow of application, with the help of actions we can modify the data in the store or perform some operations like API calls, remove data from store.

we can simply define action as:

```
const createItem = (task) => ({
  type: Types.CREATE_ITEM,
  payload: task,
});
```
