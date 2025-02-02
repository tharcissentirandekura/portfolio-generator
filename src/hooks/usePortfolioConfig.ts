import { portfolioConfig } from '../config/portfolioConfig';

export const usePortfolioConfig = () => {
  const savedConfig = localStorage.getItem('portfolioConfig');
  return savedConfig ? JSON.parse(savedConfig) : portfolioConfig;
}; 