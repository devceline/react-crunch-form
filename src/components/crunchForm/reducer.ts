import {
  SET_VALIDATORS,
  SET_VALIDATION_RESULTS,
  SET_FIELD_VALUE,
} from "../model/actionTypes";
import { CrunchFormReducer } from "../model/crunchForm";

const reducer: CrunchFormReducer = (state, action) => {
  switch (action.type) {
    case SET_VALIDATORS: {
      return state;
    }
    case SET_VALIDATION_RESULTS: {
      const copy = {
        ...state,
        values: {
          ...state.values,
        },
      };
      copy.validationResults[action.payload!.field];
      return copy;
    }
    case SET_FIELD_VALUE: {
      const copy = {
        ...state,
        values: {
          ...state.values,
        },
      };
      copy.values[action.payload!.field] = action.payload!.value;
      return copy;
    }
    default:
      return state;
  }
};

export default reducer;
