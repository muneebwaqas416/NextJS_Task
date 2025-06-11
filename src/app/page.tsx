import { Suspense } from 'react';
import { PostList } from '@/components/posts/PostList';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Latest Posts</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <PostList />
      </Suspense>
    </div>
  );
} 