import React from 'react';

const MovingShat = ({children, color, style, h1style, direction}) => (
  <div className={"marquee marquee" + direction} style={{
    width: '100%',
    borderTop: `2px ${color} solid`,
    borderBottom: `2px ${color} solid`,
    padding: '5px 0',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    ...style
  }}>
      <h1 style={{color, fontFamily: 'sans-serif', fontSize: '2.2rem', margin: 0, ...h1style}}>
        {children}
      </h1>
    </div>
);

const FooterNav = () => (
  <div style={{
    width: '100%',
    height: 90,
    padding: '15px 20px 0',
    borderTop: '2px black solid',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  }}>
    <h1 style={{fontStyle: 'italic', fontSize: '2rem', textDecoration: 'underline'}}>info</h1>
    <h1 style={{fontStyle: 'italic', fontSize: '2rem', textDecoration: 'underline'}}>contacto</h1>
    <h1 style={{fontStyle: 'italic', fontSize: '2rem', textDecoration: 'underline'}}>música</h1>
  </div>
);

const Italic = ({children, link}) =>
  <a href={link} style={{
    fontFamily: 'Courier New',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '3.1rem',
    textDecoration: 'underline'
  }}>{children}</a>;

const Home = () => {
  return (
    <div style={{padding: 0}}>
      <h1 style={{
        fontStyle: 'italic',
        textAlign: 'justify',
        paddingRight: 4
      }}>
        <Italic link="https://open.spotify.com/album/1J35u2Ec1LLB1NquJv5fPL">yaf swamy</Italic>{' '}
        es la nueva banda de la{' '}
        <Italic link="https://goo.gl/maps/eg8XSccJ7WmyaFyr6">cdmx</Italic>{' '}
        onda única y actual que ahora conoces,{' '}
        <Italic link="https://i1.wp.com/milimagenesdecumple.com/wp-content/uploads/2014/08/felicidades-dios-bendiga.jpg?w=462&ssl=1">
          felicidades
        </Italic>.
      </h1>
      <div style={{width: '100vw', marginTop: 80, marginBottom: 90}}>
        <MovingShat
          direction="right"
          color="red"
        >
          *no hay eventos próximos*
        </MovingShat>
        <MovingShat
          direction="left"
          color="#fff"
          style={{backgroundColor: '#2196f3', border: 'none'}}
        >
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline', marginRight: 100}}>bandcamp</a>
          <a href="https://www.instagram.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>instagram</a>
          <a href="https://www.facebook.com/yafswamy/" style={{textDecoration: 'underline', marginRight: 100}}>facebook</a>
          <a href="https://www.youtube.com/channel/UCO1wuw0U7DePxVNb4B15rIw" style={{textDecoration: 'underline', marginRight: 100}}>youtube</a>
          <a href="https://yafswamy.bandcamp.com/" style={{textDecoration: 'underline'}}>bandcamp</a>
        </MovingShat>
      </div>
      <FooterNav />
    </div>
  );
};

export default Home;
