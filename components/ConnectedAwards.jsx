import Image from 'next/image';
import Link from 'next/link';
import image from '../public/images2.png';
import i11 from '../public/images4.png';
import i12 from '../public/images5.png';
import i21 from '../public/images6.png';
import i22 from '../public/techTrendAward.png';

const images = [i11, i12];
const images2 =[i21, i22];


const ConnectedAwards = () => {
  
  
    return (
        <div className="flex flex-col gap-8 text-[#0c0114]">
        <div className="grid grid-cols-1 lg:grid-cols-2" data-aos="slide-right">
              <div className="w-full h-auto block lg:p-12 p-6"><Image src={image} layout="responsive"/></div>
              <div className="w-full lg:p-12 p-6 flex flex-col gap-6 lg:pr-0 pr-0">
                <span className="flex flex-col gap-4">
                    <h1 className="text-xl lg:text-4xl font-bold">The Connected Awards</h1>
                    <div className="w-24 h-1 bg-[#FA9706] rounded-full ml-1"></div>
                </span>
                <p className="leading-6 font-semibold text-base lg:w-9/12 lg:p-0 pr-6 w-full">The connected is.....It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                <Link href="/awards"><span className="w-fit text-[#EEE8F2] hover:bg-[#EEE8F2] py-3 px-6 rounded bg-[#3E0563] hover:text-[#3E0563] cursor-pointer transition-all duration-500 ease-in">Learn more</span></Link>
                <div className="rotate-180">
                <svg width="180" height="180" className="rotate-90"viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M180 180H134.289C134.289 162.365 130.815 144.903 124.067 128.611C117.318 112.319 107.426 97.5156 94.956 85.0464C82.4861 72.5772 67.6821 62.6863 51.3895 55.9385C35.0969 49.1908 17.6347 45.7183 0 45.7194V0C99.4101 0 180 80.5899 180 180Z" fill="#3E0563"/>
<path fillRule="evenodd" clipRule="evenodd" d="M99.9969 180H63.7124C63.7124 163.113 57.0042 146.918 45.0635 134.977C33.1228 123.036 16.9277 116.328 0.0410156 116.328V80.0437C26.5476 80.0547 51.9654 90.5892 70.7084 109.332C89.4514 128.075 99.986 153.493 99.9969 180Z" fill="#FA9706"/>
</svg>
                </div>
              </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse text-[#0c0114]" data-aos="slide-left">
            
              <div className="w-full lg:p-12 p-6 flex flex-col gap-8 lg:pl-0 pl-0">
                <div className="w-full lg:p-12 p-6 flex flex-col gap-6">
                <span className="flex flex-col gap-4">
                    <h1 className="text-xl lg:text-4xl font-bold">Celebrated Techies</h1>
                    <div className="w-24 h-1 bg-[#FA9706] rounded-full ml-1"></div>
                </span>
                <p className="leading-6 font-semibold text-base lg:w-9/12 lg:p-0 pr-6 w-full">The connected is.....It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                <Link href="/celebrated"><span className="w-fit text-[#EEE8F2] hover:bg-[#EEE8F2] py-3 px-6 rounded bg-[#3E0563] hover:text-[#3E0563] cursor-pointer transition-all duration-500 ease-in">Learn more</span></Link>
                </div>
                <div>
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M180 180H134.289C134.289 162.365 130.815 144.903 124.067 128.611C117.318 112.319 107.426 97.5156 94.956 85.0464C82.4861 72.5772 67.6821 62.6863 51.3895 55.9385C35.0969 49.1908 17.6347 45.7183 0 45.7194V0C99.4101 0 180 80.5899 180 180Z" fill="#3E0563"/>
<path fillRule="evenodd" clipRule="evenodd" d="M99.9969 180H63.7124C63.7124 163.113 57.0042 146.918 45.0635 134.977C33.1228 123.036 16.9277 116.328 0.0410156 116.328V80.0437C26.5476 80.0547 51.9654 90.5892 70.7084 109.332C89.4514 128.075 99.986 153.493 99.9969 180Z" fill="#FA9706"/>
</svg>
                </div>
              </div>
              <div className="w-full h-auto lg:p-12 p-6 grid grid-rows-2 gap-8">
              <div className="w-full h-auto  grid grid-cols-2 gap-8 lg:p-0">
              {images.map((image)=>(
                  <div className="w-full h-auto block p-0 m-0" key={image}><Image src={image} layout="responsive"/></div>
                  ))
                }
                </div>

                  <div className="w-full h-auto grid grid-cols-2 gap-8 lg:ga-12 lg:mt-[-2rem] lg:p-0">
                {images2.map((image)=>(
                  <div className="w-full h-auto block p-0 m-0" key={image}><Image src={image} layout="responsive"/></div>
                  ))
                }
                  </div>
                  </div>
        </div>
        </div>
      )
    }
    
    export default ConnectedAwards;