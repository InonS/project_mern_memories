// a reducer is a function that accepts the state and the action, and based on action returns the state changed by the action

const initial_state_of_posts = []
const postsReducer = (posts_state = initial_state_of_posts, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts_state;
        case 'CREATE':
            return posts_state;
        default:
            return posts_state;
    }
}
export default postsReducer;