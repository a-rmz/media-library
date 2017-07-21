import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState, action) {
  switch (action.types) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...state, action.images];
    case types.SELECTED_IMAGE:
      return { ...state, selectedImage: action.image };
    default:
      return state;
  }
}
