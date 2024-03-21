import Button from "./Button";

function Common({ heading, span, para, imageUrl, buttonText, redirectLink }) {
  return (
    <section className="w-[90%]  mx-auto flex justify-between items-center p-10">
      <div className="space-y-5">
        <div className="text-4xl">
          <h1>{heading}</h1>
          <h1 className="text-blue-500">{span}</h1>
        </div>
        <p className="text-lg">{para}</p>
        <div>
          <Button buttonText={buttonText} redirectLink={redirectLink} />
        </div>
      </div>
      <div>
        <img className="w-[600px] upDownAnimation" src={imageUrl} alt="Home" />
      </div>
    </section>
  );
}

export default Common;
