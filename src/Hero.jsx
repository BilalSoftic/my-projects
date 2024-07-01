import image from './assets/bilal-softic.jpg';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Bilal Softić - my projects</h1>
          <p>
            Aspiring frontend software developer currently working on
            interactive, informative and educational projects that are available
            for everyone. Through these projects, I leverage my skills in
            front-end development to craft user-friendly interfaces and
            immersive digital experiences.
          </p>
        </div>
        <div className='img-container'>
          <img src={image} alt='BilalSoftic.svg' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
