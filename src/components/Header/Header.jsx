import profile_Img from '../../../public/assets/avatar/avatar-1.jpg'
export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  border-gray-100 border-b-2 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-indigo-600 font-bold text-2xl" href="#">
              <span className="sr-only">Home</span>
              Tech-Blogs
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <img
                    alt="Injamul Alam"
                    src={profile_Img}
                    className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
