import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-400 mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

