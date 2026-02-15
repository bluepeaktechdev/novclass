import React from "react";

const Impact = () => {
  return (
    <section className="pt-24 pb-0 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.25em] text-sm text-gray-600 mb-6">
          Our Impact
        </p>

        <div className="grid md:grid-cols-12 gap-16 items-start mb-20">
          <h2 className="md:col-span-7 text-[#2c3a04] text-5xl font-semibold leading-tight">
            The impact we have made in our community
          </h2>

          <p className="md:col-span-5 text-lg text-gray-600 leading-relaxed">
            We have made a significant impact in our community through our
            non-profit organization. By providing services and support to those
            in need, we have created a positive change. Our efforts have helped
            to improve the lives of many and we are committed to continuing to
            make a difference.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="py-10 text-center">
            <p className="text-5xl font-bold text-[#2c3a04]">20M+</p>
            <p className="text-gray-600 mt-3">People served worldwide</p>
          </div>

          <div className="py-10 text-center">
            <p className="text-5xl font-bold text-[#2c3a04]">142,790</p>
            <p className="text-gray-600 mt-3">Projects funded</p>
          </div>

          <div className="py-10 text-center">
            <p className="text-5xl font-bold text-[#2c3a04]">1.8M</p>
            <p className="text-gray-600 mt-3">People to take action</p>
          </div>

          <div className="py-10 text-center">
            <p className="text-5xl font-bold text-[#2c3a04]">5,246</p>
            <p className="text-gray-600 mt-3">Partner organizations</p>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="max-w-6xl mx-auto relative mt-15">
        <div className="bg-[#66b40b] text-white rounded-3xl px-12 py-14 flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight mb-4">
              We can create a better tomorrow
            </h2>

            <p className="text-lg text-white/90">
              Every dollar counts and helps us bring hope and essential resources to those in need.
            </p>
          </div>

          <button className="bg-white text-[#1f2b05] font-semibold px-8 py-4 rounded-xl transition hover:bg-[#2C3A04] hover:text-white">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;
