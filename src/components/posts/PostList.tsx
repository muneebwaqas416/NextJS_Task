'use client';

import Link from 'next/link';
import { useGetPostsQuery } from '@/store/api/postsApi';
import { ErrorMessage } from '@/components/ui/ErrorMessage';

export function PostList() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage message="Failed to load posts" />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.id}`}
          className="block p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2 line-clamp-2 text-gray-800">
            {post.title}
          </h2>
          <p className="text-gray-600 line-clamp-3 text-gray-800">
            {post.body.replace(/<[^>]*>/g, '')}
          </p>
        </Link>
      ))}
    </div>
  );
} 