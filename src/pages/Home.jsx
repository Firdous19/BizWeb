import Common from "../components/Common";

function Home() {
  return (
    <div>
      <Common
        heading="Grow your business with"
        span="biZweB"
        para="We are a team of talented developers making websites"
        imageUrl="/images/homepage.png"
        buttonText="Get Started"
        redirectLink="/services"
      />
    </div>
  );
}

export default Home;
