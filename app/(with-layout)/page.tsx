import Banner from "../COMPONENT/BANNER/Banner";
import BrowseByCategory from "../COMPONENT/FILTER/BrowseByCategory";
import PopularItemsAndSocial from "../COMPONENT/LAYOUTS/PopularItemsAndSocial";
import RecentBlogCards from "../COMPONENT/MAPPEDCARD/RecentBlogCards";


const Home = () => {
  return (
    
    <div>
      {/* grid layout */}
      <div className=' grid grid-cols-1 md:grid-cols-6 px-0.5'>
        {/* left side */}
        <div className='hidden md:col-span-1 md:block'></div>

        {/* 4 col main layout */}
        <div className='col-span-4 md:border-x-2 md:border-b-2 border-(--secondary-color) p-3 space-y-5 md:space-y-10'>
          <div>
            <Banner />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10'>
            <div className='col-span-2'>
              <RecentBlogCards />
            </div>
            <div className='justify-between grid grid-cols-2 gap-3.5 lg:block md:space-y-10'>
              <PopularItemsAndSocial />
            </div>
          </div>

          <div><BrowseByCategory /></div>
               
        </div>
        {/* right side */}
        <div className='hidden md:col-span-1 md:block'></div>
      </div>
    </div>
  );
};

export default Home;