import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

export default ({post, postName}) => {
    // remove carriage returns
    const cleaned = post.replace(/\r/g, '');

    const header = cleaned.split('\n')[0];
    const body = cleaned.split('\n').slice(1).join('\n');

    // make a preview of the post
    const preview = body.split('\n').slice(1)[0]

    return (
        <div className="relative">
            <div style={{
                    padding: 20,
                    borderRadius: 5,
                    marginBottom: 20,
                }} className="bg-gray-800 max-w-5xl mx-auto">
                <h1 className="h4">{header}</h1>
                <ReactMarkdown className='markdown'>{preview}</ReactMarkdown>
                <Link className="text-gray-500" to={`/blog/${postName}`}>Read more...</Link>
            </div>
        </div>
    )
}