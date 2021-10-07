import './home.css'
import React, {useContext, useState, useEffect} from 'react';
import {TransCtx} from '../hooks/useTrans';
import Gif from '../images/3dgifmaker45045.gif'
import Draggable from "react-draggable";
import {useWindowSize} from "../hooks/useWindowSize";
import Text from "./Text";
import firebase from "gatsby-plugin-firebase"

const Home = () => {
  const [contact, setContact] = useState(false);
  const [text, setText] = useState({});
  const {t} = useContext(TransCtx);
  const toggleContact = () => setContact(!contact);
  const {width} = useWindowSize()
  
  useEffect(() => {
    (async () => {
        //const thing6 = await firebase.firestore().collection('emails').get();
        //const emails = thing6.docs.map(doc => doc.data().email);
        //
        //
        //  function remove_duplicates(array_){
        //      var ret_array = new Array();
        //      for (var a = array_.length - 1; a >= 0; a--) {
        //          for (var b = array_.length - 1; b >= 0; b--) {
        //              if(array_[a] == array_[b] && a != b){
        //                  delete array_[b];
        //              }
        //          };
        //          if(array_[a] != undefined)
        //              ret_array.push(array_[a]);
        //      };
        //      return ret_array;
        //  }
        const thing = await firebase.firestore().collection('content').doc(t.lang).get()
        const {home} = thing.data()
        
        setText(home)
    })()
  }, [t.lang])
  
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
            height: 135,
            zIndex: 100,
            width: 400,
            backgroundColor: 'black',
            color: 'white',
            padding: 20,
            pointerEvents: 'none'
          }}>
          <p>contact</p>
          <p>
              management / booking / inquiries:
              <br/>
              <a style={{pointerEvents: 'auto'}} href="mailto:yafswamy@gmail.com">
                  yafswamy@gmail.com
              </a>
          </p>
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
      <Text left={47} style={{marginTop: 10}}>yaf swamy</Text>
      <p className="home-text-1">
        <Text>{t.index.desc[0]}</Text>
        {' '}
        <Text
          onClick={() => window.location.assign('https://goo.gl/maps/eg8XSccJ7WmyaFyr6')}
          style={{textDecoration: 'underline', cursor: 'pointer'}}
          hover={'#ff00ae'}
        >
          {t.index.desc[1]}
        </Text>
        {' '}
        <Text>{t.index.desc[2]}</Text>
        {' '}
        <Text
          onClick={() => window.location.assign('https://i1.wp.com/milimagenesdecumple.com/wp-content/uploads/2014/08/felicidades-dios-bendiga.jpg?w=462&ssl=1')}
          style={{textDecoration: 'underline', cursor: 'pointer'}}
          hover={'#ff00ae'}
        >
          {t.index.desc[3]}
        </Text>
      </p>
      <Text
        className="home-text-2"
        left={width > 840 ? 12 : null}
        top={width > 840 ? "160px" : null}
        width={width > 840 ? 400 : null}>{[text.p1]}</Text>
      <Text
        className="home-text-2"
        left={width > 840 ? 8 : null}
        top={width > 840 ? "402px" : null}
        width={width > 840 ? 300:null}>{[text.p2]}</Text>
      <Text
        className="home-text-2"
        top={width > 840 ? "550px" : null}
        left={width > 840 ? 10 : null}
        width={width > 840 ? "300px":null}>{[text.p3]}</Text>
      <Text
        className="home-text-2"
        left={width > 840 ? 12 : null}
        top={width > 840 ? "640px" : null}
        width={width > 840 ? 300 :null}>{[text.p4]}</Text>
  
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
        <img width={350} height={350} src={Gif} alt="" onClick={() => window.location.assign('https://yafswamy.bandcamp.com/')}/>
      </div>
      
      <div style={{position: 'relative', marginTop: width > 840 ? -90 : -160, marginLeft: width > 840 ? 0 : -200, width: '100vw'}}>
        <Text
        onClick={() => window.location.assign('https://www.instagram.com/yafswamy/')}
        left={60}
        top="190px"
        style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
        hover={'#ff00ae'}
      >
        INSTAGRAM
      </Text>
      <Text
        onClick={() => window.location.assign('https://www.facebook.com/yafswamy/')}
        left={74}
        top="260px"
        style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
        hover={'#ff00ae'}
      >
        FACEBOOK
      </Text>
      <Text
        onClick={() => window.location.assign('https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw')}
        left={64}
        top="360px"
        style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
        hover={'#ff00ae'}
      >
        YOUTUBE
      </Text>
      <Text
        onClick={() => window.location.assign('https://yafswamy.bandcamp.com/')}
        left={62}
        top="410px"
        style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
        hover={'#ff00ae'}
      >
        BANDCAMP
      </Text>
      <Text
        left={82}
        top="500px"
        style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
        hover={'#ff00ae'}
        onClick={() => window.location.assign('/musicaca')}
      >
        {t.footer.music}
      </Text>
      <Text
        left={70}
        top="570px"
        style={{fontFamily: 'Business', fontSize: 30, textDecoration: 'underline', cursor: 'pointer'}}
        hover={'#ff00ae'}
        onClick={toggleContact}
      >
        {t.footer.contact}
      </Text>
      <Text
        left={60}
        top="630px"
        style={{fontFamily: 'Business', fontSize: 30, textDecoration: 'underline', cursor: 'pointer'}}
        hover={'#ff00ae'}
        onClick={() => window.location.assign('/dametumail')}
      >
        {t.footer.email}
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
              backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1jfej9oSnoKhSNpsKL1nkWckZRxGulJYA)'
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
              backgroundImage: 'url(https://drive.google.com/uc?export=view&id=19R0l7jeT3VcGYXH5VCbSyOVsAycV1oPk)'
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
              backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1xSQbdZRbUJKv4eMUV9Qm1BC52WC0jmf-)'
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
              backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1hW0er4DTadxFZnDINMqh7WyCQwaaKOE5)'
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
              backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1bS83RPFULEjS73TixOScbFF5bW-aIdv-)'
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
              backgroundImage: 'url(https://drive.google.com/uc?export=view&id=112UO7FqFH1WF4rdKBECB3UGwclI1K3e5)'
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
              backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1sjEhj_9sK7_5Z9akxXrbBcJF3WyZmjxs)'
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
