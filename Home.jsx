import React from 'react'
import NavB from './Navigation/NavB'
import CoursesStrip from './Component1/CourseStrip'
import WelcomeUser from './Component1/WelcomeUser'

const Home = () => {
  return (
    <div>
      <CoursesStrip/>
      <WelcomeUser/>
      <Courses/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
