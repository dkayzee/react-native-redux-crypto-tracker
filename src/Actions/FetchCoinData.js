import axios from 'axios'
import { apiBaseURL } from '../Utils/Constants'
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from '../Utils/ActionTypes'

FetchCoinData = () => {
  return dispatch => {

    dispatch({ type: FETCHING_COIN_DATA })

    // return axios.get(`${apiBaseURL}/v1/cryptocurrency/listings/latest?limit=10&CMC_PRO_API_KEY=958b9dcf-e0e5-41a7-9c99-5a2e31565411`)
    return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
      })

  }
}

export default FetchCoinData
