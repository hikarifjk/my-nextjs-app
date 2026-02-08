export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
            <p className="ml-4 text-2xl text-gray-700">データ読み込み中...</p>
        </div>
    );
}