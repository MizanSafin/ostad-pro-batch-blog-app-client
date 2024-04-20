import React, { useEffect, useRef, useState } from "react"

function Tailwind() {
  let [count, setCount] = useState(0)
  const commentRef = useRef()
  const countRef = useRef()

  useEffect(() => {
    countRef.current.innerText = commentRef.current.maxLength
    setCount(commentRef.current.maxLength)
  }, [])

  const handleChange = (e) => {
    let inputLength = e.target.value.length
    if (inputLength > commentRef.current.maxLength) {
      return
    }
    setCount(commentRef.current.maxLength - inputLength)
  }
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

        <div className="line3 flex  flex-row max-w-[600px] w-full p-10 gap-5 md:gap-10 items-center">
          <div className="svg">
            <svg
              width="12"
              height="170"
              viewBox="0 0 14 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 1"
                className="svg"
                d="M5.97885 198.795L11.7524 193.022L5.97885 187.248L0.205345 193.022L5.97885 198.795ZM5.97885 0.205578L0.205345 5.97908L5.97885 11.7526L11.7524 5.97908L5.97885 0.205578ZM6.97885 193.022V190.561H4.97885V193.022H6.97885ZM6.97885 185.639L6.97885 180.716H4.97885L4.97885 185.639H6.97885ZM6.97885 175.794L6.97885 170.872H4.97885L4.97885 175.794H6.97885ZM6.97885 165.95L6.97885 161.028H4.97885L4.97885 165.95H6.97885ZM6.97885 156.106L6.97885 151.183H4.97885L4.97885 156.106H6.97885ZM6.97885 146.261V141.339H4.97885V146.261H6.97885ZM6.97885 136.417L6.97885 131.495H4.97885L4.97885 136.417H6.97885ZM6.97885 126.572V121.65H4.97885L4.97885 126.572H6.97885ZM6.97885 116.728L6.97885 111.806H4.97885L4.97885 116.728H6.97885ZM6.97885 106.884V101.962H4.97885V106.884H6.97885ZM6.97885 97.0394L6.97885 92.1172H4.97885L4.97885 97.0394H6.97885ZM6.97885 87.195L6.97885 82.2728H4.97885L4.97885 87.195H6.97885ZM6.97885 77.3506L6.97885 72.4285H4.97885L4.97885 77.3506H6.97885ZM6.97885 67.5063L6.97885 62.5841H4.97885L4.97885 67.5063H6.97885ZM6.97885 57.6619V52.7397H4.97885V57.6619H6.97885ZM6.97885 47.8175L6.97885 42.8954H4.97885L4.97885 47.8175H6.97885ZM6.97885 37.9732L6.97885 33.051H4.97885L4.97885 37.9732H6.97885ZM6.97885 28.1288L6.97885 23.2066H4.97885L4.97885 28.1288H6.97885ZM6.97885 18.2845L6.97885 13.3623H4.97885L4.97885 18.2845H6.97885ZM6.97885 8.4401V5.97908H4.97885L4.97885 8.4401H6.97885ZM5.97885 198.795L11.7524 193.022L5.97885 187.248L0.205345 193.022L5.97885 198.795ZM5.97885 0.205578L0.205345 5.97908L5.97885 11.7526L11.7524 5.97908L5.97885 0.205578ZM6.97885 193.022V190.561H4.97885V193.022H6.97885ZM6.97885 185.639L6.97885 180.716H4.97885L4.97885 185.639H6.97885ZM6.97885 175.794L6.97885 170.872H4.97885L4.97885 175.794H6.97885ZM6.97885 165.95L6.97885 161.028H4.97885L4.97885 165.95H6.97885ZM6.97885 156.106L6.97885 151.183H4.97885L4.97885 156.106H6.97885ZM6.97885 146.261V141.339H4.97885V146.261H6.97885ZM6.97885 136.417L6.97885 131.495H4.97885L4.97885 136.417H6.97885ZM6.97885 126.572V121.65H4.97885L4.97885 126.572H6.97885ZM6.97885 116.728L6.97885 111.806H4.97885L4.97885 116.728H6.97885ZM6.97885 106.884V101.962H4.97885V106.884H6.97885ZM6.97885 97.0394L6.97885 92.1172H4.97885L4.97885 97.0394H6.97885ZM6.97885 87.195L6.97885 82.2728H4.97885L4.97885 87.195H6.97885ZM6.97885 77.3506L6.97885 72.4285H4.97885L4.97885 77.3506H6.97885ZM6.97885 67.5063L6.97885 62.5841H4.97885L4.97885 67.5063H6.97885ZM6.97885 57.6619V52.7397H4.97885V57.6619H6.97885ZM6.97885 47.8175L6.97885 42.8954H4.97885L4.97885 47.8175H6.97885ZM6.97885 37.9732L6.97885 33.051H4.97885L4.97885 37.9732H6.97885ZM6.97885 28.1288L6.97885 23.2066H4.97885L4.97885 28.1288H6.97885ZM6.97885 18.2845L6.97885 13.3623H4.97885L4.97885 18.2845H6.97885ZM6.97885 8.4401V5.97908H4.97885L4.97885 8.4401H6.97885Z"
                fill="#11ff57"
              />
            </svg>
          </div>
          <div className="content">
            <p className="dark:text-slate-300 text-slate-500 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Officiis, ex facilis. Sit mollitia vitae veritatis culpa nesciunt
              quam amet veniam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat porro maiores repellat perferendis,
              cumque sunt doloribus laboriosam fugit libero nihil error dolor
              minus optio veritatis dolore, eligendi dicta nam dolorem?
            </p>
          </div>
        </div>
      </div>
      <div className="area mx-auto max-w-[600px] py-10 px-10">
        <label htmlFor="comment">Comment</label>
        <textarea
          ref={commentRef}
          className="w-full dark:text-slate-600"
          placeholder="Add a comment"
          name="comment"
          id="comment"
          onChange={handleChange}
          rows="5"
          maxLength="120"
        ></textarea>
        <div className="letter flex text-xs justify-between">
          <span>Remaining Letter : {count}</span>
          <span className="text-xs flex flex-nowrap justify-center items-center">
            Max Length : <h2 ref={countRef}></h2>{" "}
          </span>
        </div>

        <div className="heroArea flex my-20 gap-5 items-center flex-col md:flex-row">
          <svg
            className=" md:h-[120px] md-w-[30px] w-0 h-0 md:block hidden "
            // width="30"
            // height="160"
            viewBox="0 0 20 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Arrow 1" filter="url(#filter0_dd_2_12)">
              <path
                d="M9.97885 198.795L15.7524 193.022L9.97885 187.248L4.20534 193.022L9.97885 198.795ZM9.97885 0.205578L4.20534 5.97908L9.97885 11.7526L15.7524 5.97908L9.97885 0.205578ZM10.9788 193.022V191.151H8.97885V193.022H10.9788ZM10.9788 183.67L10.9788 172.447H8.97885L8.97885 183.67H10.9788ZM10.9788 157.484V153.743H8.97885V157.484H10.9788ZM10.9788 146.261L10.9788 135.039H8.97885L8.97885 146.261H10.9788ZM10.9788 120.075V116.334H8.97885V120.075H10.9788ZM10.9788 108.853L10.9788 97.63H8.97885L8.97885 108.853H10.9788ZM10.9788 82.6666V78.9258H8.97885V82.6666H10.9788ZM10.9788 71.444L10.9788 60.2215H8.97885L8.97885 71.444H10.9788ZM10.9788 45.2581V41.5172H8.97885V45.2581H10.9788ZM10.9788 34.0355L10.9788 22.8129H8.97885L8.97885 34.0355H10.9788ZM10.9788 7.84951V5.97908H8.97885V7.84951H10.9788ZM9.97885 198.795L15.7524 193.022L9.97885 187.248L4.20534 193.022L9.97885 198.795ZM9.97885 0.205578L4.20534 5.97908L9.97885 11.7526L15.7524 5.97908L9.97885 0.205578ZM10.9788 193.022V191.151H8.97885V193.022H10.9788ZM10.9788 183.67L10.9788 172.447H8.97885L8.97885 183.67H10.9788ZM10.9788 157.484V153.743H8.97885V157.484H10.9788ZM10.9788 146.261L10.9788 135.039H8.97885L8.97885 146.261H10.9788ZM10.9788 120.075V116.334H8.97885V120.075H10.9788ZM10.9788 108.853L10.9788 97.63H8.97885L8.97885 108.853H10.9788ZM10.9788 82.6666V78.9258H8.97885V82.6666H10.9788ZM10.9788 71.444L10.9788 60.2215H8.97885L8.97885 71.444H10.9788ZM10.9788 45.2581V41.5172H8.97885V45.2581H10.9788ZM10.9788 34.0355L10.9788 22.8129H8.97885L8.97885 34.0355H10.9788ZM10.9788 7.84951V5.97908H8.97885V7.84951H10.9788Z"
                fill="#31D937"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_2_12"
                x="0.205345"
                y="0.205566"
                width="19.547"
                height="206.59"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_12"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_2_12"
                  result="effect2_dropShadow_2_12"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_2_12"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width="208"
            height="21"
            viewBox="0 0 208 21"
            fill="none"
            className=" "
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Arrow 1" filter="url(#filter0_dd_2_12)">
              <path
                d="M4.68402 6.50043L10.4575 12.2739L16.231 6.50043L10.4575 0.726925L4.68402 6.50043ZM203.274 6.50043L197.5 0.726925L191.727 6.50043L197.5 12.2739L203.274 6.50043ZM10.4575 7.50043H12.3279V5.50043H10.4575V7.50043ZM19.8097 7.50043H31.0322V5.50043H19.8097V7.50043ZM45.9956 7.50043H49.7365V5.50043H45.9956V7.50043ZM57.2182 7.50043H68.4408V5.50043H57.2182V7.50043ZM83.4042 7.50043H87.1451V5.50043H83.4042V7.50043ZM94.6268 7.50043H105.849V5.50043H94.6268V7.50043ZM120.813 7.50043H124.554V5.50043H120.813V7.50043ZM132.035 7.50043H143.258V5.50043H132.035V7.50043ZM158.221 7.50043H161.962V5.50043H158.221V7.50043ZM169.444 7.50043H180.666V5.50043H169.444V7.50043ZM195.63 7.50043H197.5V5.50043H195.63V7.50043ZM4.68402 6.50043L10.4575 12.2739L16.231 6.50043L10.4575 0.726925L4.68402 6.50043ZM203.274 6.50043L197.5 0.726925L191.727 6.50043L197.5 12.2739L203.274 6.50043ZM10.4575 7.50043H12.3279V5.50043H10.4575V7.50043ZM19.8097 7.50043H31.0322V5.50043H19.8097V7.50043ZM45.9956 7.50043H49.7365V5.50043H45.9956V7.50043ZM57.2182 7.50043H68.4408V5.50043H57.2182V7.50043ZM83.4042 7.50043H87.1451V5.50043H83.4042V7.50043ZM94.6268 7.50043H105.849V5.50043H94.6268V7.50043ZM120.813 7.50043H124.554V5.50043H120.813V7.50043ZM132.035 7.50043H143.258V5.50043H132.035V7.50043ZM158.221 7.50043H161.962V5.50043H158.221V7.50043ZM169.444 7.50043H180.666V5.50043H169.444V7.50043ZM195.63 7.50043H197.5V5.50043H195.63V7.50043Z"
                fill="#31D937"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_2_12"
                x="0.684021"
                y="0.726929"
                width="206.59"
                height="19.547"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_12"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_2_12"
                  result="effect2_dropShadow_2_12"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_2_12"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <p className="  text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            asperiores explicabo voluptate libero aliquid perferendis! Unde
            eligendi iusto ex autem accusantium consectetur, modi illo iste
            officia aut consequatur culpa velit harum repellendus voluptate
            voluptatem similique. Ipsa, quas! Quisquam, aliquam in.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tailwind
