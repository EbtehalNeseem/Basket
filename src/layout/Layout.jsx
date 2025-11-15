import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

<>
<ScrollToTop />
<Header  />
<main className="min-h-[60vh]">
    {children}
</main>
<Footer />
</>
