interface CarProps {
  image: string;
  name: string;
  category: string;
  price: string;
  rating?: number;
  isRental?: boolean;
}

const CarCard: React.FC<CarProps> = ({
  image,
  name,
  category,
  price,
  rating = 4.9,
  isRental,
}) => (
  <div className="bg-[#4a4a4a] rounded-2xl overflow-hidden group">
    <div className="h-52 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-8 text-center text-white">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-400 text-xs mt-1 italic">({category})</p>
      <div className="flex justify-center items-center gap-1 text-yellow-500 my-3 text-sm">
        ★ <span>{rating} (512 Reviews)</span>
      </div>
      <p className="text-[10px] text-gray-400 mb-6 uppercase tracking-wider">
        📍 Downtown district, Cebu City
      </p>

      <div className="flex justify-center gap-2 mb-8">
        {["5 SEATS", "GAS", "AUTO"].map((spec) => (
          <span
            key={spec}
            className="bg-white text-black text-[9px] font-black px-3 py-1 rounded-md italic"
          >
            {spec}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-6">
        <span className="font-black text-lg">
          {price}
          {isRental ? "/day" : ""}
        </span>
        <button className="bg-white text-black px-6 py-2 rounded-lg text-xs font-bold hover:bg-gray-200 transition">
          See More
        </button>
      </div>
    </div>
  </div>
);

export default CarCard;




