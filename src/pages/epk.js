import React, {useState} from 'react';
import { graphql } from "gatsby"
import Text from "../components/Text";
import {useWindowSize} from "../hooks/useWindowSize";
import pic from '../images/Screen Shot 2021-02-08 at 19.24.24.png'
import goma from '../images/logobeinrosa.png'

const EPK = ({t, data:{allGoogleSheet1Row:{edges}}, currentLang}) => {
  const langs = {
    es: edges.map(e => e.node.epkes),
    en: edges.map(e => e.node.epken)
  };
  const text = langs[currentLang];
  
  const {width} = useWindowSize();
  
  return (
    <>
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
          background: 'radial-gradient(circle, rgba(255,255,255,1) 56%, rgba(198,255,196,1) 98%)',
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
          <Text>EPK</Text>
          <br/>
          <Text
            onClick={() => window.location.assign('/presskit.pdf')}
            style={{textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#ff00ae'}
          >(PDF)
          </Text>
          {text.map(text => text.includes('img::') ?
            <img src={text.split('::')[1]} alt=""/>
            :(
              <>
                <Text>{text}</Text>
                <br/>
                <br/>
              </>
            ))}
          <Text>
            {t.epk.bio[3]}
          </Text>
          <br/>
          <br/>
          <Text hover={'#ff00ae'}>
            <a href="mailto:antonio.cueto96@gmail.com">{t.epk.bio[4]}</a>
            <></>
          </Text>
          <br/>
          <br/>
          <Text
            onClick={() => window.location.assign('https://www.instagram.com/yafswamy/')}
            style={{textDecoration: 'underline', cursor: 'pointer'}}
            hover={'#ff00ae'}
          >
            {t.epk.bio[5]}
          </Text>
          <br/>
          <br/>
          <Text
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
    
    </>
  );
};

export const query = graphql`
  query {
    allGoogleSheet1Row {
      edges {
        node {
          epkes
          epken
        }
      }
    }
  }
`;

export default EPK;
