import React from 'react'
import Header from '../component/Header'
import cardtop1 from '../images/cardtop1.png'
import { Link } from 'react-router-dom'
import GetBrochure from './GetBrochure'


const CourseDetail = () => {
  return (
    <>
        <Header />
        <div className='w-full flex justify-center'>
            <div className='w-[90%] flex flex-col justify-center my-[80px] gap-[80px]'>
                {/* ********* */}
                <div className='w-full flex justify-between flex-wrap'>
                    <div className='w-[65%] flex flex-col gap-[24px]'>
                        <Link>  Back</Link>
                        <p className='text-[40px]'>Introduction to Machine Learning using Python (Linear Regression)</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>Machine Learning in Python offers a wide range of tools and libraries for various tasks, including Regression. One popular approach is Linear Regression, a fundamental technique for predicting numerical values based on input data.</p>
                        <div className='flex justify-between'>
                            <p className='bg-[#9AB4EE33] border-[1px] border-[#9AB4EE] text-[#3F5489] text-[16px] py-[10px] px-[16px] rounded-[50px]'>Artificial Intelligence</p>
                            <div className='flex items-center text-[#FFC837]'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <i className="fa-regular fa-star"></i>
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] flex items-center'>
                        <img src={cardtop1} className='w-full' />
                    </div>
                </div>
                {/* ---------------------------------------------------------- */}
                <div className='w-full shadow-xl flex justify-around py-[16px] px-[24px] rounded-[20px] text-[18px]'>
                    <div className='flex flex-col items-center gap-[24px]'>
                        <p> <i className="fa-solid fa-signal text-[#3972EF]"></i> Course Level</p>
                        <p>Beginner</p>
                    </div>
                    <div className='flex flex-col items-center gap-[24px]'>
                        <p><i className="fa-solid fa-clock text-[#3972EF]"></i> Course Duration</p>
                        <p>10 Weeks</p>
                    </div>
                    <div className='flex flex-col items-center gap-[24px]'>
                        <p><i className="fa-regular fa-copy text-[#3972EF]"></i> Lectures</p>
                        <p>10</p>
                    </div>
                    <div className='flex flex-col items-center gap-[24px]'>
                        <p><i className="fa-solid fa-language text-[#3972EF]"></i> Language</p>
                        <p>English</p>
                    </div>
                    <div className='flex flex-col items-center gap-[24px]'>
                        <p> <i className="fa-solid fa-list-check text-[#3972EF]"></i> Assessments</p>
                        <p>Yes</p>
                    </div>
                    <div className='flex flex-col items-center gap-[24px]'>
                        <p><i className="fa-solid fa-certificate text-[#3972EF]"></i> Certificate</p>
                        <p>Yes</p>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------- */}
                <div className=' w-full flex flex-col justify-center gap-[40px]'>
                    <div className='flex flex-col gap-[24px]'>
                        <p className='text-[32px] text-[#1C1C1C]'>Course Overview</p>
                        <p className='text-[24px] text-[#676767] font-[400]'>Python provides powerful libraries like NumPy and scikit-learn that enable developers to build regression models efficiently. NumPy is used for numerical computations and handling arrays, while scikit-learn offers a user-friendly interface to implement various Machine Learning algorithms. </p>
                        <p className='text-[24px] text-[#676767] font-[400]'>With scikit-learn, developers can easily split their dataset into training and testing sets, create a regression model, and fit it to the training data. Python's rich ecosystem and the simplicity of scikit-learn make it a favored choice for Regression tasks, empowering developers to create predictive models for a wide range of applications, from finance and healthcare to marketing and beyond.</p>
                    </div>
                    <div className='flex flex-col gap-[24px]'>
                        <p className='text-[32px] text-[#1C1C1C]'>What you'll learn in this course</p>
                        <div className='flex justify-between'>
                            <ul className='text-[24px] text-[#676767] font-[400] gap-[24px]'>
                                <li><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Basic Python Programming</li>

                                <li><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Learn to use libraries like numpy, pandas and scikit-learn.</li>

                                <li><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Learn to predict outcomes using regression.</li>

                                <li><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Learn about the concept of under-fitting and over-fitting.</li>
                            </ul>

                            <ul className=' text-[24px] text-[#676767] font-[400] gap-[24px]'>
                                <li><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Learn to split the dataset into training and testing set</li>

                                <li><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Learn about correlation analysis</li>

                                <li><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Learn to diagnose the model</li>

                                <li><i className="fa-solid fa-check text-[#3972EF] pr-[10px]"></i>Implement a multiple-regression project by the end of the course.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------- */}
            </div>
        </div>
        
        <GetBrochure />
    </>
  )
}

export default CourseDetail