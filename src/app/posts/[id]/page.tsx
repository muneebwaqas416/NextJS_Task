'use client'
import { Suspense } from 'react';
import { PostDetail } from '@/components/posts/PostDetail';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { PostPageProps } from './types';

export default function PostPage({ params }: PostPageProps) {
  return (
    <div className="space-y-6">
      <Suspense fallback={<LoadingSpinner />}>
        <PostDetail id={parseInt(params.id, 10)} />
      </Suspense>
    </div>
  );
} 