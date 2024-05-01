export default function Card({img, link, price, name}) {
    return (
        <a href={link} className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md my-2">
            <img src={img} alt="product image" className="h-36 object-cover rounded-tl-md rounded-tr-md" />
            <div className="px-3 py-2">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm">${price}</p>
            </div>
        </a>
    )
}