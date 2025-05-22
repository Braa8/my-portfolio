import Link from 'next/link';

export default function Card({ title, description, image, link }) {
  return (
    <div className=" shadow-lg rounded-2xl overflow-hidden max-w-sm w-full m-4 transition hover:scale-110 hover:cursor-pointer duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 bg-gray-700 object-cover">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white m-2">{description}</p>
        {link && (
          <Link href={link} className="inline-block m-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            
              See more →
            
          </Link>
        )}
      </div>
    </div>
  );
}
