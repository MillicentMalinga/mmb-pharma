import React from 'react'
import  HeadCard  from '../components/Card'
import Doctor from '../images/doctor.svg'
import Patient from '../images/patient.svg'
import Pharmacies from '../images/pharmacies.svg'
import Hero from '../images/online.svg'

function Home() {
  return (
    <div className=''>
        <div className="hero lg:flex lg:flex-row sm:flex sm:flex-col sm:gap-10 sm:mx-auto lg:gap-20 bg-mebami-blue py-20">
            <div className="flex container flex-col sm:mb-10">
                <h1 className="text-white font-bold text-start text-3xl lg:text-5xl lg:mt-20 lg:ml-20">
                    Your Health, <br /> Your Way
                </h1>
                <p className="text-white  text-start text-lg lg:text-2xl  lg:mt-10 lg:ml-20">
                    Your prescriptions, your pharmacies, your choice. <br /> We provide a platform for you to manage your healthcare needs, <br /> all in one place.
                </p>
                <button className="bg-white sm:w-full mb-10 sm:mb-10 shadow-lg uppercase text-blue-700 font-bold  mt-10 px-4 py-2 rounded-lg lg:ml-20 lg:w-2/3 justify-self-end my-auto">
                    Sign Up
                </button>
            </div>
            <div className='container sm:mt-10'>

            
            <img src={Hero} className='lg:w-full sm:mx-auto sm:mt-10' alt="" />
            </div>

        </div>
            <div className="sm:grid lg:h-4/5 container sm:grid-cols-1 sm:gap-4 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg: self-center mx-auto">
                <HeadCard className="" image={Pharmacies} title="For Pharmacies" description="Connect with a wider customer base, manage orders efficiently, and increase your sales. Our app provides a seamless platform for you to display your products and services to a larger audience. With real-time updates you can focus on what you do best - providing essential medications to those in need."
                 buttonText="Sign Up" backGroundColor="orange"/>
                 <HeadCard title="For Patients"  image={Patient} description="Get your prescribed medications delivered right to your doorstep. View your prescriptions, choose from trusted pharmacies, and track your orders - all in one place. Our app ensures that your healthcare needs are met conveniently and promptly."
                 buttonText="Sign Up" backGroundColor="light-green"/>
                  <HeadCard className="sm:col-span-4" image={Doctor} title="For Doctors" description="Create and manage prescriptions digitally for your patients. Our app allows you to send prescriptions directly to patients and associated pharmacies, ensuring accuracy and timely availability of medications. Embrace the digital transformation and enhance patient care."
                 buttonText="Sign Up" backGroundColor="light-blue"/>
          

        </div>

    </div>
  )
}

export default Home