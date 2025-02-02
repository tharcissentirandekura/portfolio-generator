export const exportConfig = () => {
  const config = localStorage.getItem('portfolioConfig');
  if (!config) return;

  const blob = new Blob([config], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio-config.json';
  a.click();
  URL.revokeObjectURL(url);
};

export const importConfig = async (file: File) => {
  const text = await file.text();
  try {
    const config = JSON.parse(text);
    localStorage.setItem('portfolioConfig', JSON.stringify(config));
    window.location.reload();
  } catch (error) {
    console.error('Invalid configuration file');
  }
}; 