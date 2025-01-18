// app/detail/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

const DoaDetail = ({ params }) => {
  const { id } = params;
  const [doa, setDoa] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchDoaDetail = async () => {
      const response = await fetch(`https://open-api.my.id/api/doa/${id}`);
      const data = await response.json();
      setDoa(data);
    };

    fetchDoaDetail();
  }, [id]);

  if (!doa) {
    return (
      <div className="container mx-auto p-4 min-h-screen bg-green-50">
        <Navbar />
        <p className="text-center text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Navbar />
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <img
          src={`/images/doas/${id}.jpg`}
          alt={doa.judul}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4 text-green-700">{doa.judul}</h1>
        <p className="text-2xl text-gray-800 mb-2">{doa.arab}</p>
        <p className="text-lg italic text-gray-600 mb-4">{doa.latin}</p>
        <p className="text-base text-gray-700 mb-6">{doa.terjemah}</p>

        {/* Kembali Button */}
        <button
          onClick={() => router.back()}
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default DoaDetail;
