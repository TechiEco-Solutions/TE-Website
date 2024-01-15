import React, { useState, useEffect } from 'react';
const FeatureCard = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <section className="card--container--mobile">
          <div className="img-content">
            <img className="card--image" src={props.image} alt="cardImage" />
          </div>
          <div className="card--content">
              <h1 className="card--heading">{props.heading}</h1>
              <p className="card--paragraph">{props.paragraph}</p>
          </div>
         
        </section>
      ) : (
        <section className="card--container">
          {props.image && (
            props.idx === 0 ? (
              <>
                <div className="img-content">
                  <img className="card--image" src={props.image} alt="cardImage" />
                  <div className="card--content">
                    <h1 className="card--heading">{props.heading}</h1>
                    <p className="card--paragraph">{props.paragraph}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="img-content">
                  <div className="card--content">
                    <h1 className="card--heading">{props.heading}</h1>
                    <p className="card--paragraph">{props.paragraph}</p>
                  </div>
                  <img className="card--image" src={props.image} alt="cardImage" />
                </div>
              </>
            )
          )}
        </section>
      )}
    </>
  );
};

export default FeatureCard;

