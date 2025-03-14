import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogPost = () => {
    const router = useRouter();
    const [slug, setSlug] = useState("");

    useEffect(() => {
        if (router.isReady) {
            setSlug(router.query.slug);
        }
    }, [router.isReady, router.query.slug]);

    if (!slug) {
        return <p>Loading...</p>; // Hindari render undefined
    }

    return (
        <div> 
            <h1>Blog Post: {slug}</h1>
            <p>Ini adalah blog post dengan slug {slug}.</p>
        </div>
    );
};

export default BlogPost;