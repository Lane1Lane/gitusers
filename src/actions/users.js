export const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});

export const startSetUsers = () => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", 'https://api.github.com/users', true);
            xhr.responseType = 'json';
            xhr.onload = () => {dispatch(setUsers(xhr.response)); resolve()}
            xhr.send();
        });
    };
};
