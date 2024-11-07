import { Link } from 'react-router-dom';

const Animation = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative">
        <Link
          to="/"
          className="relative top-4 left-4 text-lg cursor-pointer"
        >
          ← Back to Home
        </Link>
      </div>
      {/* Content Halaman Design */}
      <div className="p-4 mt-16">
        <h1 className="text-2xl font-bold ">Animation Page</h1>
        {/* Isi halaman lainnya */}
      </div>
    </div>
  );
};

export default Animation;
