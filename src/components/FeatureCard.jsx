export default function FeatureCard(props){
    return (
        <section className="card--container">
          {props.image && (
            (props.idx  === 0) ? (
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
      );
      
}
