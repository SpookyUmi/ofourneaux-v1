const initialState = {
  id: null,
  title: '',
  picture: '',
  description: '',
  type: '',
  difficulty: '',
  preparation_time: null,
  baking_time: null,
  nutri_score: '',
  date_creation: '',
  date_update: '',
  season: '',
  tags: [],
  instructions: [],
  ingredients: [],
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...oldState,
      };
  }
};

export default reducer;
