'use client'
import { useGetPostByIdQuery } from '@/store/api/postsApi';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { PostDetailProps } from './types';

export function PostDetail({ id }: PostDetailProps) {
  const { data: post, error, isLoading } = useGetPostByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage message="Failed to load post" />;
  }

  if (!post) {
    return <ErrorMessage message="Post not found" />;
  }

  return (
    <article className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <div
        className="prose max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </article>
  );
} 