function Card({ title, paragraph, imageUrl }) {
  return (
    <div className="space-y-2s border mx-auto shadow-lg rounded-lg">
      <img className="rounded-t-lg" src={imageUrl} alt={title} />
      <div className="space-y-3 p-7">
        <h1 className="text-2xl text-black font-semibold">{title}</h1>
        <p>{paragraph}</p>
        <button className="bg-blue-500 border-[2px] border-blue-500 px-5 py-[6px] rounded-lg text-white hover:bg-transparent hover:text-blue-500 transition-all duration-200 ease-in-out">
          Check Now
        </button>
      </div>
    </div>
  );
}

export default Card;
