export const fetchPostData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

export const addNewPostCall = async (item) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        { 
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}
