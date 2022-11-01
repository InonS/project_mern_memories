import * as api from '../api'; // actions use API, like this: api.fetchPosts()

/**
 * Action Creators (create actions)
 * Asynchronous logic (with redux-thunk) uses dispatch
 * @returns getPosts action
 */
export const getPosts = () => async (dispatch) => {
    try {
        const response = await api.fetchPosts();
        const fetchedPosts = response.data

        const getPostsAction = { type: 'FETCH_ALL', payload: fetchedPosts } // 'type' property is mandatory, payload will be our Posts
        dispatch(getPostsAction);
    } catch (error) {
        console.log(error.message);
    }
}