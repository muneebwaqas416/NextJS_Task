'use client'
import { Suspense } from 'react';
import { AdminPostList } from '@/components/admin/AdminPostList';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <AdminPostList />
      </Suspense>
    </div>
  );
} 