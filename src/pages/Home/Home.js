import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Link } from 'react-router-dom';
import Book from './../../component/cards/Book/Book';
import Basket from "../../img/basket.png";
import Banner from "../../img/banner.jpg";
import LectBanner from "../../img/lecturebasket.jpg";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [swapPosition, setSwapPosition] = useState(false);

  useEffect(() => {
    if (currentUser === null) {
      navigate('/login');
    } else {
      console.log(currentUser.uid);
    }

    const interval = setInterval(() => {
      setSwapPosition((prevPosition) => !prevPosition);
    }, 4500);

    return () => clearInterval(interval);
  }, [currentUser]);

  return (
    <div className='main'>
      <div className='mt-2 centrify'>
        <h2 className='text-primary'>Welcome to the Lecturesbasket</h2>
        <p className='text-secondary'>Get all the CA Books in form of pdf here at cheap price</p>
      </div>
      <div className={`d-flex flex-wrap justify-content-around p-2  ${swapPosition && 'swap'}`}>
            <img src={LectBanner} alt="" className='img contain rounded' />
            <img src={Basket} alt="" className='img contain rounded' />
      </div>
      
    </div>
  );
}

export default Home;