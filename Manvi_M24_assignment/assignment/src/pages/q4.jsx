import React, { useState, useEffect } from 'react';

function UpdatePost() {
    const updatepost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
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
                    alert("record has been Updated");
                    console.log(json);
                    
                }
            });
    };
    return (
        <div>
            <button onClick={updatepost}>
                Update post
            </button>
        </div>
    );
}
export default UpdatePost;