import React, { useState, useEffect } from 'react';

function CreatePost() {
    const createPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'name',
                body: 'deepak',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                if (json?.id) {
                    alert("record has been created");
                }
            });
    };
    return (
        <div>
            <button onClick={createPost}>
                create post
            </button>
        </div>
    );
}
export default CreatePost;