const ExtracurricularActivities = () => {
    return (
        <section className="min-h-screen py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-slate-800">Extracurricular Activities</h1>
                
                <div className="bg-white rounded-lg shadow-sm p-8">
                    {/* Leadership Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Leadership Roles</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-red-600 pl-4">
                                <h3 className="text-xl font-medium text-slate-800">Computer Science Club President</h3>
                                <p className="text-slate-600 mt-2">
                                    Led weekly meetings, organized coding workshops, and coordinated tech events on campus.
                                </p>
                            </div>
                            {/* Add more leadership roles as needed */}
                        </div>
                    </div>

                    {/* Community Involvement */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Community Involvement</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-red-600 pl-4">
                                <h3 className="text-xl font-medium text-slate-800">Tech Mentor</h3>
                                <p className="text-slate-600 mt-2">
                                    Volunteered as a mentor for first-year computer science students, providing guidance and support.
                                </p>
                            </div>
                            {/* Add more community involvement items */}
                        </div>
                    </div>

                    {/* Projects & Initiatives */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800">Projects & Initiatives</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-red-600 pl-4">
                                <h3 className="text-xl font-medium text-slate-800">Hackathon Organizer</h3>
                                <p className="text-slate-600 mt-2">
                                    Organized and led the annual college hackathon, managing a team of volunteers and coordinating with sponsors.
                                </p>
                            </div>
                            {/* Add more projects */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtracurricularActivities; 