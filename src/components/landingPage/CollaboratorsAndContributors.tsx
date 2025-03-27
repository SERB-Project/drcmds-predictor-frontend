import React from 'react';

const CollaboratorsAndContributors = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-5xl font-bold text-[#123265] mb-8">Collaborators and Contributors</h2>
        <div className="flex justify-center mb-12">
          <div className="bg-[#f7f7f7] rounded-lg p-8 shadow-md w-80">
            <img src="https://example.com/lead-contributor.jpg" alt="Lead Contributor" className="object-cover w-full h-40 mb-4" />
            <h3 className="text-2xl font-bold text-[#123265] mb-2">Dr. Chandra Mohan Dasari</h3>
            <p className="text-gray-500 mb-4">Principal Investigator</p>
            <a href="https://johndoe.com" className="text-blue-600 hover:text-blue-800">Visit Website</a>
          </div>
        </div>
        <div className="flex justify-center gap-12">
          <div className="bg-[#f7f7f7] rounded-lg p-8 shadow-md w-80">
            <img src="https://example.com/contributor1.jpg" alt="Contributor 1" className="object-cover w-full h-40 mb-4" />
            <h3 className="text-2xl font-bold text-[#123265] mb-2">Varshitha Bammidi</h3>
            <p className="text-gray-500 mb-4">Intern</p>
            <a href="https://janesmith.com" className="text-blue-600 hover:text-blue-800">Visit Website</a>
          </div>
          <div className="bg-[#f7f7f7] rounded-lg p-8 shadow-md w-80">
            <img src="https://example.com/contributor2.jpg" alt="Contributor 2" className="object-cover w-full h-40 mb-4" />
            <h3 className="text-2xl font-bold text-[#123265] mb-2">Sameera Kusala</h3>
            <p className="text-gray-500 mb-4">Intern</p>
            <a href="https://bobjohnson.com" className="text-blue-600 hover:text-blue-800">Visit Website</a>
          </div>
          <div className="bg-[#f7f7f7] rounded-lg p-8 shadow-md w-80">
            <img src="/profiles/Chaitanyakiran_Kommuru.JPG" alt="Chaitanyakiran Kommuru" className="object-cover w-full h-40 mb-4" />
            <h3 className="text-2xl font-bold text-[#123265] mb-2">Chaitanyakiran Kommuru</h3>
            <p className="text-gray-500 mb-4">Developer</p>
            <a href="https://alicebrown.com" className="text-blue-600 hover:text-blue-800">Visit Website</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsAndContributors;