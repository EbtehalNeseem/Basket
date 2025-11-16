
import img1 from "../assets/aeb9763b1145b3dd6e2fadd6c2b27941d3d7b0fa.png"
import { useEffect, useState } from "react";
import { api } from "../lib/api";

const ENDPOINT = "blog/get-all-blog";
const PAGE_SIZE = 2; 

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(ENDPOINT);
        const list = Array.isArray(data) ? data : data.data || data.blogs || [];
        setPosts(list);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;

  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const startIndex = (page - 1) * PAGE_SIZE;
  const currentPosts = posts.slice(startIndex, startIndex + PAGE_SIZE); 

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[2.3fr,1fr]">
          {/* LEFT: posts */}
          <div className="space-y-10">
            {currentPosts.map((post) => {
              const image =
                post?.Image?.url ||
                post?.image ||
                "https://via.placeholder.com/800x450?text=Blog";

              return (
                <article
                  key={post._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border"
                >
                  <div className="h-[320px] md:h-[380px] overflow-hidden">
                    <img
                      src={image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="px-6 py-5 md:px-8 md:py-6">
                    <p className="uppercase text-[11px] tracking-[0.18em] text-gray-400 mb-2">
                      {post.category || "GROCERY"}
                    </p>

                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h2>

                    <p className="text-xs md:text-[13px] text-gray-500 mb-4">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      • {post.author || "Anonymous"}
                    </p>

                    <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600">
                      {post.content}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* PAGINATION */}
            <div className="flex items-center justify-center gap-2 pt-4">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1;
                const isActive = pageNumber === page;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => {
                      setPage(pageNumber);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={
                      "w-9 h-9 rounded-full border text-sm font-medium " +
                      (isActive
                        ? "border-emerald-500 text-emerald-600"
                        : "border-gray-300 text-gray-500 hover:border-emerald-400 hover:text-emerald-500")
                    }
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
          </div>

     <aside className="space-y-6">

              <h3 className="text-sm font-semibold text-gray-800">
                Recent Posts
              </h3>
      <section className="bg-white rounded-2xl border p-5 flex flex-col shadow-sm gap-4">
        <div className="flex items-center gap-4 relative">
          <img src={posts[0]?.Image?.url} alt=""  className="w-16 h-16 rounded-full object-contain border relative"/>
          <span className=" absolute bg-[#35AFA0] rounded-full w-3 h-3 text-xs flex items-center justify-center text-white top-0 left-12">
            1
          </span>
          <h4 className="text-xs smfont-semibold text-gray-800">
            {posts[1]?.title}
            </h4>
        </div>
        <div className="flex items-center gap-2 relative">
          <img src={posts[1]?.Image?.url} alt=""  className="w-16 h-16 rounded-full object-contain border relative"/>
          <span className=" absolute bg-[#35AFA0] rounded-full w-3 h-3 text-xs flex items-center justify-center text-white top-0 left-12">
            1
          </span>
          <h4 className="text-xs smfont-semibold text-gray-800">
            {posts[1]?.title}
            </h4>
        </div>
        <div className="flex items-center gap-2 relative">
          <img src={posts[2]?.Image?.url} alt=""  className="w-16 h-16 rounded-full object-contain border relative"/>
          <span className=" absolute bg-[#35AFA0] rounded-full w-3 h-3 text-xs flex items-center justify-center text-white top-0 left-12">
            1
          </span>
          <h4 className="text-xs smfont-semibold text-gray-800">
            {posts[2]?.title}
            </h4>
        </div>
      </section>
            {/* SOCIAL MEDIA */}
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
                <button className="w-full flex items-center justify-between rounded-lg px-4 py-2 text-white text-sm bg-[#FF4500]">
                  <span>Linkedin</span>
                  <span className="text-[11px] opacity-90">FOLLOW</span>
                </button>
                <button className="w-full flex items-center justify-between rounded-lg px-4 py-2 text-white text-sm bg-[#E60023]">
                  <span>Pinterest</span>
                  <span className="text-[11px] opacity-90">FOLLOW</span>
                </button>
              </div>
            </section>

            {/* WIDGET BANNER */}
            <section className="bg-white rounded-2xl border p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                WIDGET BANNER
              </h3>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={img1}
                  alt="Happy Hour"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </section>

            {/* TAGS */}
            <section className="bg-white rounded-2xl border p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">TAGS</h3>
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