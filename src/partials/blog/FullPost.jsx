import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeHighlight from "rehype-highlight";

export default ({ post }) => {
    // remove carriage returns
    const cleaned = post.replace(/\r/g, '');

    const header = cleaned.split('\n')[0];
    let body = cleaned.split('\n').slice(1).join('\n');
    const preview = body.split('\n').slice(1)[0]

    body = body.split('\n').slice(2).join('\n')

    return (
        <div className="relative pt-32 pb-10">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 mb-4" data-aos="fade-up">
                    {header}
                </h1>
                <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
                    {preview}
                </p>
            </div>
            <div style={{padding:20, borderRadius: 5}} className="bg-gray-800 max-w-5xl mx-auto">
                <ReactMarkdown className='markdown' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{body}</ReactMarkdown>
            </div>
        </div>
    )
}