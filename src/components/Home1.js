import './home.css'
import React, {useContext, useState} from 'react';
import {TransCtx} from '../hooks/useTrans';
import Gif from '../images/ezgif.com-gif-maker2.gif'
import Draggable from "react-draggable";
import {useWindowSize} from "../hooks/useWindowSize";
import blood from "../images/bloodgif.gif";

export const Text = ({render, children, style, left, top, width, span, hover, height, ...props}) => {
  const [_hover, setHover] = useState(false);
  const [contact, setContact] = useState(false);
  
  
  const hoverOn = () => setHover(true);
  const hoverOff = () => setHover(false);
  const toggleContact = () => setContact(!contact);
  
  const contstyles = {
    position: left || top ? 'absolute' : 'static',
    left: typeof left === 'string' ? left : `${left}%`,
    top: typeof top === 'string' ? top : `${top}%`,
    width: width ? `${width}px` : 'fit-content',
    height: height ? `${height}px` : 'fit-content',
    zIndex: 1,
    ...style
  };
  
  const textstyles = {
    fontSize: 16,
    fontFamily: 'Business',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,1)',
    color: hover ? (_hover ? hover : '#E91E63') : '#E91E63',
    marginBottom: 6,
  };
  
  return typeof children === 'string'
    ? <span onMouseEnter={hoverOn} onMouseLeave={hoverOff} style={{...textstyles, ...contstyles}} {...props}>{children}</span>
    : <div style={contstyles}>
      <p>
        {children.map(w => {
          return span ? <>
              <span style={{...textstyles, lineHeight: 1.5}} {...props}>{w}</span>
            </>
            : <p {...props}><span style={{...textstyles, lineHeight: 1.5}}>{w}</span></p>
        })}
      </p>
    </div>
};

