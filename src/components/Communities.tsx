

/**
 * 
 * @returns The Community component that displays the communities
 * and organizations that I am a part of.
 */
const Community = () => {
    const organizations = [
        {
            name:"Tujenge Scholars Program",
            position: "Scholar Alumna",
            // description: "A scholarship program that supports high-achieving, low-income students in Kenya.",
            image: "",
            background:"bg-gradient-to-br from-blue-500 to-blue-700"
            
        },
        {
            name: "Oberlin College",
            position: "Strengths Ambassador",
            description: "Promote the CliftonStrengths assessment to students and staff, and facilitate workshops to help students understand their strengths.",
            image: "" ,// Add image path
            background:"bg-gradient-to-br from-blue-500 to-blue-700"
        },
        {
            name: "ColorStack",
            position: "Member",
            description: "A student organization that promotes diversity and inclusion in the Computer Science department.",
            image: "", // Add image path,
            background:"bg-gradient-to-br from-blue-500 to-blue-700"
        },
        {
            name: "X-Possible",
            position: "Fellow",
            description: "",
            image: "", // Add image path
            background:"bg-gradient-to-br from-blue-500 to-blue-700"
        },
    ];

    return (
        <section className="py-10 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Communities & Organizations
                </h2>
                
                <p className="text-center text-gray-600 mb-12">
                    Communities of passionate individuals making an impact that I am a part of.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {organizations.map((org, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg shadow-md text-red-500 p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="h-5 mb-4">
                                {org.image && (
                                    <img 
                                        src={org.image} 
                                        alt={org.name}
                                        className="h-full object-contain mx-auto"
                                    />
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-2">{org.name}</h3>
                            <p className="text-gray-600 font-medium text-center mb-2">{org.position}</p>
                            {/* <p className="text-gray-500 text-center text-sm">{org.description}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;