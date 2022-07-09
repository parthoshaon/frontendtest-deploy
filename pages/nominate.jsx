import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { facebook, twitter, instagram, linkedln } from "../public";
import Image from "next/image";
const signin = () => {
    const router = useRouter();
    const [fulNameerror, setFulNameError] = useState(false);
    const [awarderror, setAwardError] = useState(false);
    const [facebookerror, setFacebookerror] = useState(false);
    const [instagramerror, setInstagramerror] = useState(false);
    const [linkedlnerror, setLinkedlnerror] = useState(false);
    const [twittererror, setTwittererror] = useState(false);
    const fullNameEl = useRef();
    const awardEl = useRef();
    const facebookEl = useRef();
    const instagramEl = useRef();
    const linkedlnEl = useRef();
    const twitterEl = useRef();
    const handleSubmission = () => {
        setFulNameError(true);
        setAwardError(true);
        setFacebookerror(true);
        setInstagramerror(true);
        setLinkedlnerror(true);
        setTwittererror(true); 
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

    }
    return (
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
                            <input type="text" id="linkedln" name="linkedln" ref={linkedlnEl} className={`peer outline-none ring-2 ${linkedlnerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm basis-3/4`} />
                            <label htmlFor="linkedln" className={`flex items-center gap-2 basis-1/4 ${linkedlnerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} lg:text-base text-sm lg:peer-focus:text-lg peer-focus:text-base font-semibold cursor-pointer`}><div className="w-8 h-8 block"><Image src={linkedln} layout="responsive" /></div><span>Linkedln</span></label>
                        </span>
                        <span className="flex flex-row-reverse items-center w-full gap-6">
                            <input type="text" name="instagram" id="instagram" ref={instagramEl} className={`peer outline-none ring-2 ${instagramerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm  basis-3/4`} />
                            <label htmlFor="instagram" className={`flex items-center gap-2 basis-1/4 ${instagramerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} lg:text-base text-sm lg:peer-focus:text-lg peer-focus:text-base font-semibold cursor-pointer`}><div className="w-8 h-8 block"><Image src={instagram} layout="responsive" /></div><span>Instagram</span></label>
                        </span>
                        <span className="flex flex-row-reverse items-center w-full gap-6">
                            <input type="text" name="twitter" id="twitter" ref={twitterEl} className={`peer outline-none ring-2 ${twittererror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm  basis-3/4`} />
                            <label htmlFor="twitter" className="flex items-center gap-2 basis-1/4"><div className="w-8 h-8 block"><Image src={twitter} layout="responsive" /></div><span>Twitter</span></label>
                        </span>
                        <span className="flex items-center w-full gap-6"><label className="flex items-center gap-2 basis-1/4"><div className="w-8 h-8 block"><Image src={facebook} layout="responsive" /></div><span>Facebook</span></label><input type="text" ref={facebookEl} className={`peer outline-none ring-2 ${facebookerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm basis-3/4`} /></span>
                    </span>
                    <p>The First-Ever Tech Personality Awards Recognizing Promising and Exceptional African Talents in all Technological Fields. The West African Countries include 16 countries of Benin, Burkina Faso, Gambia, Ghana, Guinea, Guinea-Bissau, Ivory Coast, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone, and Togo</p>
                        <p>For questions, partnerships & enquiries, send us a mail via connectedawards@gmail.com</p>
                    <span className="w-full p-3 bg-[#3E0563] text-[#EEE8F2] hover:text-[#3E0563] hover:bg-[#EEE8F2] rounded transition-all duration-500 ease-in cursor-pointer" onClick={handleSubmission}>Submit</span>
                </span>
            </div>
        </div>
    )
}

export default signin;
