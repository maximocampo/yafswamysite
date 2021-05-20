import './nueces.css'
import React, { useRef, useEffect} from "react";
import $ from "../components/turn.js"
import ym_0 from '../nesss/nueces.jpg'
import ym_1 from '../nesss/nueces2.jpg'
import ym_2 from '../nesss/nueces3.jpg'
import ym_3 from '../nesss/nueces4.jpg'
import ym_4 from '../nesss/nueces5.jpg'
import ym_5 from '../nesss/nueces6.jpg'
import ym_6 from '../nesss/nueces7.jpg'
import ym_7 from '../nesss/nueces8.jpg'
import ym_8 from '../nesss/nueces9.jpg'
import ym_9 from '../nesss/nueces10.jpg'
import ym_10 from '../nesss/nueces11.jpg'
import ym_11 from '../nesss/nueces12.jpg'
import ym_12 from '../nesss/nueces13.jpg'
import ym_13 from '../nesss/nueces14.jpg'
import ym_14 from '../nesss/nueces15.jpg'
import ym_15 from '../nesss/nueces16.jpg'
import ym_16 from '../nesss/nueces17.jpg'
import ym_17 from '../nesss/nueces18.jpg'
import ym_18 from '../nesss/nueces19.jpg'
import ym_19 from '../nesss/nueces20.jpg'
import ym_20 from '../nesss/nueces21.jpg'
import ym_21 from '../nesss/nueces22.jpg'
import ym_22 from '../nesss/nueces23.jpg'
import ym_23 from '../nesss/nueces24.jpg'
import ym_24 from '../nesss/nueces25.jpg'
import ym_25 from '../nesss/nueces26.jpg'
import ym_26 from '../nesss/nueces27.jpg'
import ym_27 from '../nesss/nueces28.jpg'
import ym_28 from '../nesss/nueces29.jpg'
import ym_29 from '../nesss/nueces30.jpg'
import ym_30 from '../nesss/nueces31.jpg'
import ym_31 from '../nesss/nueces32.jpg'
import ym_32 from '../nesss/nueces33.jpg'
import ym_33 from '../nesss/nueces34.jpg'
import ym_34 from '../nesss/nueces35.jpg'
import ym_35 from '../nesss/nueces36.jpg'
import ym_36 from '../nesss/nueces37.jpg'
import ym_37 from '../nesss/nueces38.jpg'
import {useWindowSize} from "../hooks/useWindowSize";

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



const pages = [
    ym_0,
    ym_1,
    ym_2,
    ym_3,
    ym_4,
    ym_5,
    ym_6,
    ym_7,
    ym_8,
    ym_9,
    ym_10,
    ym_11,
    ym_12,
    ym_13,
    ym_14,
    ym_15,
    ym_16,
    ym_17,
    ym_18,
    ym_19,
    ym_20,
    ym_21,
    ym_22,
    ym_23,
    ym_24,
    ym_25,
    ym_26,
    ym_27,
    ym_28,
    ym_29,
    ym_30,
    ym_31,
    ym_32,
    ym_33,
    ym_34,
    ym_35,
    ym_36,
    ym_37
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
            <div className="home_container" style={style}>
                <div className="home_flipbook_container">
                    <Turn
                        options={options}
                        className="flipbook"
                        style={{transition: '0.6s'}}
                    >
                        {pages.map((page, index) => (
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
