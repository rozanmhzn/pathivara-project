import Link from 'next/link';
import React from 'react'

const JobCard = ({data, index}) => {

  return (
    <div className="bg-bgColor p-6 rounded-lg shadow-lg">
      <h3 className="text-xl text-HeadingColor font-semibold mb-2">
        {data?.title}
      </h3>
      <p className="text-textColor mb-4">{data?.description}</p>
      <Link href={`/career/${encodeURIComponent(data?.title)}`}>
        <span className="text-HeadingColor hover:underline cursor-pointer">
          Read More
        </span>
      </Link>
    </div>
  );
}

export default JobCard