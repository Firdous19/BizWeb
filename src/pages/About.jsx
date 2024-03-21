import Common from "../components/Common";

function About() {
  return (
    <div>
      <Common
        heading="Welcome to About Page"
        span="biZweB"
        para="We are a team of talented developers making websites"
        imageUrl="/images/About.png"
        buttonText="Contact Us"
        redirectLink="/contact"
      />
    </div>
  );
}

export default About;
