interface NewsProps {
  image: string;
  title: string;
  desc: string;
  tag: string;
  date: string;
}

const FeaturedNews: React.FC<NewsProps> = ({
  image,
  title,
  desc,
  tag,
  date,
}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col">
    <img
      src={image}
      className="rounded-lg h-56 object-cover mb-6"
      alt={title}
    />
    <h3 className="text-xl font-bold text-[#3d1a1a] leading-snug mb-4">
      {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">{desc}</p>
    <div className="flex justify-between items-center py-4 border-t text-[10px] font-bold tracking-tighter uppercase">
      <span className="text-orange-600">🔥 {tag}</span>
      <span className="text-gray-400">{date}</span>
    </div>
    <button className="w-full py-4 text-sm font-bold text-black border-t border-gray-100 hover:bg-gray-50 transition">
      Read more →
    </button>
  </div>
);

export default FeaturedNews;




