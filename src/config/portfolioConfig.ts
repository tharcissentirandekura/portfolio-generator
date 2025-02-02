interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    email: string;
    location: string;
    bio: string;
    avatar: string;
    socialLinks: {
      github?: string;
      linkedin?: string;
      twitter?: string;
      [key: string]: string | undefined;
    };
  };
  
  skills: {
    category: string;
    items: {
      name: string;
      icon?: string;
      proficiency?: number;
    }[];
  }[];

  projects: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    sourceUrl?: string;
  }[];

  education: {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description?: string;
  }[];

  theme: {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    darkMode: boolean;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Tharcisse Ntirandekura",
    title: "Software Developer",
    email: "your.email@example.com",
    location: "Your Location",
    bio: "Your professional summary here...",
    avatar: "/path-to-avatar.jpg",
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
    }
  },
  
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", proficiency: 90 },
        { name: "TypeScript", proficiency: 85 },
        // Add more skills...
      ]
    },
    // Add more categories...
  ],

  projects: [
    {
      title: "Project Name",
      description: "Project description here...",
      image: "/path-to-project-image.jpg",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://project-url.com",
      sourceUrl: "https://github.com/username/project"
    },
    // Add more projects...
  ],

  education: [
    {
      institution: "University Name",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      startDate: "2018",
      endDate: "2022",
      description: "Relevant coursework and achievements..."
    },
    // Add more education...
  ],

  theme: {
    primaryColor: "#3B82F6",
    secondaryColor: "#1F2937",
    fontFamily: "Inter, sans-serif",
    darkMode: true
  }
}; 