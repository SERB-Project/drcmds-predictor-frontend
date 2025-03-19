"use client";
import React from 'react';

const CollaboratorsAndContributors = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-5xl font-bold text-[#123265] mb-8">Collaborators and Contributors</h2>
        <div className="flex justify-center gap-12">
          <div className="w-1/2 bg-[#f7f7f7] rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#123265] mb-4">Collaborators</h3>
            <p className="text-gray-500">
              Collaborator 1<br />
              Collaborator 2<br />
              Collaborator 3
            </p>
          </div>
          <div className="w-1/2 bg-[#f7f7f7] rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#123265] mb-4">Contributors</h3>
            <p className="text-gray-500">
              Contributor 1<br />
              Contributor 2<br />
              Contributor 3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsAndContributors;
