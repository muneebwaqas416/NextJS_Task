'use client';

import { useState } from 'react';
import { useCreatePostMutation, useUpdatePostMutation } from '@/store/api/postsApi';
import { RichTextEditor } from '@/components/editor/RichTextEditor';
import { PostFormProps } from './types';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, ToastPosition, toast } from 'react-toastify';

export function PostForm({ post, onClose }: PostFormProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.body || '');
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const toastConfig = {
    position: "top-right" as ToastPosition,
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  }
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (post) {
        await updatePost({
          id: post.id,
          title,
          body: content,
          userId: post.userId,
        }).unwrap();
        toast.success('Post updated successfully', toastConfig);
      } else {
        await createPost({
          title,
          body: content,
          userId: 1, // Assuming all posts belong to user 1
        }).unwrap();
      }
      toast.success('Post saved successfully',toastConfig );
    } catch (error) {
      console.error('Failed to save post:', error);
      toast.error('Failed to save post',toastConfig);
    } finally {
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {post ? 'Edit Post' : 'Create New Post'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-4 text-gray-800 block w-full rounded-md border-1 border-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <div className="mt-1">
              <RichTextEditor content={content} onChange={setContent} />
            </div>
          </div>
          <div className="flex justify-end space-x-3 gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              {post ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 