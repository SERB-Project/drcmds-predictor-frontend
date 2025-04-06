import React from 'react';

const CollaboratorsAndContributors = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-5xl font-bold text-[#123265] mb-4">Collaborators and Contributors</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">Working together to advance research and development in computational biology and disease prediction</p>
        
        {/* Principal Investigator Card */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-lg p-8 shadow-md w-96 hover:shadow-xl transition-shadow border border-gray-100">
            <div className="h-72 overflow-hidden rounded-lg mb-6">
              <img 
                src="/profiles/chandraMohanSir2.jpg" 
                alt="Lead Contributor" 
                className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#123265] mb-2">Dr. Chandra Mohan Dasari</h3>
            <p className="text-gray-600 mb-4 font-medium">Principal Investigator</p>
            <p className="text-gray-500 mb-4 text-sm">Indian Institute of Information Technology, Sri City</p>
            <a 
              href="https://www.iiits.ac.in/people/regular-faculty/dr-chandra-mohan-d/" 
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#123265] rounded-md hover:bg-[#1a4080] transition-colors"
            >
              View Profile
            </a>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="h-56 overflow-hidden rounded-lg mb-4">
              <img 
                src="/profiles/varshitha.jpeg" 
                alt="Contributor 1" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-[#123265] mb-2">Varshitha Bammidi</h3>
            <p className="text-gray-600 mb-3 text-sm font-medium">Research Intern</p>
            <a 
              href="https://www.linkedin.com/in/varshitha-bammidi/" 
              className="inline-flex items-center text-[#123265] hover:text-[#1a4080] text-sm font-medium"
            >
              View Profile →
            </a>
          </div>

          {/* Apply the same pattern to other team members */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="h-56 overflow-hidden rounded-lg mb-4">
              <img 
                src="/profiles/sameera.png" 
                alt="Contributor 2" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-[#123265] mb-2">Sameera Kusala</h3>
            <p className="text-gray-600 mb-3 text-sm font-medium">Research Intern</p>
            <a 
              href="https://www.linkedin.com/in/sameera93/" 
              className="inline-flex items-center text-[#123265] hover:text-[#1a4080] text-sm font-medium"
            >
              View Profile →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="h-56 overflow-hidden rounded-lg mb-4">
              <img 
                src="/profiles/Chaitanyakiran_Kommuru.JPG" 
                alt="Chaitanyakiran Kommuru" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-[#123265] mb-2">Chaitanyakiran Kommuru</h3>
            <p className="text-gray-600 mb-3 text-sm font-medium">Developer</p>
            <a 
              href="#" 
              className="inline-flex items-center text-[#123265] hover:text-[#1a4080] text-sm font-medium"
            >
              View Profile →
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="h-56 overflow-hidden rounded-lg mb-4">
              <img 
                src="/profiles/meghna.jpg" 
                alt="Meghana" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-[#123265] mb-2">Meghana</h3>
            <p className="text-gray-600 mb-3 text-sm font-medium">Developer</p>
            <a 
              href="#" 
              className="inline-flex items-center text-[#123265] hover:text-[#1a4080] text-sm font-medium"
            >
              View Profile →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsAndContributors;