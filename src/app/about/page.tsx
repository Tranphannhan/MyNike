export default function NikeIntro() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl bg-white rounded-2xl p-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Nike</h1>
          <p className="text-gray-700 mt-4 text-lg">
            Nike is a global leader in sportswear and innovation, providing athletes with high-quality footwear, apparel, and accessories. 
            Our mission is to bring inspiration and innovation to every athlete in the world. Whether youre a professional or just starting, Nike helps you perform at your best.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            Founded in 1964, Nike continues to push the boundaries of sports technology and design. From the revolutionary Air Max to sustainable initiatives, we are dedicated to shaping the future of sports.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            Join us in redefining excellence with cutting-edge gear and innovative solutions. Elevate your game with Nike today!
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 text-lg">
            Explore More
          </button>
        </div>
      </div>
    );
  }
  