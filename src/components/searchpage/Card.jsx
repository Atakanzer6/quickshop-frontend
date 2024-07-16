export default function Card({ img, link, price, name }) {
  return (
    <div className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg   my-2 mx-2 max-w-xs">
      <div className="relative self-center ">
        <img
          className="h-36 object-scale-down rounded-tl-md rounded-tr-md"
          src={img}
          alt="Product Image"
        />
      </div>
      <hr />
      <p className="text-gray-600 text-sm m-4 mb-auto">{name}</p>
      <div className="p-4">
        {/* <h3 className="text-lg font-medium mb-2">Product Title</h3> */}
        <div className="flex items-center justify-between ">
          {price ? (
            <span className="font-bold text-lg">${price}</span>
          ) : (
            <p className="text-gray-600 text-xs  m-3 mb-auto">
              No featured offers avaliable.
            </p>
          )}
          <a href={link} target="_blank">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
