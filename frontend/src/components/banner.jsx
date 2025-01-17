import BannerImage from "../assets/baim-hanif-pYWuOMhtc6k-unsplash.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={BannerImage}
        alt="School Banner"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to Warka Academy
        </h1>
      </div>
    </div>
  );
};

export default Banner;
