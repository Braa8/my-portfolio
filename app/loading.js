'use client'
export default function Load () {
    return (
        <>
        <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin-slow"></div>
        <div className="absolute inset-3 rounded-full border-4 border-pink-500 border-t-transparent animate-spin-fast"></div>
        <div className="absolute inset-6 rounded-full bg-blue-500 animate-pulse"></div>
      </div>
    </div>
        </>
    );
}