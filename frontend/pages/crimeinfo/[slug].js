import React from "react";
import { useRouter } from "next/router";

const Slug = ({ firs }) => {
  const router = useRouter();
  const { slug } = router.query;
  // console.log(firs,"firs")
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-4 sm:px-0 min-h-screen">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 mb-4 font-medium text-gray-900">
                Crime Details:
              </h3>
              <h3 className="text-lg mb-4 leading-6 font-medium text-gray-900">
                Fir.no : {slug}
              </h3>
              <p className="mt-1 font-semibold max-w-2xl text-sm text-gray-900">Crime Type: <span className="capitalize">{firs.attributes.complaintDetails.type}</span> </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">
                    Victim Details
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5">
                      <li className="mb-2">
                        <span className="font-medium">Name:</span> <span>{firs.attributes.complaintDetails.victim.name}</span>
                      </li>
                      <li className="mb-2">
                        <span className="font-medium">Age:</span> <span>{firs.attributes.complaintDetails.victim.age}</span>
                      </li>
                      <li>
                        <span className="font-medium">Gender:</span> <span>{firs.attributes.complaintDetails.victim.gender}</span>
                      </li>
                    </ul>
                  </dd>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">
                    Criminal Details
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5">
                      <li className="mb-2">
                        <span className="font-medium">Name:</span> <span>{firs.attributes.complaintDetails.criminal.name}</span>
                      </li>
                      <li className="mb-2">
                        <span className="font-medium">Age:</span> <span>{firs.attributes.complaintDetails.criminal.age}</span>
                      </li>
                      <li>
                        <span className="font-medium">Gender:</span> <span>{firs.attributes.complaintDetails.criminal.gender}</span>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  let a = await fetch(
    `${process.env.NEXT_PUBLIC_BHOST}/api/firs?filters[firno]=${context.query.slug}`
  );
  // console.log(context.query.slug, "abba");
  let fir = await a.json()
  let firs=fir.data[0]
  // console.log(firs);
  return {
    props: { firs }, // will be passed to the page component as props
  };
}
