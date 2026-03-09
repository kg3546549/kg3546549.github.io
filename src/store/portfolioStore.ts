import { create } from 'zustand';
import { PortfolioData } from '../types/portfolio';
import portfolioData from '../data/portfolio.json';

interface PortfolioStore {
  data: PortfolioData;
  setData: (data: PortfolioData) => void;
  updateProfile: (profile: Partial<PortfolioData['profile']>) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  data: portfolioData as PortfolioData,

  setData: (data: PortfolioData) => set({ data }),

  updateProfile: (profile) => set((state) => ({
    data: {
      ...state.data,
      profile: { ...state.data.profile, ...profile }
    }
  })),
}));