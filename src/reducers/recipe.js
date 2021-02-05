const initialState = {
  id: null,
  title: '',
  picture_url: '',
  description: '',
  type: '',
  difficulty_id: 0,
  preparation_time: 0,
  baking_time: 0,
  nutri_score: '',
  date_creation: '',
  date_update: '',
  tags: [],
  steps: [],
  ingredients: [],
  seasons: [],
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'RECIPE_REQUEST_SUCCESS':
      return {
        ...oldState,
        ...action.payload.recipe,
      };
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
