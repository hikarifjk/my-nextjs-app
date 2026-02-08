'use client'

import { useEffect } from 'react';

export default function Error({
    error,
    //reset,
}: {
    error: Error & { digest?: string }
    // reset: () => void
}) {
  useEffect(() => {
    console.error('Error component caught an error:', error);
  }, [error]); 
return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-4 text-red-600">Something went wrong!</h2>
      <p className='text-lg mg-6 text-gray-700'>エラーメッセージ: {error.message}</p>
      <p className='mg-4 text-sm text-gray-500'>
        このエラーが続く場合は、管理者にお知らせください。
      </p>
    </div>
  );
}