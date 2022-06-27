import React from 'react';
import styled from 'styled-components';

function Hero() {
    const StyledHero = styled.div`
        width: 100vw;
        height: 500px;
        position: absolute;
        margin-bottom: 10rem;
        img{
            object-fit: cover;
            width: 100vw;
            height: 100%;
        }

        .hero__caption{
            position: relative;
            top: -65%;
            text-align: center;
            color: white;
            background-color: rgba(0,0,0,.6);
            width: 100vw !important;
            padding: 5rem;
            font-size: 22px;
            display: flex;
            flex-direction: column;
            gap: .5rem;

            @media screen and (ma-width:700px){
                font-size: 45px;
            }
        }
    `;
  return (
    <StyledHero>
        <img src="../images/5.jpg" alt="not found" />
        <div className='hero__caption'>
            <h2>New Season Arrivals</h2>
            <p>Check out all the trends</p>
            
        </div>
    </StyledHero>
  )
}

export default Hero