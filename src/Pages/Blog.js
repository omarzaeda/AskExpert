import React from "react";
import HeroSection from "../components/HeroSection";
import Blogs from "../components/Blog/Blogs";

const Blog = () => {
  return (
    <>
      <HeroSection
        desc="Blog"
        heading="Latest Blogs & News"
        classes="bg-bgBlog bg-no-repeat bg-cover bg-center"
        width="max-w-[530px]"
      />
      <Blogs />
    </>
  );
};

export default Blog;
