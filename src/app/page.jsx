import db from '@/lib/db';

export default async function Home() {
  // const data = await fetch('https://api.vercel.app/blog')
  const posts = db.posts
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {db.posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-[5px] p-4 border border-gray-200 hover:bg-blue-500 hover:text-white">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm mt-1">By {post.author} | {post.date}</p>
            <p className="text-gray-700 mt-2 line-clamp-3">{post.content}</p>
            <span className="inline-block mt-3 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
              {post.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}