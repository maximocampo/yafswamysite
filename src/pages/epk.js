import React, {useContext, useEffect, useState} from 'react';
import Text from "../components/Text";
import {useWindowSize} from "../hooks/useWindowSize";
import goma from '../images/logobeinrosa.png'
import firebase from "gatsby-plugin-firebase"
import {TransCtx} from "../hooks/useTrans";
import rola from '../components/Snakesong Final Master.wav'
import Draggable from "react-draggable";

const EPK = () => {
    const [text, setText] = useState([])
    const {t} = useContext(TransCtx);
    const {width} = useWindowSize();
    
    useEffect(() => {
        (async () => {
            const thing = (await firebase.firestore().collection('epk').doc(t.lang).get()).data()
            
            setText(thing)
        })()
    }, [t.lang])
  
  return (
    <>
        <div
            style={{
                left: 0,
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/yafswamy-mainsite.appspot.com/o/Cover%20Art%20Ivana.jpg?alt=media&token=4b778ed4-5bad-4630-8f48-df37c4876213)',
            }}/>
      <div
        style={{
          left: 0,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'radial-gradient(circle, rgba(255,255,255,1) 66%, rgba(198,255,196,0) 98%)',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: width > 840 ? 600 : '100%',
            padding: '5%'
          }}
        >
          <Text style={{color: 'black', backgroundColor: 'none'}}>EPK</Text>
          <br/>
          <Text
            onClick={() => window.location.assign(`/${t.lang}epk.pdf`)}
            style={{textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#ff00ae'}
            noblack
          >(PDF)
          </Text>
          {Object.keys(text).sort().map(key => {
              
              if (text[key].includes('img::')) {
                  return <img src={text[key].split('::')[1]} alt=""/>
              }
              
              if (text[key].includes('a::')) {
                  return (
                      <>
                          <Text
                              noblack
                              onClick={() => window.location.assign(text[key].split('::')[1])}
                              style={{textAlign: 'justify', cursor: 'pointer'}}
                          >
                              {key === 'p1' ? text[key].split('::')[3].toUpperCase() : text[key].split('::')[2]}
                          </Text>
                          <br/>
                          <br/>
                      </>
                  )
              }
              
              return (
                      <>
                          <Text noblack style={{textAlign: 'justify'}}>
                              {key === 'p1' ? text[key].toUpperCase() : text[key]}
                          </Text>
                          <br/>
                          <br/>
                      </>
                  )
          })}
            <audio controls src={rola}></audio>
            <Text noblack noblack style={{ marginTop: 30}}>
            {t.epk.bio[3]}
          </Text>
          <br/>
          <br/>
          <Text noblack hover={'#ff00ae'} style={{textAlign: 'justify'}}>
            <a href="mailto:antonio.cueto96@gmail.com">{t.epk.bio[4]}</a>
            <></>
          </Text>
          <br/>
          <br/>
          <Text
              noblack
            onClick={() => window.location.assign('https://www.instagram.com/yafswamy/')}
            style={{textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#ff00ae'}
          >
            {t.epk.bio[5]}
          </Text>
          <br/>
          <br/>
          <Text
              noblack
            onClick={() => window.location.assign('https://www.facebook.com/yafswamy/')}
            style={{textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#ff00ae'}
          >
            {t.epk.bio[6]}
          </Text>
          <a href="https://goma.world">
            <img src={goma} alt="goma"/>
          </a>
        </div>
      </div>
        <Draggable>
            <div
                style={{
                    position: 'absolute', top:0 , left: 0,
                    height: width > 840 ? 170 * 1.5 : 170 / 2,
                    width: width > 840 ? 248 * 1.5 : 248 / 2,
                    cursor: 'grab',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/yafswamy-mainsite.appspot.com/o/logosnakesong.png?alt=media&token=7515391e-30c2-4a4e-be90-14cbecccd269)'
                }}
            />
        </Draggable>
    </>
  );
};

export default EPK;
