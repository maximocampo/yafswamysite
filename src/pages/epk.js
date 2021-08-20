import React, {useContext, useEffect, useState} from 'react';
import Text from "../components/Text";
import {useWindowSize} from "../hooks/useWindowSize";
import goma from '../images/logobeinrosa.png'
import firebase from "gatsby-plugin-firebase"
import {TransCtx} from "../hooks/useTrans";

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
                backgroundSize: 'cover',
                backgroundPositionY: '100%'
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
          background: 'radial-gradient(circle, rgba(255,255,255,0.95) 50%, rgba(198,255,196,0) 98%)',
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
              
              console.log(key === 'p1' ? text[key].toUpperCase() : text[key])
              
              return (
                      <>
                          <Text noblack style={{textAlign: 'justify'}} dangerouslySetInnerHTML>
                              {(key === 'p1' ? text[key].toUpperCase() : text[key]).toString()}
                          </Text>
                          <br/>
                          <br/>
                      </>
                  )
          })}
            {/*<audio controls src={rola}></audio>*/}
            <iframe
                src="https://open.spotify.com/embed/album/6vUotL3dBl5Pp4CYUtZiFc?theme=0"
                width="100%"
                height="380"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media" />
            <Text noblack noblack style={{ marginTop: 30}}>
            {t.epk.bio[3]}
          </Text>
          <br/>
          <br/>
          <Text noblack hover={'#ff00ae'} style={{textAlign: 'justify'}}>
            <a href="mailto:yafswamy@gmail.com">{t.epk.bio[4]}</a>
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
        {/*<Draggable>
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
        </Draggable>*/}
    </>
  );
};

export default EPK;
