import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducers/reducers.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArr) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArr);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// thunk action
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
