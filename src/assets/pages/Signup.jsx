import React, { useEffect, useState } from 'react'
import paramlogo from '../images/paramlogo.png';
import signup from '../images/signup.png';
import { Form, Link } from 'react-router-dom';
import Openeye from '../images/Openeye.png';
import closeEye from '../images/closeEye.png';
import { useMutation } from '@tanstack/react-query';
import { createRegistration } from '../../api/registration/registrationAPI';

const Signup = () => {

    const [pwdActive, setPwdActive] = useState(false);
    const [confPwdActive, setConPwdActive] = useState(false);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");


    useEffect(()=>{
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                // setSelectedCountry(data.userSelectValue);
            });
    }, []);

    const {mutate, isError, isSuccess} = useMutation({
        mutationFn : (data)=>createRegistration(data),
        onSuccess : (res)=>{
            console.log(res);
            
        }
    })

    function handleSubmit(){
        const formData = new FormData();

        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("country_id", selectedCountry);
        formData.append("phone_no", phone_no);
        formData.append("password", pwd);
        formData.append('role', 'student');


        mutate(formData);
        alert("Registration Successfully")
    }

    return (
        <>
            <div className='w-full h-[100vh] flex justify-center items-center bg-linear-[90deg,#9796F0_30%,#FBC7D4_70%]'>
                <div className='w-[80%] h-[80%] flex' >
                    {/* Left Div */}
                    <div className='w-[50%] h-full overflow-auto bg-[#ECF1FE] flex flex-col items-center rounded-l-[35px] py-[20px]'>
                        <img src={paramlogo} className='w-[137px]' />
                        <div className='w-[85%] flex flex-col pl-[20px] gap-[20px]'>
                            <p className='text-[48px] text-[#171923] font-[700]'>Sign Up</p>
                            <p className='text-[18px] text-[#718096] font-[400]'>Already have an account? <Link className='text-[#171923] underline' to={'/signin'}>Sign In</Link></p>
                            <div className='w-full flex justify-between'>
                                <div className='w-[49%] flex flex-col gap-[8px]'>
                                    <label htmlFor="" className='text-[20px] text-[#718096]'>First Name</label>
                                    <input onChange={(e)=>{setFname(e.target.value)}} type="text" placeholder='Enter First Name' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                                </div>
                                <div className='w-[49%] flex flex-col gap-[8px]'>
                                    <label htmlFor="" className='text-[20px] text-[#718096]'>Last Name</label>
                                    <input onChange={(e)=>{setLname(e.target.value)}} type="text" placeholder='Enter Last Name' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-[8px]'>
                                <label htmlFor="" className='text-[20px] text-[#718096]'>E-mail</label>
                                <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='example@gmail.com' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                            </div>
                            <div className='w-full flex flex-col gap-[8px]'>
                                <label htmlFor="" className='text-[20px] text-[#718096]'>Select Country</label>
                                <select onChange={(e) => { setSelectedCountry(e.target.value) }} className='w-full border-[1px] border-[#CBD5E0] rounded-[12px] p-[15px]'>
                                {
                                    countries.map((element, index) => {
                                        return (
                                            <option key={index} value={element.label}>{element.label}</option>
                                        )
                                    })
                                }
                            </select>
                            </div>
                            <div className='w-full flex flex-col gap-[8px]'>
                                <label htmlFor="" className='text-[20px] text-[#718096]'>Phone No</label>
                                <input onChange={(e)=>{setPhone_no(e.target.value)}} type="text" placeholder='Enter Phone Number' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                            </div>
                            <div className='w-full flex flex-col gap-[8px] relative'>
                                <label htmlFor="" className='text-[20px] text-[#718096]'>Create Password</label>
                                <input onChange={(e)=>{setPwd(e.target.value)}} type={!pwdActive ? "password" : "text"} placeholder='@#*%' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                                <img onClick={()=>{setPwdActive(!pwdActive)}} src={pwdActive ? Openeye : closeEye} className='w-[26px] absolute right-5 bottom-4'/>
                            </div>
                            <div className='w-full flex flex-col gap-[8px] relative'>
                                <label htmlFor="" className='text-[20px] text-[#718096]'>Confirm Password</label>
                                <input onChange={(e)=>{setConfirmPwd(e.target.value)}} type={!confPwdActive ? "password" : "text"} placeholder='******' className='border-[1px] border-[#CBD5E0] bg-white rounded-[12px] p-[16px]' />
                                <img onClick={()=>{setConPwdActive(!confPwdActive)}} src={confPwdActive ? Openeye : closeEye} className='w-[26px] absolute right-5 bottom-4'/>
                            </div>
                            <button onClick={handleSubmit} className='bg-[#3972EF] rounded-[57px] py-[16px] text-[24px] text-white'>Sign Up</button>
                        </div>
                    </div>
                    {/* right Div */}
                    <div className='w-[50%] h-full bg-[#FFFFFF] flex justify-center items-center rounded-r-[35px] relative'>
                        <img src={signup} className='h-full w-full absolute left-30' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup