import db from '@/lib/db';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              {Object.keys(db.posts[0] || {}).map((header) => (
                <th key={header} className="border px-2 md:px-4 py-2 text-left uppercase">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {db.posts.map((post) => (
              <tr key={post.id} className="odd:bg-gray-200 even:bg-white">
                {Object.values(post).map((value, idx) => (
                  <td key={idx} className="border px-2 md:px-4 py-2 text-black break-words max-w-xs md:max-w-none">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   </div>
  );
}