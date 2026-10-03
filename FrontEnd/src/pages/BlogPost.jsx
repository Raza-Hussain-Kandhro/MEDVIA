import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { API_NAME } from '../constant';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [secondDescription, setSecondDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        blog_title: title || '',
        tag: tag || '',
        blog_img: imageURL || '',
        description: description || '',
        second_description: secondDescription || '',
      };

      console.log('📦 Sending JSON payload:', payload);

      await axios.post(`${API_NAME}/api/add_blog`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert('✅ Blog posted successfully!');
      setTitle('');
      setTag('');
      setImageURL('');
      setDescription('');
      setSecondDescription('');
    } catch (err) {
      console.error('❌ Blog post error:', err.response?.data || err.message);
      alert('❌ Error posting blog.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Blog – Biova Surgicals</title>
      </Helmet>

      <section className="py-16 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 playfair">Write a New Blog</h1>

          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Blog Title"
              className="w-full px-4 py-2 border rounded-md"
            />

            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
              placeholder="Tag"
              className="w-full px-4 py-2 border rounded-md"
            />

            <input
              type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
              placeholder="Image URL (hosted)"
              className="w-full px-4 py-2 border rounded-md"
            />

            {imageURL && (
              <img
                src={imageURL}
                alt="Preview"
                className="mt-4 h-48 rounded shadow object-cover"
              />
            )}

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Blog Description"
              rows={8}
              required
              className="w-full px-4 py-3 border rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <textarea
              value={secondDescription}
              onChange={(e) => setSecondDescription(e.target.value)}
              placeholder="Second Description (optional)"
              rows={6}
              className="w-full px-4 py-3 border rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 text-white font-semibold py-3 rounded-md hover:bg-teal-700 transition"
            >
              {loading ? 'Posting...' : 'Post Blog'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateBlog;
