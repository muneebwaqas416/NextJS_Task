'use client'
import { Suspense } from 'react';
import { PostDetail } from '@/components/posts/PostDetail';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { PostPageProps } from './types';

export default async function PostPage(props : PostPageProps) {
  const { slug } = await props.params;
  const id = slug[1];

  return (
    <div className="space-y-6">
      <Suspense fallback={<LoadingSpinner />}>
        <PostDetail id={parseInt(id, 10)} />
      </Suspense>
    </div>
  );
}
