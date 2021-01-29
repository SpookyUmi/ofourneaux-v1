const initialState = {
  id: null,
  title: '',
  picture: '',
  description: '',
  type: '',
  difficulty: '',
  preparation_time: 0,
  baking_time: 0,
  nutri_score: '',
  date_creation: '',
  date_update: '',
  season: '',
  tags: [],
  steps: [],
  ingredients: [],
  picture_url: '',
  seasons: [],
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'RECIPE_REQUEST_SUCCESS':
      return {
        ...oldState,
        ...action.payload.recipe,
      }
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
