import React, {useState} from 'react';
import Text from "../components/Text"
import {useWindowSize} from "../hooks/useWindowSize";

const Music = () => {
  const {width} = useWindowSize()
  const [contact, setContact] = useState(false);
  
  const toggleContact = () => setContact(!contact);
  
  
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Text
          style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
          hover={'#ff00ae'}
          onClick={() => window.location.assign('/')}
        >
          ATRAS
        </Text>
        <Text
          style={{fontFamily: 'Business', fontSize: 20, textDecoration: 'underline', cursor: 'pointer'}}
          hover={'#ff00ae'}
          onClick={toggleContact}
        >
          CONTACTO
        </Text>
      </div>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: 20}}>
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
            width: 300,
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
  
      <iframe
          style={{border: 0, minWidth: 600,  height: 120}}
          src="https://bandcamp.com/EmbeddedPlayer/track=703087455/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
      >
        <a href="https://yafswamy.bandcamp.com/track/nueces">Nueces by yaf swamy</a>
      </iframe>
  
      <iframe
          style={{border: 0, minWidth: 600, height: 120}}
          src="https://bandcamp.com/EmbeddedPlayer/track=579221259/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless>
        <a href="https://yafswamy.bandcamp.com/track/snakesong">snakesong by yaf swamy</a>
      </iframe>
      
      <iframe
          style={{border: 0, width: 350, height: 470}}
          src="https://bandcamp.com/EmbeddedPlayer/album=1208154288/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless>
        <a href="https://yafswamy.bandcamp.com/album/en-vivo-desde-rufianes-y-amigos-vr">En Vivo Desde Rufianes y Amigos VR by yaf swamy</a>
      </iframe>
  
      
      <iframe
        width={width > 701 ? 700 : 700 / 2}
        height={width > 701 ? 400 : 400 / 2}
        src="https://www.youtube.com/embed/OofWsWST0I0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <iframe
        width={width > 701 ? 700 : 700 / 2}
        height={width > 701 ? 400 : 400 / 2}
        src="https://www.youtube.com/embed/5YjR8U5eKiw"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <iframe
        width={width > 701 ? 700 : 700 / 2}
        height={width > 701 ? 400 : 400 / 2}
        src="https://www.youtube.com/embed/5j7kFprn7PA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
      <iframe
        width={width > 701 ? 700 : 700 / 2}
        height={width > 701 ? 400 : 400 / 2}
        src="https://www.youtube.com/embed/zcifuajOsmA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: 20}}>
  
  
      <iframe
        style={{border: 0, width: 300, height: 500}}
        src="https://bandcamp.com/EmbeddedPlayer/album=57394450/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
        seamless>
        <a href="https://yafswamy.bandcamp.com/album/yerbo-flashbacks">
          yerbo flashbacks by yaf swamy
        </a>
      </iframe>
      <iframe
        src="https://open.spotify.com/embed/album/1J35u2Ec1LLB1NquJv5fPL"
        width="300"
        height={500}
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
      <iframe
        allow={{autoplay: '*', encryptedMedia: '*', fullscreen: '*'}}
        frameBorder="0"
        width={300}
        height={500}
        style={{overflow:'hidden', background:'transparent'}}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/album/yerbo-flashbacks-ep/1530274664"
      />
      <iframe
        id='AmazonMusicEmbedB08HCNVKDN'
        src='https://music.amazon.com/embed/B08HCNVKDN/?id=BMB97xJwfd&marketplaceId=ATVPDKIKX0DER&musicTerritory=US'
        width={300}
        height={500}
        style={{border:'1px solid rgba(0, 0, 0, 0.12)',}}
      />
      
    </div>
    </>
  );
};

export default Music;
