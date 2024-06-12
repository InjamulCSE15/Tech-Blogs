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
                <a href='https://www.facebook.com/injamulcse15' target='_blank' className="flex items-center ">
                <span className='text-xs px-4 hidden md:inline-block'>InjamulCSE15</span>
                  <img
                    alt="Injamul Alam"
                    src={profile_Img}
                    className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                  />
                </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
