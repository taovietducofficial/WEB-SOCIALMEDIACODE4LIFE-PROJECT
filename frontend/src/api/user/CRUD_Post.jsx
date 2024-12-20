export const CRUD_Post = async (postData) => {
    const response = await fetch('http://localhost:8081/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData) // Chuyển postData thành JSON
    });

    if (!response.ok) {
        // Xử lý lỗi nếu phản hồi không thành công
        throw new Error('Failed to create post');
    }

    return response.json();
};
