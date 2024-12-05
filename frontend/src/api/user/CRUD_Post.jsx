// api_user_CRUD_Post.js
export const CRUD_Post = async (postData) => {
    const response = await fetch('http://localhost:8081/api/posts', {
        method: 'POST',
        body: postData
    });
    return response.json();
};

export const CRUD_Post_Upload = async (formData) => {
    const response = await fetch('http://localhost:8081/api/posts/upload', {
        method: 'POST',
        body: formData
    });
    return response.json();
};

export const CRUD_Post_By_Id = async (id) => {
    const response = await fetch(`http://localhost:8081/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
