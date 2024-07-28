
import React from "react";
import { profiles } from "../../../../../public/constant/ProfileData";
import ClientCV from "@/app/components/ClientCV";

export async function generateStaticParams() {
  // Generate static paths based on available data
  const paths = profiles.map((profile) => ({
    CV: (profile.name),
  }));
  console.log(paths);

  return paths;
}

const CV = ({ params }) => {
  const { CV } = params;
  const titleToFind = decodeURIComponent(CV);
  
console.log("Requested slug:", CV);
console.log("Decoded slug:", titleToFind);

  const index = profiles.findIndex((item) => item.name === titleToFind);
  console.log(index);

  if (index === -1) {
    return <div>Profile not found</div>;
  }

  const profile = profiles[index];

  return <ClientCV profile={profile} />;
};

export default CV;
