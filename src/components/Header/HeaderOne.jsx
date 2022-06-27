import React from 'react';
import styled from 'styled-components';
import {FaPhoneAlt, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import { motion } from 'framer-motion';

function HeaderOne() {
    const StyledHeaderOne = styled.div`
        display: flex;
        justify-content: space-between;
        height: 2.5rem;
        align-items: center;
        // background-color: green;

        &>*{
            display: flex;
            align-items: center;
            &:nth-child(1){
                gap: 1.5rem;
                padding-left: 5vw;
            }
            &:nth-child(2){
                gap: 1rem;
                padding-right: 5vw;
            }
        }

        @media screen and (max-width: 600px){

            flex-direction: column;
            .contact-info{
                width: 95%;
                margin: auto;
                padding-left: 0;
                display: flex;
                justify-content: space-between;
            }
            
            .social-info{
                width: 40%;
                margin: auto;
                padding-right: 0;
                display: flex;
                justify-content: center;
                margin-top: 5px;

            }
        }
    `;
  return (
    <StyledHeaderOne className='main-header'>
        <div className="row contact-info">
            <div className="col">
                <FaPhoneAlt />
                <span>+233 5410 17933</span>
            </div>
            <div className="col">
                <FaMailBulk />
                <span>williamdreams89@outlook.com</span>
            </div>
        </div>
        <div className="row social-info">
            <div className="col">
               <a href="https://facebook.com/DanquahWilliam" target="_blank"> <FaFacebook /></a>
            </div>
            <div className="col">
               <a href="https://facebook.com/DanquahWilliam" target="_blank"> <FaLinkedin /></a>
                
            </div>
            <div className="col">
               <a href="https://facebook.com/DanquahWilliam" target="_blank"> <FaTwitter /></a>
            </div>
        </div>
    </StyledHeaderOne>
  )
}

export default HeaderOne