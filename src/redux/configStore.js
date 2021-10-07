import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import QuanLyPhimReducer from './reducer/QuanLyPhimReducer'
import CarouselReducer from './reducer/CarouselReducer'
import QuanLyRapReducer from './reducer/QuanLyCumRapReducer'
import QuanLyDatVeReducer from './reducer/QuanLyDatVeReducer'
import QuanLyNguoiDungReducer from './reducer/UserReducer'
import {LoadingReducer} from './reducer/LoadingReducer'



const rootReducer = combineReducers({
QuanLyPhimReducer,
CarouselReducer,
QuanLyRapReducer,
QuanLyDatVeReducer,
QuanLyNguoiDungReducer,
LoadingReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store