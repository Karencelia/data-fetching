import db from '@/lib/db';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">

          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Author</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
            </tr>
          </thead>

          
          <tbody>
            {db.posts.map((post) => (
              <tr
                key={post.id}
                className="even:bg-gray-50 hover:bg-blue-500 hover:text-white transition-colors group"
              >

                <td className="border border-gray-300 px-4 py-2 font-semibold group-hover:text-white">
                  {post.id}
                </td>


                <td className="border border-gray-300 px-4 py-2 group-hover:text-white">
                  {post.title}
                </td>


                <td className="border border-gray-300 px-4 py-2 text-gray-600 group-hover:text-gray-200">
                  {post.author}
                </td>


                <td className="border border-gray-300 px-4 py-2 text-gray-600 group-hover:text-gray-200">
                  {post.date}
                </td>


                <td className="border border-gray-300 px-4 py-2">
                  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full group-hover:bg-white group-hover:text-blue-500">
                    {post.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
