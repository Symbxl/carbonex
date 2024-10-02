import CollapseDefault from "./Collapse"
const CTA = () => {
  return (
    <section className="bg-base-100">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-black">Why choose <span className="font-extrabold">CARBONEX Contractors?</span></h2>
          <p className="mb-4 font-light">When you think safety, quality, trust and differentiation, you think Carbonex.
          </p>
          <p className="mb-4 font-medium">Since our inception in 2014, Carbonex has been developing solutions that have our identity built into our projects. As a leading integrated construction and maintenance contractor, our talented and experienced workforce is what makes Carbonex a repeat contractor. No matter your project’s size or scope, we deliver superior construction and execution from the first to the last day of each project. In everything we do, we create value and are always focused on the quality of the final product.</p>
          <CollapseDefault />
        </div>
      </div>
    </section>

  );
};

export default CTA;
