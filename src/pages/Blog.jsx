import React, {useEffect, useState} from 'react';

import Header from '../partials/Header.jsx';
import PageIllustration from '../partials/PageIllustration.jsx';
import Banner from '../partials/blog/Banner.jsx'
import BlogPostPreview from '../partials/blog/BlogPostPreview.jsx'
import Footer from '../partials/Footer.jsx';

export default () => {
    const [posts, setPosts] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchMarkdowns = async () => {
            let files = await fetch('posts.json');
            files = await files.json();
            setFiles([...files])

            let posts = []
            for (let i = 0; i < files.length; i++) {
                let postFile = await fetch(`/posts/${files[i]}.md`);
                postFile = await postFile.text();
                posts.push(postFile)
            }
            setPosts([...posts])
        };
    
        fetchMarkdowns();
      }, []);
    

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
                {/*  Page sections */}
                <Banner />
                {posts.map((post, i) => (
                    <BlogPostPreview key={`posts-${files[i]}`} post={post} postName={files[i]} />
                ))}
            </main>

            {/*  Site footer */}
            <Footer />
        </div>
    )
}