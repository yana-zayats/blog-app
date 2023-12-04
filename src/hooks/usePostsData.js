import { useEffect, useState } from 'react';
import http from '../lib/http'
import { POSTS_API } from '../constants';

const usePostsData = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    const [postID, setPostID] = useState(null);

    const fetchPosts = async () => {
        try {
            const { data } = await http.get(POSTS_API);
            setPosts(data);
        } catch (err) {
            setPosts([]);
            console.log(err.message);
        }
    };
    
    const fetchPost = async () => {
        try {
            const { data } = await http.get(`${POSTS_API}/${postID}`);
            setPost(data);
        } catch (err) {
            setPost(null);
            console.log(err.message);
        }
    };

    const handleSelectPost = (id) => {
        setPostID(id);
    };

    const handleGoBack = () => {
        setPostID(null);
        setPost(null);
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    useEffect(() => {
        postID && fetchPost();
    }, [postID])

    return {
        posts,
        handleSelectPost,
        post,
        handleGoBack,
    };
};

export { usePostsData };