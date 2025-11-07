import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function BlogArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      // Try fetching by slug first, then by ID
      let response = await fetch(`http://localhost:5000/api/blogs/slug/${id}`);
      
      if (!response.ok) {
        // If slug doesn't work, try ID
        response = await fetch(`http://localhost:5000/api/blogs/${id}`);
      }

      if (!response.ok) {
        throw new Error('Blog not found');
      }

      const result = await response.json();
      setArticle(result.data);
    } catch (error) {
      console.error('Error fetching article:', error);
      setArticle(null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <p className="text-dark-charcoal dark:text-creamy-white">Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navbar />
        <div className="flex flex-col justify-center items-center py-20">
          <p className="text-dark-charcoal dark:text-creamy-white mb-4">Article not found</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-64 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${article.featuredImage || 'https://via.placeholder.com/1200x600'}")` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-creamy-white dark:bg-light-taupe/20 rounded-xl shadow-lg p-8 md:p-12">
          <div className="mb-6">
            <div className="text-primary text-sm font-bold uppercase mb-4">{article.category}</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-charcoal dark:text-creamy-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-dark-charcoal/70 dark:text-creamy-white/70 text-sm">
              <span>{formatDate(article.createdAt)}</span>
              <span>•</span>
              <span>By {article.author}</span>
              {article.views > 0 && (
                <>
                  <span>•</span>
                  <span>{article.views} views</span>
                </>
              )}
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none text-dark-charcoal dark:text-creamy-white"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-8 border-t border-light-taupe/50 dark:border-creamy-white/20">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default BlogArticle;