const Home = () => {
  const [contact, setContact] = useState(false);
  const {t} = useContext(TransCtx);
  const toggleContact = () => setContact(!contact);
  const {width} = useWindowSize()
  
  return (
    <>
      {contact &&
      <div
        onClick={toggleContact}
        style={{
          position: 'fixed',
          top: 0,
          left:0,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
        <div
          style={{
            border: '2px dashed white',
            height: 200,
            zIndex: 100,
            width: 300,
            backgroundColor: 'black',
            color: 'white',
            padding: 20,
            pointerEvents: 'none'
          }}>
          <p>contact</p>
          <p>management / booking: <a style={{pointerEvents: 'auto'}} href="mailto:antonio.cueto96@gmail.com">
            antonio.cueto96@gmail.com
          </a></p>
          <p>inquiries: <a style={{pointerEvents: 'auto'}} href="mailto:yafswamy@gmail.com">
            yafswamy@gmail.com
          </a></p>
        </div>
      </div>
      }
      <div style={{
        padding: 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div
          className="encientramw"
          style={{
            position: 'fixed',
            width: '100vw',
            height: 200,
            backgroundImage: `url(${blood})`}}/>
        <Text
          left={47}
          style={{marginTop: 10}}
          span
        >
          <span style={{marginTop: 10, textDecoration: 'line-through'}}>yaf</span>
          <span style={{color: 'red'}}>{' '}anti{' '}</span> swamy
        </Text>
        <p className="home-text-1">
          <Text>{t.index.desc[0]}</Text>
          {' '}
          <Text
            onClick={() => window.location.assign('https://goo.gl/maps/eg8XSccJ7WmyaFyr6')}
            style={{textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#2bb9da'}
          >
            {t.index.desc[1]}
          </Text>
          {' '}
          <Text>{t.index.desc[2]}</Text>
          {' '}
          <Text
            onClick={() => window.location.assign('https://i1.wp.com/milimagenesdecumple.com/wp-content/uploads/2014/08/felicidades-dios-bendiga.jpg?w=462&ssl=1')}
            style={{textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#2bb9da'}
          >
            {t.index.desc[3]}
          </Text>
        </p>
        <Text
          className="home-text-2"
          left={width > 840 ? 12 : null}
          top={width > 840 ? "160px" : null}
          width={width > 840 ? 400 : null}>{t.index.bio.slice(0, 1)}</Text>
        <Text
          className="home-text-2"
          left={width > 840 ? 8 : null}
          top={width > 840 ? "402px" : null}
          width={width > 840 ? 300:null}>{t.index.bio.slice(1, 2)}</Text>
        <Text
          className="home-text-2"
          top={width > 840 ? "550px" : null}
          left={width > 840 ? 10 : null}
          width={width > 840 ? "300px":null}>{t.index.bio.slice(2, 3)}</Text>
        <Text
          className="home-text-2"
          left={width > 840 ? 12 : null}
          top={width > 840 ? "640px" : null}
          width={width > 840 ? 300 :null}>{t.index.bio.slice(3, 4)}</Text>
        
        <div style={{
          position: width > 840 ? 'absolute' : 'static',
          display: 'flex',
          top: width > 840 ? '35vh' : 800,
          left: '50vw' ,
          justifyContent: 'center',
          marginLeft: width > 840 ? -170 : 0,
          alignItems: 'center',
          cursor:'pointer',
          width: '100',
          zIndex: 10
        }}>
          <img style={{filter: 'sepia(1) invert(1) hue-rotate(-46deg) saturate(4)'}} width={280} height={280} src={Gif} alt="" onClick={() => window.location.assign('https://yafswamy.bandcamp.com/')}/>
        </div>
        
        <div style={{position: 'relative', marginTop: width > 840 ? -90 : -160, marginLeft: width > 840 ? 0 : -200, width: '100vw'}}>
          <Text
            onClick={() => window.location.assign('https://www.instagram.com/yafswamy/')}
            left={60}
            top="160px"
            style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#2bb9da'}
          >
            INSTAGRAM
          </Text>
          <Text
            onClick={() => window.location.assign('https://www.facebook.com/yafswamy/')}
            left={74}
            top="260px"
            style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#2bb9da'}
          >
            FACEBOOK
          </Text>
          <Text
            onClick={() => window.location.assign('https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw')}
            left={64}
            top="360px"
            style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#2bb9da'}
          >
            YOUTUBE
          </Text>
          <Text
            onClick={() => window.location.assign('https://yafswamy.bandcamp.com/')}
            left={62}
            top="410px"
            style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#2bb9da'}
          >
            BANDCAMP
          </Text>
          <Text
            left={82}
            top="500px"
            style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#2bb9da'}
            onClick={() => window.location.assign('/musicaca')}
          >
            {t.footer.music}
          </Text>
          <Text
            left={70}
            top="570px"
            style={{fontFamily: 'Business', fontSize: 30, textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#2bb9da'}
            onClick={toggleContact}
          >
            {t.footer.contact}
          </Text>
        </div>
        <div style={{position: 'absolute'}}>
          <div style={{width: '100vw', height: width > 840 ? 1400 : 2000}}>
            <Draggable bounds="parent">
              <div
                style={{
                  position: 'absolute', top: width > 840 ? '84vh' : 654 * 2.5, left: '4vw',
                  width: width > 840 ? 225 * 1.5 : 225 / 2,
                  height: width > 840 ? 400 * 1.5 : 400 / 2,
                  cursor: 'grab',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: 'url(https://lh3.google.com/u/2/d/1RlAelRXnaRWMK7KuRDzwwJEK7_xkeQmJ=w2880-h1596-iv1)'
                }}
              />
            </Draggable>
            <Draggable bounds="parent">
              <div
                style={{
                  position: 'absolute', top: width > 840 ? '80vh' : 650 * 2.5, left: '19vw',
                  width: width > 840 ? 200 * 1.5 : 200 / 2,
                  height: width > 840 ? 134 * 1.5 : 134 / 2,
                  cursor: 'grab',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: 'url(https://lh3.google.com/u/2/d/1h-8uZJvUjDzkAZXcYPXMxwLqrIupIyRB=w2256-h1596-iv1)'
                }}
              />
            </Draggable>
            <Draggable bounds="parent">
              <div
                style={{
                  position: 'absolute', top: width > 840 ? '90vh' : 660 * 2.5, left: '30vw',
                  width: width > 840 ? 226 * 1.5 : 226 / 2,
                  height: width > 840 ? 400 * 1.5 : 400 / 2,
                  cursor: 'grab',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: 'url(https://lh3.google.com/u/2/d/1GJnOoywsH4ZLHoVv7yp5wrWcg8_NIPYV=w2880-h1596-iv1)'
                }}
              />
            </Draggable>
            <Draggable bounds="parent">
              <div
                style={{
                  position: 'absolute', top: width > 840 ? '97vh' : 667 * 2.5, left: '52vw',
                  width: width > 840 ? 214 * 1.5 : 214 / 2,
                  height: width > 840 ? 120 * 1.5 : 120 / 2,
                  cursor: 'grab',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: 'url(https://lh3.google.com/u/2/d/1hCpK84RPkvuZSDSvsw0XZNSZSn6UBAxz=w2880-h1596-iv1)'
                }}
              />
            </Draggable>
            <Draggable bounds="parent">
              <div
                style={{
                  position: 'absolute', top: width > 840 ? '90vh' : 650 * 2.5, left: '54vw',
                  width: width > 840 ? 302 * 1.5 : 302 / 2,
                  height: width > 840 ? 140 * 1.5 : 140 / 2,
                  cursor: 'grab',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: 'url(https://lh3.google.com/u/2/d/1W4FOq8ol5StAR9GP8Ipz2u2kgVAOVnHc=w2880-h1596-iv1)'
                }}
              />
            </Draggable>
            <Draggable bounds="parent">
              <div
                style={{
                  position: 'absolute', top: width > 840 ? '120vh' : 690 * 2.6, left: '42vw',
                  width: width > 840 ? 302 * 1.5 : 302 / 2,
                  height: width > 840 ? 170 * 1.5 : 170 / 2,
                  cursor: 'grab',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: 'url(https://lh3.google.com/u/2/d/13ib2h8-TAYIHktasU-jo3FKdmjOEbfEx=w2880-h1596-iv1)'
                }}
              />
            </Draggable>
            <Draggable bounds="parent">
              <div
                style={{
                  position: 'absolute', top: width > 840 ? '120vh' : 690 * 2.5, left: '40vw',
                  height: width > 840 ? 170 * 1.5 : 170 / 2,
                  width: width > 840 ? 248 * 1.5 : 248 / 2,
                  cursor: 'grab',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: 'url(https://lh3.google.com/u/2/d/1e3x3NU7joX9yepVZ1IVj4Uj_kgc8h5Rq=w2880-h1596-iv1)'
                }}
              />
            </Draggable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
