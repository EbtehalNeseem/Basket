import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Link } from "react-router-dom";

const ENDPOINT = "/blog/get-all-blog";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(ENDPOINT);

        const list = Array.isArray(data) ? data : data.data || data.blogs || [];
        setPosts(list.slice(0, 3));
      } catch (err) {
        console.error("fetch blog error:", err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const skeleton = Array.from({ length: 3 }).map((_, i) => (
    <div
      key={i}
      className="rounded-2xl overflow-hidden bg-gray-100 animate-pulse h-[260px]"
    />
  ));

  return (
    <section className="mx-auto max-w-[1200px] px-4 mt-10">
      {/* Header */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            FROM Our Blog
          </h2>
          <p className="text-[12px] md:text-[13px] text-gray-500 mt-1">
            Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.
          </p>
        </div>

            <Link to="/blog" className="text-[12px] border rounded-full px-3 py-2 hover:bg-gray-100 md:text-[13px] text-gray-500">
          View All
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading
          ? skeleton
          : posts.map((p) => (
              <article
                key={p._id}
                className="rounded-xl border overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 bg-white"
              >
                <div className="h-[180px] overflow-hidden">
                  <img
                    src={
                      p?.Image?.url ||
                      p?.image ||
                      p?.thumbnail ||
                      "https://via.placeholder.com/240x240?text=Product"
                    }
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>

                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {new Date(p.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    - {p.author || "Admin"}
                  </div>
                  <h4 className="text-[15px] font-semibold text-gray-800 line-clamp-2">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-sm text-gray-500 line-clamp-3">
                    {p.content || ""}
                  </p>
                    <Link to={`/blog/${p._id}`} state={{post: p}} className="text-[12px] border rounded-full px-3 py-3 inline-block hover:bg-gray-100 md:text-[13px] text-gray-500 mt-3">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
}
