import React from 'react';
//import profileImg from '../images/profile.webp';
import profileImg from '../images/pro.png';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Card = () => {
    return (
        <div className='main-container'>
            <div className='card'>
                <img src={profileImg} alt='profile-img' className='img-fluid card-img-top profile' />
                <div className='card-header text-center'>
                    <h1>John alexander Doe</h1>
                    <p>Frontend Developer</p>
                </div>

                <div className='card-body'>

                    <div className="infoBox">
                        <p> <MdOutlineEmail className='emj' /> example@gmail.com</p>
                        <p> <FaPhoneAlt />  033-1211-4354</p>
                        <p>  <IoLocationOutline className='emoji' /> Kolkata, west bengal, india</p>
                    </div>
                </div>
                <div className='card-footer'>
                    <div className='icons text-center'>
                        <span><FaFacebook /></span>
                        <span><FaLinkedin /></span>
                        <span><FaGithub /></span>
                        <span><FaTwitterSquare /></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;