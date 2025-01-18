"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

const Home = () => {
  const [doas, setDoas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;

  // Fetch data dari API
  useEffect(() => {
    const fetchDoas = async () => {
      const response = await fetch("https://open-api.my.id/api/doa");
      const data = await response.json();
      setDoas(data);
    };

    fetchDoas();
  }, []);

  // Filter pencarian berdasarkan judul doa
  const filteredDoas = doas.filter((doa) =>
    doa.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDoas = filteredDoas.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-green-500 to-blue-500 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center tracking-tight mb-8">
        Temukan Doa Harianmu dengan Mudah
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari doa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 p-4 rounded-lg shadow-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-transform transform hover:scale-105"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedDoas.map((doa) => (
          <Link href={`/detail/${doa.id}`} key={doa.id}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-green-50 transition transform hover:-translate-y-2">
              <img
                src={`/images/doas/${doa.id}.jpg`}
                alt={doa.judul}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg md:text-xl font-semibold text-green-700">
                {doa.judul}
              </h2>
            </div>
          </Link>
        ))}
      </div>
        <div className="mt-8 text-center">
          <Pagination
            totalItems={filteredDoas.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
