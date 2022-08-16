import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { facebook, twitter, instagram, linkedln, thumbs, close } from "../public";
import Image from "next/image";
const signin = () => {
    const router = useRouter();
    const [fulNameerror, setFulNameError] = useState(false);
    const [awarderror, setAwardError] = useState(false);
    const [facebookerror, setFacebookerror] = useState(false);
    const [instagramerror, setInstagramerror] = useState(false);
    const [linkedlnerror, setLinkedlnerror] = useState(false);
    const [twittererror, setTwittererror] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const fullNameEl = useRef();
    const awardEl = useRef();
    const facebookEl = useRef();
    const instagramEl = useRef();
    const linkedlnEl = useRef();
    const twitterEl = useRef();
    const handleSubmission = () => {
        setFulNameError(false);
        setAwardError(false);
        setFacebookerror(false);
        setInstagramerror(false);
        setLinkedlnerror(false);
        setTwittererror(false); 
        const { value: fullname } = fullNameEl.current;
        const { value: award } = awardEl.current;
        const { value: facebook } = facebookEl.current;
        const { value: instagram } = instagramEl.current;
        const { value: linkedln } = linkedlnEl.current;
        const { value: twitter } = twitterEl.current;
        if (!fullname  || !gender || !facebook || !instagram || !linkedln || !twitter) {
            if (!fullname) {
                setFulNameError(true);
            }
            if (!award) {
                setAwardError(true);
            }
            if (!facebook) {
                setFacebookerror(true);
            }
            if (!instagram) {
                setInstagramerror(true);
            }
            if(!linkedln){
                setLinkedlnerror(true);
            }
            if (!twitter) {
                setTwittererror(true);
            }
            return;
        }
            return setPopUp(true);
    }
    return (
        <>
        <div className={`${popUp ? `flex transition-[display] duration-500 ease-in` : `hidden transition-[display] duration-500 ease-out`} flex-col items-center`}>
          <div className="inset-0 bg-black/70 w-full h-full fixed z-30"></div>
        <div onBlur={() => setPopUp(false)} tabIndex={90}  className="fixed z-40 bg-white lg:w-2/5 w-4/5 h-fit p-10 flex flex-col items-center rounded shadow-sm gap-8 inset-y-1/4">
            <div className="float-right ml-auto cursor-pointer"
              onClick={() => setPopUp(false)}
            ><Image src={close} width="24px" height="24px" /> </div>
            <Image src={thumbs} width="96px" height="96px" />
            <h1 className="text-3xl text-[#3E0563] tracking-wider font-bold">Awesome!</h1>
            <span className="text-center">
            <p>Your Nomination have been submitted</p>
            </span>
                    <span className="lg:p-4 lp:px-6 p-2 text-[#EEE8F2] hover:bg-[#EEE8F2]  bg-[#3E0563] hover:text-[#3E0563] cursor-pointer text-sm w-full text-center font-bold rounded lg:px-8 px-4 tracking-wider transition duration-500 ease-in-out"><Link href="/">Return to homepage</Link></span>
          </div>
        </div>
        <div className="bg-[#1F0231] w-full h-fit flex items-center lg:p-12 p-4">
            <div className="bg-white m-auto flex flex-col text-center p-10 lg:w-1/2 w-full gap-2">
                <h1><span className="font-bold text-xl w-1/2 mx-auto">Nominate a candidate for</span></h1>
                <h4><span className="font-bold text-lg">The Connected Tech Awards</span></h4>
                <span>Enter The Nominee's Information Below</span>
                <span className="flex flex-col gap-8 w-full">
                <span className="flex flex-col-reverse text-left gap-2">
                        {awarderror && <p className="text-xs text-red-400">Please select an award category</p>}
                    <select ref={awardEl} name="gender" id="gender" className={`peer outline-none ring-2 ${awarderror ? `peer-focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-4 text-gray-500 rounded-sm px-4`}>
                    <option value="">Select Category</option>
                            <option value="Exceptional Data Analyst">Exceptional Data Analyst</option>
                            <option value="Exceptional Devops Expert">Exceptional Devops Expert</option>
                            <option value="Exceptional Data Scientist">Exceptional Data Scientist</option>
                            <option value="Exceptional Visual Designer">Exceptional Visual Designer</option>
                            <option value="Promising Data Analyst">Promising Data Analyst</option>
                            <option value="Promising Data Scientist">Promising Data Scientist</option>
                            <option value="Exceptional Visual Designer">Promising Visual Designer</option>
                        </select><label className={`${awarderror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} lg:text-base text-sm lg:peer-focus:text-lg peer-focus:text-base font-semibold cursor-pointer`} htmlFor="gender">Award Category</label></span>
                    
                    <span className="flex flex-col-reverse text-left gap-2 w-full">
                        {fulNameerror && <p className="text-xs text-red-400">Please enter your full name</p>}
                        <input ref={fullNameEl} name="fullname" id="fullname" type="text" className={`peer outline-none ring-2 ${fulNameerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`} />
                        <label className={`${fulNameerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} lg:text-base text-sm lg:peer-focus:text-lg peer-focus:text-base font-semibold cursor-pointer`} htmlFor="fullname">Full Name</label></span>
                    <span className="flex flex-col gap-8">
                        <h1 className="text-left font-bold">Social Media Links</h1>
                        <span className="flex flex-row-reverse  items-center w-full gap-6">
                        <span className="flex flex-col gap-2 basis-3/4">
                                <input type="url" id="linkedln" name="linkedln" ref={linkedlnEl} className={`peer outline-none ring-2 ${linkedlnerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm basis-3/4`} />
                                {linkedlnerror && <p className="text-xs text-red-400 float-right ml-auto">Please enter a valid url</p>} 
                        </span>
                            <label htmlFor="linkedln" className={`flex items-center gap-2 basis-1/4 ${linkedlnerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} lg:text-base text-sm lg:peer-focus:text-lg peer-focus:text-base font-semibold cursor-pointer`}><div className="w-8 h-8 block"><Image src={linkedln} layout="responsive" /></div><span>Linkedln</span></label>
                        </span>
                        <span className="flex flex-row-reverse items-center w-full gap-6">
                        <span className="flex flex-col gap-2 basis-3/4">
                                <input type="url" name="instagram" id="instagram" ref={instagramEl} className={`peer outline-none ring-2 ${instagramerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm  basis-3/4`} />
                                {instagramerror && <p className="text-xs text-red-400 float-right ml-auto">Please enter a valid url</p>}
                        </span>
                            <label htmlFor="instagram" className={`flex items-center gap-2 basis-1/4 ${instagramerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} lg:text-base text-sm lg:peer-focus:text-lg peer-focus:text-base font-semibold cursor-pointer`}><div className="w-8 h-8 block"><Image src={instagram} layout="responsive" /></div><span>Instagram</span></label>
                        </span>
                        <span className="flex flex-row-reverse items-center w-full gap-6">
                        <span className="flex flex-col gap-2 basis-3/4">
                            <input type="url" name="twitter" id="twitter" ref={twitterEl} className={`peer outline-none ring-2 ${twittererror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm  basis-3/4`} />
                            {twittererror && <p className="text-xs text-red-400 float-right ml-auto">Please enter a valid url</p>}
                        </span>
                            <label htmlFor="twitter" className={`flex items-center gap-2 basis-1/4 ${twittererror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} lg:text-base text-sm lg:peer-focus:text-lg peer-focus:text-base font-semibold cursor-pointer`}><div className="w-8 h-8 block"><Image src={twitter} layout="responsive" /></div><span>Twitter</span></label>
                        </span>
                        <span className="flex flex-row-reverse items-center w-full gap-6">
                        <span className="flex flex-col gap-2 basis-3/4">
                                <input type="url" name="facebook" id="facebook" ref={facebookEl} className={`peer outline-none ring-2 ${facebookerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm basis-3/4`} />
                                {facebookerror && <p className="text-xs text-red-400 float-right ml-auto">Please enter a valid url</p>}
                        </span>
                            <label htmlFor="facebook" className={`flex items-center gap-2 basis-1/4 ${facebookerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} lg:text-base text-sm lg:peer-focus:text-lg peer-focus:text-base font-semibold cursor-pointer`}><div className="w-8 h-8 block"><Image src={facebook} layout="responsive" /></div><span>Facebook</span></label>
                        </span>
                    </span>
                    <p>The First-Ever Tech Personality Awards Recognizing Promising and Exceptional African Talents in all Technological Fields. The West African Countries include 16 countries of Benin, Burkina Faso, Gambia, Ghana, Guinea, Guinea-Bissau, Ivory Coast, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone, and Togo</p>
                        <p>For questions, partnerships & enquiries, send us a mail via connectedawards@gmail.com</p>
                    <span className="w-full p-3 bg-[#3E0563] text-[#EEE8F2] hover:text-[#3E0563] hover:bg-[#EEE8F2] rounded transition-all duration-500 ease-in cursor-pointer" onClick={handleSubmission}>Submit</span>
                </span>
            </div>
            </div>
        </>
    )
}

export default signin;
