import React from 'react'
import Banner from './Banner'
import Section2 from '../Section2';
import ScrollRouting from '../ScrollRouting';
import Chennai from './Chennai';
import Rameshwaram from './Rameshwaram';
import Kodaikanal from './Kodaikanal';
import Ooty from './Ooty';
import Kanyakumari from './Kanyakumari';
import Kumbakonam from './Kumbakonam';
import Madurai from './Madurai';
import Yercaud from './Yercaud';
import Theni from './Theni';
import Hogenakkal from './Hogenakkal';




const Home = () => {
  return (
   
    <div id='home'>

    
    <Banner />
    <Section2 />
    <ScrollRouting />
    <Chennai />
    <Rameshwaram />
    <Kodaikanal />
    <Ooty />
    <Kanyakumari />
    <Kumbakonam />
    <Madurai />
    <Yercaud />
    <Theni />
    <Hogenakkal />
   
    </div>
  )
}

export default Home