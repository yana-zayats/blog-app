import { useCallback, useEffect, useState } from 'react';
import http from '../lib/http'
import { POSTS_API } from '../constants';
import { Offcanvas } from 'bootstrap';

const usePostsData = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    const [postID, setPostID] = useState(null);
    const [bsOffcanvas, setBsOffcanvas] = useState(null);

    const fetchPosts = useCallback(async () => {
        try {
            const { data } = await http.get(POSTS_API);
            setPosts(data);
        } catch (err) {
            setPosts([]);
            console.log(err.message);
        }
    }, []);
    
    const fetchPost = useCallback(async () => {
        try {
            const { data } = await http.get(`${POSTS_API}/${postID}`);
            setPost(data);
        } catch (err) {
            setPost(null);
            console.log(err.message);
        }
    }, [postID]);

    const handleDeletePost = async () => {
        try {
            await http.delete(`${POSTS_API}/${postID}`)
            handleGoBack();
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleToggleOffcanvas = () => {
        bsOffcanvas.toggle();
    };

    const handleCloseModalAndUpdate = () => {
        bsOffcanvas.toggle();
        fetchPost();
        fetchPosts();
    };

    const handleSelectPost = (id) => {
        setPostID(id);
    };

    const handleGoBack = () => {
        setPostID(null);
        setPost(null);
        fetchPosts();
    };

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts])

    useEffect(() => {
        postID && fetchPost();
    }, [postID, fetchPost])

    useEffect(() => {
        setBsOffcanvas(new Offcanvas('#offcanvasNavbar'));
    }, [])

    return {
        posts,
        handleSelectPost,
        post,
        handleGoBack,
        handleDeletePost,
        handleToggleOffcanvas,
        handleCloseModalAndUpdate,
    };
};

export { usePostsData };