import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const signin = () => {
    const router = useRouter();
    const [firerror, setFirError] = useState(false);
    const [lasterror, setLastError] = useState(false);
    const [emerror, setEmError] = useState(false);
    const [phoneerror, setPhoneError] = useState(false);
    const [passworderror, setpassError] = useState(false);
    const [gendererror, setgenError] = useState(false);
    const firstNameEl = useRef();
    const lastNameEl = useRef();
    const emailEl = useRef();
    const phoneEl = useRef();
    const passwordEl = useRef();
    const genderEl = useRef();
    const handleSubmission = () => {
        setFirError(false);
        setLastError(false);
        setEmError(false);
        setPhoneError(false);
        setpassError(false);
        setgenError(false);
        const { value: first } = firstNameEl.current;
        const { value: last } = lastNameEl.current;
        const { value: email } = emailEl.current;
        const { value: phone } = phoneEl.current;
        const { value: password } = passwordEl.current;
        const { value: gender } = genderEl.current;
        if (!first || !last || !email || !phone || !password || !gender || phone.length < 10 || email.indexOf("@") < 0 || password.length < 8) {
            if (!first) {
                setFirError(true);
            }
            if (!last) {
                setLastError(true);
            }
            if (!email || email.indexOf("@") < 0) {
                setEmError(true);
            }
            if (!phone || phone.length < 10) {
                setPhoneError(true);
            }
            if (!password || password.length < 8) {
                setpassError(true);
            }
            if (!gender) {
                setgenError(true);
            }
            return;
        }
        window.localStorage.setItem('name', first + ' ' + last);
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('phone', phone);
        window.localStorage.setItem('password', password);
        window.localStorage.setItem('gender', gender);
        return router.push('/login');
    }
    return (
        <div className="bg-[#1F0231] w-full h-fit flex items-center lg:p-12 p-4">
            <div className="bg-white m-auto flex flex-col text-center p-10 lg:w-1/2 w-full gap-2">
                <h1><span className="font-bold text-xl w-1/2 mx-auto">Nominate a candidate for</span></h1>
                <h4><span className="font-bold text-lg">The Connected Tech Awards</span></h4>
                <span>Enter The Nominee's Information Below</span>
                <span className="flex flex-col gap-8 w-full">
                <span className="flex flex-col-reverse text-left gap-2">
                    {gendererror && <p className="text-xs text-red-400">Please select an award category</p>}
                    <select ref={genderEl} name="gender" id="gender" className={`peer outline-none ring-2 ${gendererror ? `peer-focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-4 text-gray-500 rounded-sm px-4`}>
                    <option value="">Select Category</option>
                            <option value="Exceptional Data Analyst">Exceptional Data Analyst</option>
                    <option value="Female">Female</option>
                </select><label className={`${gendererror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} text-xs peer-focus:text-base font-semibold cursor-pointer`} htmlFor="gender">Gender</label></span>
                        <span className="flex flex-col-reverse text-left gap-2 w-full">{firerror && <p className="text-xs text-red-400">Please enter your first name</p>}<input ref={firstNameEl} name="firstname" id="firstname" type="text" className={`peer outline-none ring-2 ${firerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`} /><label className={`${firerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="firstname">First Name</label></span>
                        <span className="flex flex-col-reverse text-left gap-2">{emerror && <p className="text-xs text-red-400">Invalid email address</p>}<input ref={emailEl} type="email" name="email" id="email" className={`peer outline-none ring-2 ${emerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`} /><label className={`${emerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="email">Email Address</label></span>
                    <span className="flex flex-col-reverse text-left gap-2">{phoneerror && <p className="text-xs text-red-400">Invalid phone number</p>}<input ref={phoneEl} type="tel" name="phone" id="phone" className={`peer outline-none ring-2 ${phoneerror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`} /><label className={`${phoneerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="phone">Phone Number</label></span>
                    <span className="flex flex-col-reverse text-left gap-2 group">{passworderror && <p className="text-xs text-red-400">Password must be more than 7 characters</p>}<input ref={passwordEl} type="password" name="password" id="password" className={`peer outline-none ring-2 ${passworderror ? `focus:ring-red-500 ring-red-200` : `ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`} /><label className={`${passworderror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="password">Set Password</label></span>
                    
                    <span className="text-sm">By registering you agree to Tech trend Africa's <Link href="/terms"><span className="text-[#FA9706] cursor-pointer">Terms of Use</span></Link> and <Link href="/terms"><span className="text-[#FA9706] cursor-pointer">Privacy Policy</span></Link></span>
                    <span className="w-full p-3 bg-[#3E0563] text-[#EEE8F2] hover:text-[#3E0563] hover:bg-[#EEE8F2] rounded transition-all duration-500 ease-in cursor-pointer" onClick={handleSubmission}>Create account</span>
                </span>
            </div>
        </div>
    )
}

export default signin;
