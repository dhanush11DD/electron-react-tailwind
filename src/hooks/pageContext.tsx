// PageContext.js
import { createContext, useContext, useState } from 'react';

interface PageContextType {
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  }
// Create the context
const PageContext = createContext<PageContextType | undefined>(undefined);

// Create a custom hook to use the context
export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
};

// Create the provider component
export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const value = {
    currentPage,
    setCurrentPage
  };

  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
};