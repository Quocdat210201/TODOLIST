import { CreateStore } from './core.js';
import reducer from './reducer.js';
import logger from './logger.js'

const {attach , connect, dispatch } = CreateStore(logger(reducer));

window.dispatch = dispatch

export {
    attach,
    connect,
}