import {
  SET_VALIDATORS,
  SET_VALIDATION_RESULTS,
  SET_FIELD_VALUE,
} from "../model/actionTypes";
import { CrunchFormReducer } from "../model/crunchForm";
import { setValue } from "../utils/deepValueManipulation";

const reducer: CrunchFormReducer = (state, action) => {
  switch (action.type) {
    case SET_VALIDATORS: {
      const validators = { ...state.validators };
      setValue(validators, action.payload!.field, action.payload!.validators);
      return {
        ...state,
        validators,
      };
    }
    case SET_VALIDATION_RESULTS: {
      const validationResults = { ...state.validationResults };
      setValue(
        validationResults,
        action.payload!.field,
        action.payload!.validationResults
      );
      return {
        ...state,
        validationResults,
      };
    }
    case SET_FIELD_VALUE: {
      const values = { ...state.values };
      setValue(values, action.payload!.field, action.payload!.value);

      return {
        ...state,
        values,
      };
    }
    default:
      return state;
  }
};

export default reducer;
