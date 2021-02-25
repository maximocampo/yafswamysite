/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 *
 *
 *  bird:
 *  <Draggable
 start={{ x: 0, y: 0 }}
 >
 <div style={{width: 300, height: 300}}>
 <img src="https://lh3.googleusercontent.com/proxy/0q-VE0gskYhbyDt0w33eJx4Ji65K5bOKOqFW7VIbklZyMotKqn0lqdVmTgeq8c4pACo=s0-d" alt=""/>
 </div>
 </Draggable>
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import "./layout.css"
import SEO from "./seo";
import {TransCtx} from '../hooks/useTrans'
import es from '../i18n/es'
import en from "../i18n/en";
import Videow from "../images/Herblike Hoofs Video.mp4";
import gifigifi from "../images/ezgif.com-gif-maker.gif";
import {useWindowSize} from "../hooks/useWindowSize"

const Layout = ({ children }) => {
  const {width} = useWindowSize()
  const [t, setLang] = useState(es);
  const [muted, setMuted] = useState(true);
  
  const toggleLang = () => {
    setLang(t.lang === 'es' ? en : es);
  };
  
  return (
    <TransCtx.Provider value={{t}}>
      <SEO title="yaf swamy"/>
      <main>
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
            background: width > 840 || `url(${gifigifi}) center center no-repeat`,
            filter: 'invert(1) saturate(28.5) hue-rotate(444deg) brightness(0.8)',
            backgroundSize: width > 840 || 'cover'
          }}>
            {width > 840 &&
              <video
                autoPlay
                muted={muted}
                loop
                style={{width: 2000, height: 1800}}
              >
                <source src={Videow} type="video/mp4" />
              </video>
            }
          </div>
          {width > 840 &&
          <div onClick={() => setMuted(!muted)} style={{
            position: 'fixed',
            width: '50px',
            height: '50px',
            display: 'flex',
            right: 0,
            bottom: 80,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            borderRadius: '50%',
            margin: 10,
            cursor: 'pointer',
            zIndex: 1
          }}>
            {!muted
              ? <svg style={{fill: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path
                  d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z"/>
              </svg>
              : <svg style={{fill: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path
                  d="M19 7.358v15.642l-8-5v-.785l8-9.857zm3-6.094l-1.548-1.264-3.446 4.247-6.006 3.753v3.646l-2 2.464v-6.11h-4v10h.843l-3.843 4.736 1.548 1.264 18.452-22.736z"/>
              </svg>
            }
          </div>
          }
          {React.cloneElement(children, {t, currentLang: t.lang})}
          <div
            onClick={toggleLang}
            style={{
              height: 50,
              width: 50,
              position: 'fixed',
              bottom: 30,
              right: 10,
              borderRadius: 50,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backgroundColor: 'red',
              zIndex: 10
            }}
          >
            {t.lang === 'es' ? 'EN' : 'ES'}
          </div>
        </>
      </main>
    </TransCtx.Provider>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
