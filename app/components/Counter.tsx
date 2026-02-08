'use client';
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Client Component で実行されました!");
  return (
    <div className="flex flex-col items-center mt-8">
        <h2 className="text-2xl mb-4">Counter Component</h2>
        <p className="text-lg mb-4">Current Count: {count}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
          >
            Increment
        </button>
    </div>
  );
}