// app/about/page.js
"use client";

import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto p-6 flex-1 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-700 mb-6">
          Tentang Kami
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-6 px-4 md:px-12">
          Kami adalah sebuah platform untuk menyediakan berbagai macam doa yang mudah diakses oleh siapa saja.
          Tujuan kami adalah untuk memudahkan umat dalam mencari doa yang dapat membantu dalam kehidupan sehari-hari
          mereka, baik dalam kondisi baik maupun buruk.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-6 px-4 md:px-12">
          Platform ini didirikan dengan niat untuk membantu memperkuat hubungan spiritual penggunanya melalui koleksi
          doa yang terus berkembang. Semua doa kami terverifikasi dan dirancang untuk memberikan kedamaian dan kenyamanan batin kepada mereka yang membacanya.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Visi Kami</h2>
          <p className="text-gray-700 px-4 md:px-12">
            Menjadi platform utama yang menyediakan sumber daya spiritual yang berharga bagi umat di seluruh dunia.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Misi Kami</h2>
          <p className="text-gray-700 px-4 md:px-12">
            Menyediakan akses mudah dan nyaman ke berbagai doa yang dapat membantu umat dalam situasi apapun.
            Kami juga berkomitmen untuk terus mengembangkan platform ini dengan penambahan doa dan fitur yang bermanfaat.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Tim Kami</h2>
          <p className="text-gray-700 px-4 md:px-12">
            Tim kami terdiri dari individu yang berdedikasi tinggi untuk memberikan pengalaman terbaik bagi pengguna kami. 
            Dengan latar belakang berbagai disiplin ilmu dan komitmen dalam memberikan konten yang berkualitas, kami berusaha menciptakan dampak positif di komunitas spiritual.
          </p>
        </div>

        <div className="mb-8 mt-10 bg-green-700 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Tentang Pengembang</h2>
          {/* Gambar Pengembang */}
        <div className="mb-10 mt-6">
          <img 
            src="/images/reva.jpg"  // Ganti dengan path gambar pengembang
            alt="Reva Rahma Nadira"
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
        </div>
        <p className="text-lg">
            Website ini dikembangkan oleh <span className="font-bold">Reva Rahma Nadira</span> - NRP: <span className="font-bold">221131004</span> -
            Prodi <span className="font-bold">Sistem Informasi</span> - <span className="font-bold">STIKI Malang</span>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
