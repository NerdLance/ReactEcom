// import { compose, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import { logger } from 'redux-logger'

import { rootReducer } from './root-reducer'

const middleWares = [logger]
// const composedEnhancers = compose(applyMiddleware(...middleWares))

// export const store = createStore(rootReducer, undefined, composedEnhancers)

const storeOptions = {
    reducer: rootReducer,
    middleware: middleWares
}

export const store = configureStore(storeOptions)