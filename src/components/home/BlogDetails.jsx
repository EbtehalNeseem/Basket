import { Link, useLocation, useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const post = state?.post || null;   

  if (!post) {
    return (
      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4">
          <Link to="/blog" className="text-sm text-gray-500">
            ← Back to Blog
          </Link>
          <h1 className="text-2xl font-bold mt-6">Blog not found</h1>
          <p className="mt-3 text-gray-600 text-sm">
            افتح صفحة الـ Blog واضغط على &quot;Read More&quot; عشان تشوف تفاصيل
            المقال.
          </p>
        </div>
      </section>
    );
  }

  const image =
    post?.Image?.url ||
    post?.image ||
    "https://via.placeholder.com/800x450?text=Blog";

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <Link to="/blog" className="text-sm text-gray-500">
          ← Back to Blog
        </Link>

        <div className="grid gap-10 lg:grid-cols-[2.3fr,1fr] mt-6">
          {/* MAIN ARTICLE */}
          <article>
            <p className="uppercase text-[11px] tracking-[0.18em] text-gray-400 mb-2">
              {post.category || "GROCERY"}
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {post.title}
            </h1>

            <p className="text-xs md:text-[13px] text-gray-500 mb-4">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              • {post.author || "Anonymous"}
            </p>

            <div className="rounded-2xl overflow-hidden mb-6">
              <img
                src={image}
                alt={post.title}
                className="w-full h-[320px] md:h-[380px] object-cover"
              />
            </div>

            <div className="space-y-4 text-[14px] leading-relaxed text-gray-700">
              {(post.content || "")
                .split("\n")
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          </article>

         
          <aside className="space-y-6">
            <section className="bg-white rounded-2xl border p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                SOCIAL MEDIA
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between rounded-lg px-4 py-2 text-white text-sm bg-[#3b5998]">
                  <span>Facebook</span>
                  <span className="text-[11px] opacity-90">FOLLOW</span>
                </button>
                <button className="w-full flex items-center justify-between rounded-lg px-4 py-2 text-white text-sm bg-[#E1306C]">
                  <span>Instagram</span>
                  <span className="text-[11px] opacity-90">FOLLOW</span>
                </button>
                <button className="w-full flex items-center justify-between rounded-lg px-4 py-2 text-white text-sm bg-[#1DA1F2]">
                  <span>Twitter</span>
                  <span className="text-[11px] opacity-90">FOLLOW</span>
                </button>
              </div>
            </section>

            <section className="bg-white rounded-2xl border p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                WIDGET BANNER
              </h3>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80"
                  alt="Happy Hour"
                  className="w-full h-[260px] object-cover"
                />
              </div>
            </section>

            <section className="bg-white rounded-2xl border p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                TAGS
              </h3>
              <div className="flex flex-wrap gap-2">
                {["ecommerce", "food", "grocery", "organic", "shopify", "store"].map(
                  (tag) => (
                    <button
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded-full border text-gray-600 hover:border-emerald-400 hover:text-emerald-600"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}