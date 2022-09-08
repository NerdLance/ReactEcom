// import { compose, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { logger } from 'redux-logger'

import { rootReducer } from './root-reducer'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)
// const composedEnhancers = compose(applyMiddleware(...middleWares))

// export const store = createStore(rootReducer, undefined, composedEnhancers)

const storeOptions = {
    reducer: persistedReducer,
    middleware: middleWares
}

export const store = configureStore(storeOptions)

export const persistor = persistStore(store)