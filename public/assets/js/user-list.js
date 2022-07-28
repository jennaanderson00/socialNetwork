const getUserList = () => {
    fetch('/api/users')
        .then(response => response.json())
        .then(userListArr => {
            userListArr.forEach(printUser);
        })
        .catch(err => {
            console.log(err);
        });
};

getUserList();