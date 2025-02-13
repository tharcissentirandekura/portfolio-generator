
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

interface BlogPost {
    title: string;
    date: string;
    summary: string;
    content: string;
}

const Blog = () => {
    const { theme } = useContext(ThemeContext);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const blogPosts: BlogPost[] = [
        {
            title: "Getting Started with React",
            date: "2024-03-01",
            summary: "A beginner's guide to React development",
            content: "Full content here..."
        },
        {
            title: "Understanding TypeScript",
            date: "2024-03-15",
            summary: "Why TypeScript is essential for modern web development",
            content: "Full content here..."
        }
    ];

    return (
        <section className="mb-12">
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                    <div 
                        key={post.title} 
                        className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                        }`}
                        onClick={() => setSelectedPost(post)}
                    >
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                        <p className="text-gray-600">{post.summary}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
