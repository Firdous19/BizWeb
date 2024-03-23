import { Card } from "../components/index";
import services from "../api/services";

function Services() {
  return (
    <div>
      <div className="text-5xl mb-12 text-center my-5">
        <h1>Services</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-[90%] mx-auto">
        {services.map((service) => {
          const { title, paragraph, imageUrl } = service;
          return (
            <Card
              key={title}
              title={title}
              paragraph={paragraph}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
