
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../partials/Header.jsx';
import PageIllustration from '../partials/PageIllustration.jsx';
import Footer from '../partials/Footer.jsx';
import FullPost from '../partials/blog/FullPost.jsx';

export default () => {
    const {id} = useParams();
    const [post, setPost] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            let post = await fetch(`/posts/${id}.md`);
            post = await post.text();
            setPost(post)
        };

        fetchMarkdown();
    })

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />

            {/*  Page illustration */}
            <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                <PageIllustration />
                {}
            </div>

            {/*  Page content */}
            <main className="grow">
                <FullPost post={post} />
            </main>

            {/*  Site footer */}
            <Footer />
        </div>
    );
}