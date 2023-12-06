import React from 'react'
import  HeadCard  from '../components/Card'
import Doctor from '../images/doctor.svg'
import Patient from '../images/patient.svg'
import Pharmacies from '../images/pharmacies.svg'

function Home() {
  return (
    <div className='container'>
        
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