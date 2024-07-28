import React from "react";
import { careerData } from "../../../../../public/constant/CareerData";
import Navbar from "@/app/components/partials/Navbar";
import Link from "next/link";

// Generate static paths for career pages
export async function generateStaticParams() {
  const paths = careerData.map((item) => ({
    id: (item.title), // Ensure the ID is encoded
  }));

  console.log(paths);
  return paths; // Return the paths directly
}

const CareerPage = ({ params }) => {
  const { id } = params;
  console.log(id);

  const decodedSlug = decodeURIComponent(id);
  console.log("Requested slug:", id);
  console.log("Decoded slug:", decodedSlug);

  const career = careerData.find(
    (item) => (item.title) === decodedSlug
  );

  if (!career) {
    return <div>Career not found</div>;
  }

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <header className="text-HeadingColor">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div>
            <h1 className="text-4xl font-bold">{career.title}</h1>
          </div>
        </div>
      </header>

      <section className="container mx-auto py-8 px-6">
        <p className="mb-8">{career.description}</p>

        <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
        <ul className="list-disc list-inside mb-4">
          {career.responsibilities.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
        <ul className="list-disc list-inside mb-8">
          {career.qualifications.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>

        <Link href="/career" className="text-HeadingColor hover:underline">
          Back to Careers
        </Link>
      </section>
    </div>
  );
};

export default CareerPage;

