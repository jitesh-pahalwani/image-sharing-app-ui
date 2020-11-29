const initialState = {
  loading: true,
  allPosts: [],
};

export default function homeScreenReducer ( state = initialState, action ){
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        loading: true,
      };
      break;
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        allPosts: action.data
      };
      break;
    case 'GET_POSTS_FAILED':
      return {
        ...state,
        loading: false,
      };
      break;
    default:
      return initialState;
      break;

  }
}
