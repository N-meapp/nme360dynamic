import { useContext } from "react";
import { ScrollContext } from "../main";
import BlogCard from "../Components/Cards/BlogCard";

export default function Blogs() {

     const { scrollHeight, setScrollHeight } = useContext(ScrollContext);
                const translateY = scrollHeight * 0.09; // Move slower than scroll
                const translateX = scrollHeight * 0.08;
                const translateY3 = scrollHeight * 0.03;

  return (
    <>
    <div className="w-full h-auto pt-28 md:pt-20 bg-white md:pb-20 jamjuree">
    <div
          className="text-center md:py-12 px-12 pb-0"
          style={{
            transform: `translateY(${-translateY}px)`,
            transition: "transform 0.05s linear ease",
          }}
        >
          <p className="text-black text-[24px]">
            Our Blogs:
            <a className="text-[#3A329D]" href="#">
              The What
            </a>
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold text-black md:mt-8 mt-4 mb-4 md:mb-8">
            Exploring the digital frontier
          </h2>
          <p className="text-black max-w-[901px] mx-auto">
            Dive into insightful articles and expert perspectives as N-me 360
            unpacks the latest trends, innovations, and breakthroughs in the
            world of technology.
          </p>
        </div>
        <div className="h-[35rem] w-[90%] md:max-w-[901px] mt-14 rounded-2xl mx-auto relative ">
        <img src="/public/assets/Images/blogs/seo.jpg" className="w-full h-full object-cover object-center rounded-2xl"></img>
        <div className="w-fit absolute h-fit bottom-6 left-6">
        <p class="text-sm text-white">February 8, 2025</p>
            <h3 class="text-lg font-bold text-white">The Importance of SEO: How to Rank Higher on Google / Digital marketing services </h3>
            <button className="border-white border-[1px] px-3 py-2 rounded-full text-white w-fit mt-4">Read more</button>
        </div>
        </div>

        <div className="w-[90%] md:max-w-[901px] mx-auto relative overflow-x-auto mt-8 pb-10 scrollbar-hide">
  <div className="w-max flex gap-4">
    {[3, 5, 5, 5, 5].map((_, idx) => (
      <BlogCard key={idx} />
    ))}
  </div>
</div>

      </div>
    </>
  );
}
