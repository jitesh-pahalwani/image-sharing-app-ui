export function getPosts(){
  return {
    type: 'GET_POSTS'
  }
}

export function getPostsSuccess(data){
  return {
    type: 'GET_POSTS_SUCCESS',
    data
  }
}

export function getPostsFailed(data){
  return {
    type: 'GET_POSTS_FAILED',
    data
  }
}
