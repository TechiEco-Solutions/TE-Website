import hero_video from '../Assets/Hero-video.mp4';

const Hero = () => {
  return (
    <div className=" hero-section">

      <div className="text-content">
        <h1>Revolutionizing Waste Management</h1>
        <h4> The Smart Solution for a Cleaner Tomorrow </h4>
        <button className="cta-button">Get Started </button>
        <p>Click "Get Started" to learn more and be a part of the revolution.</p>
      </div>

      <div className="video-content">
        <video
          src={hero_video}
          autoPlay
          muted
        />
      </div>

      
    </div>
  )
}

export default Hero