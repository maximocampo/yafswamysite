import './nueces.css'
import React, { useRef, useEffect} from "react";
import nuts from '../components/NUECES MASTER.wav'
import yd_0 from '../nessdesk/nueces.jpg'
import yd_1 from '../nessdesk/nueces2.jpg'
import yd_2 from '../nessdesk/nueces3.jpg'
import yd_3 from '../nessdesk/nueces4.jpg'
import yd_4 from '../nessdesk/nueces5.jpg'
import yd_5 from '../nessdesk/nueces6.jpg'
import yd_6 from '../nessdesk/nueces7.jpg'
import yd_7 from '../nessdesk/nueces8.jpg'
import yd_8 from '../nessdesk/nueces9.jpg'
import yd_9 from '../nessdesk/nueces10.jpg'
import yd_10 from '../nessdesk/nueces11.jpg'
import yd_11 from '../nessdesk/nueces12.jpg'
import yd_12 from '../nessdesk/nueces13.jpg'
import yd_13 from '../nessdesk/nueces14.jpg'
import yd_14 from '../nessdesk/nueces15.jpg'
import yd_15 from '../nessdesk/nueces16.jpg'
import yd_16 from '../nessdesk/nueces17.jpg'
import yd_17 from '../nessdesk/nueces18.jpg'
import yd_18 from '../nessdesk/nueces19.jpg'
import yd_19 from '../nessdesk/nueces20.jpg'
import yd_20 from '../nessdesk/nueces21.jpg'
import yd_21 from '../nessdesk/nueces22.jpg'
import yd_22 from '../nessdesk/nueces23.jpg'
import yd_23 from '../nessdesk/nueces24.jpg'
import yd_24 from '../nessdesk/nueces25.jpg'
import yd_25 from '../nessdesk/nueces26.jpg'
import yd_26 from '../nessdesk/nueces27.jpg'
import yd_27 from '../nessdesk/nueces28.jpg'
import yd_28 from '../nessdesk/nueces29.jpg'
import yd_29 from '../nessdesk/nueces30.jpg'
import yd_30 from '../nessdesk/nueces31.jpg'
import yd_31 from '../nessdesk/nueces32.jpg'
import yd_32 from '../nessdesk/nueces33.jpg'
import yd_33 from '../nessdesk/nueces34.jpg'
import yd_34 from '../nessdesk/nueces35.jpg'
import yd_35 from '../nessdesk/nueces36.jpg'
import yd_36 from '../nessdesk/nueces37.jpg'
import yd_37 from '../nessdesk/nueces38.jpg'
import {useWindowSize} from "../hooks/useWindowSize";
import bg from '../images/cielo.gif'
import gifigifi from "../images/ezgif.com-gif-maker.gif";

const $ = typeof window !== `undefined` ? require("../components/turn.js") : null

const Turn = props => {
    let fadeClass = useRef(null);
    
    useEffect(() => {
        if (fadeClass) {
            $(fadeClass).turn(Object.assign({}, props.options));
        }
        // 	//   document.addEventListener("keydown", handleKeyDown, false);
    }, [props.options]);
    
    return (
        <div
            className={[props.className, 'hard'].join(' ')}
            style={Object.assign({}, props.style)}
            ref={el => {
                fadeClass = el;
            }}
        >
            {props.children}
        </div>
    );
};

const dpages = [
    yd_0,
    yd_1,
    yd_2,
    yd_3,
    yd_4,
    yd_5,
    yd_6,
    yd_7,
    yd_8,
    yd_9,
    yd_10,
    yd_11,
    yd_12,
    yd_13,
    yd_14,
    yd_15,
    yd_16,
    yd_17,
    yd_18,
    yd_19,
    yd_20,
    yd_21,
    yd_22,
    yd_23,
    yd_24,
    yd_25,
    yd_26,
    yd_27,
    yd_28,
    yd_29,
    yd_30,
    yd_31,
    yd_32,
    yd_33,
    yd_34,
    yd_35,
    yd_36,
    yd_37
];

const options = {
    height: '100%',
    width: '100%',
    display: "double",
    acceleration: true,
    elevation: 50,
    gradients: true,
    autoCenter: true,
    duration: 1000,
};

const Home = ({style}) => {
    const {width} = useWindowSize()
    
    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        
        return () => {
            document.documentElement.style.overflow = 'auto'
        }
    }, []);
    
    return (
        <>
        <div style={{
            position: 'fixed',
            top: 0,
            left:0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: -1,
            background: `url(${bg}) center center no-repeat`,
            backgroundSize: 'cover'
        }}/>
            <audio src={nuts} autoPlay />
            <div className={style || "home_container"} style={style}>
                <div className="home_flipbook_container">
                    <Turn
                        options={options}
                        className="flipbook"
                        style={{transition: '0.6s'}}
                    >
                        {dpages.map((page, index) => (
                            <div key={index} className="page">
                                <img src={page} alt="" />
                            </div>
                        ))}
                    </Turn>
                </div>
            </div>
        </>
    );
};

export default Home;
