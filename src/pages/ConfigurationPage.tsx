import { useState } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { exportConfig, importConfig } from '../utils/configUtils';

const ConfigurationPage = () => {
  const [config, setConfig] = useState(portfolioConfig);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('portfolioConfig', JSON.stringify(config));
    alert('Configuration saved successfully!');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Portfolio Configuration</h1>
          <div className="space-x-4">
            <button
              onClick={() => exportConfig()}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Export Config
            </button>
            <label className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
              Import Config
              <input
                type="file"
                accept=".json"
                className="hidden"
                onChange={handleFileChange}
                onClick={(e) => {
                  if (selectedFile && e.target) {
                    (e.target as HTMLInputElement).value = '';
                    setSelectedFile(null);
                  }
                }}
              />
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  value={config.personal.name}
                  onChange={(e) => setConfig({
                    ...config,
                    personal: { ...config.personal, name: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Title</label>
                <input
                  type="text"
                  value={config.personal.title}
                  onChange={(e) => setConfig({
                    ...config,
                    personal: { ...config.personal, title: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  value={config.personal.email}
                  onChange={(e) => setConfig({
                    ...config,
                    personal: { ...config.personal, email: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Location</label>
                <input
                  type="text"
                  value={config.personal.location}
                  onChange={(e) => setConfig({
                    ...config,
                    personal: { ...config.personal, location: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-1">Bio</label>
                <textarea
                  value={config.personal.bio}
                  onChange={(e) => setConfig({
                    ...config,
                    personal: { ...config.personal, bio: e.target.value }
                  })}
                  className="w-full p-2 border rounded h-24"
                />
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-4">Social Links</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(config.personal.socialLinks).map(([platform, url]) => (
                <div key={platform}>
                  <label className="block mb-1 capitalize">{platform}</label>
                  <input
                    type="url"
                    value={url || ''}
                    onChange={(e) => setConfig({
                      ...config,
                      personal: {
                        ...config.personal,
                        socialLinks: {
                          ...config.personal.socialLinks,
                          [platform]: e.target.value
                        }
                      }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Theme Settings */}
          <section className="border-b pb-6">
            <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Primary Color</label>
                <input
                  type="color"
                  value={config.theme.primaryColor}
                  onChange={(e) => setConfig({
                    ...config,
                    theme: { ...config.theme, primaryColor: e.target.value }
                  })}
                  className="w-full p-1 border rounded h-10"
                />
              </div>
              <div>
                <label className="block mb-1">Dark Mode</label>
                <input
                  type="checkbox"
                  checked={config.theme.darkMode}
                  onChange={(e) => setConfig({
                    ...config,
                    theme: { ...config.theme, darkMode: e.target.checked }
                  })}
                  className="mt-2"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigurationPage; 