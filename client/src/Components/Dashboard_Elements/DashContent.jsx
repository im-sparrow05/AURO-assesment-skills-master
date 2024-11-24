import MyModal1 from "./AptiDialogbox"
import MyModal2 from "./CodingDialogbox"
import MyModal3 from "./InterviewDialogbox"

const DashContent = () => {
  return (
    <div>
      <section className="text-gray-200 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://t4.ftcdn.net/jpg/05/52/54/39/240_F_552543926_IQ534WiFahrnUWYIaEmWJg67jIoHMnpe.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-bold text-[#f1f3f2] mb-1">CATEGORY 1</h2>
            <h1 className="title-font text-lg font-medium text-[#00df9a] mb-3">Aptitude Test</h1>
            <p className="leading-relaxed mb-3">Unlock potential with our Aptitude Test Platform tailored assessments, user-friendly interface, and personalized experience for students, job seekers, and organizations.</p>
            <div className="flex items-center flex-wrap">
              <a href="#" className="text-[#00df9a] inline-flex items-center md:mb-2 lg:mb-0"><MyModal1 />
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://t3.ftcdn.net/jpg/01/69/35/78/240_F_169357891_XQ6ldtbmZPTusNiJhGfKZgc9VPmvDZ1b.jphttps://t4.ftcdn.net/jpg/04/43/70/93/240_F_443709362_wzOioYzGQF6wcJLpDjYmGpQvL5OzQitg.jphttps://t4.ftcdn.net/jpg/02/25/08/49/240_F_225084966_hhswkk9GgkAKcr2p1n69aaiI1jETbZO9.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-[#edefee] mb-1">CATEGORY 2</h2>
            <h1 className="title-font text-lg font-medium text-[#00df9a] mb-3">Coding Test</h1>
            <p className="leading-relaxed mb-3">Sharpen coding skills with our platform comprehensive tests, adaptive learning, and opportunities for students, job seekers, and organizations alike.</p>
            <div className="flex items-center flex-wrap">
              <a href="#" className="text-[#00df9a] inline-flex items-center md:mb-2 lg:mb-0"><MyModal2 />
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://t3.ftcdn.net/jpg/06/41/85/58/240_F_641855825_rjqxXUjgaAcMSFvpvSrqow0J3PHHDvCi.jpg" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">CATEGORY 3</h2>
            <h1 className="title-font text-lg font-medium text-[#00df9a] mb-3">Interview Test</h1>
            <p className="leading-relaxed mb-3">Prepare for AI interviews efficiently mock interviews, AI-driven feedback, and personalized insights for aspiring candidates and recruiters.</p>
            <div className="flex items-center flex-wrap">
              <a href="#" className="text-[#00df9a] inline-flex items-center md:mb-2 lg:mb-0"><MyModal3 />
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default DashContent
