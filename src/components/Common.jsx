import Button from "./Button";

function Common({ heading, span, para, imageUrl, buttonText, redirectLink }) {
  return (
    <section className="md:w-[90%] mx-auto flex custom:flex-col-reverse justify-between items-center p-8 mt-5">
      <div className="space-y-5 p-5">
        <div className="text-4xl">
          <h1>{heading}</h1>
          <h1 className="text-blue-500">{span}</h1>
        </div>
        <p className="text-lg">{para}</p>
        <div>
          <Button buttonText={buttonText} redirectLink={redirectLink} />
        </div>
      </div>
      <div className="custom:mb-10">
        <img className="w-[600px] upDownAnimation" src={imageUrl} alt="Home" />
      </div>
    </section>
  );
}

export default Common;
