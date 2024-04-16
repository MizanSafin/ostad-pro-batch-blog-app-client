import React from "react";

function Tailwind() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto max-w-[600px] py-10">
        <h2 className="text-2xl font-medium font-[cursive]  text-center mt-10 pb-5 max-w-xl mx-auto">
          This Page is solely made for practice purposes only
        </h2>
        <div className="box m-10">
          <div className="design p-0 border-l-[7px] border-l-lime-600 max-w-[500px] mx-auto  flex justify-center flex-col items-center rounded-sm ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mern-blog-5a0ff.appspot.com/o/1711986098937IMG_20231230_182106.jpg?alt=media&token=337e4f37-cdf2-4741-8446-4cff10a9cb72"
              alt=""
              className="w-11/12 ps-3 h-[360px] object-cover rounded-md dark:mix-blend-screen dark:hover:mix-blend-lighten opacity-70 hover:opacity-100 transition-opacity"
            />
            <p className="w-11/12 mt-5 text-justify font-[mv boli]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias fugiat doloribus ut eligendi enim ipsa eveniet deleniti
              molestiae ipsam repudiandae quisquam, amet provident, laudantium
              totam cumque distinctio ullam, numquam fuga?
            </p>
          </div>
        </div>
        <div className="mt-10 mx-auto w-10/12 ps-8 border-s-[7px] rounded-sm border-lime-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          voluptatibus soluta! Magnam eum praesentium, rerum eligendi dolorem
          officiis sint maxime quibusdam provident, commodi, laboriosam sequi
          quos at fugiat minus consectetur!
        </div>
      </div>
    </div>
  );
}

export default Tailwind;
