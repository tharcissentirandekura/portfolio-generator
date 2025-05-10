
const Contact = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-700 mb-8 text-3xl">
                    I'm always interested in new opportunities and collaborations. Reach out to me!
                </p>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                    <a
                        href="https://www.linkedin.com/in/tharcisse-ntirandekura/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100 hover:border-blue-300 transition-colors"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                            alt="LinkedIn"
                            className="w-full h-full object-cover"
                        />
                    </a>

                    <a
                        href="https://github.com/tharcissentirandekura"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full overflow-hidden border-4 border-gray-100 hover:border-gray-300 transition-colors"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                            alt="GitHub"
                            className="w-full h-full object-cover"
                        />
                    </a>

                    <a
                        href="https://join.slack.com/t/tharcissentirandekura/shared_invite/zt-1234567890-abcdefghijklmnopqrstuvwxyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-100 hover:border-purple-300 transition-colors"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" 
                            alt="Slack"
                            className="w-full h-full object-cover"
                        />
                    </a>

                    <a
                        href="mailto:tharcissentira@gmail.com"
                        className="w-16 h-16 rounded-full overflow-hidden border-4 border-red-100 hover:border-red-300 transition-colors"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" 
                            alt="Gmail"
                            className="w-full h-full object-cover"
                        />
                    </a>

                    <a
                        href="tel:440-506-5881"
                        className="w-16 h-16 rounded-full overflow-hidden border-4 border-green-100 hover:border-green-300 transition-colors"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/455/455705.png" 
                            alt="Phone"
                            className="w-full h-full object-cover bg-green-500"
                        />
                    </a>

                    <a
                        href="https://wa.me/14405065881"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full overflow-hidden border-4 border-green-100 hover:border-green-300 transition-colors"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/124/124034.png" 
                            alt="WhatsApp"
                            className="w-full h-full object-cover"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/_tharack/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full overflow-hidden border-4 border-pink-100 hover:border-pink-300 transition-colors"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
                            alt="Instagram"
                            className="w-full h-full object-cover"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;