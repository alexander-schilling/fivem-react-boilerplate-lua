import React, { useState, useEffect } from 'react';
import useAppData from '../hooks/useAppData';
import { fetchNui } from '../utils/fetchNui';

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uiLoaded, setUiLoaded] = useState(false);

  useAppData();

  useEffect(() => {
    if (!uiLoaded) {
      setUiLoaded(true);
      fetchNui<boolean>('uiLoaded').catch(console.error);
    }
  }, [uiLoaded]);

  return <>{children}</>;
};

export default AppProvider;
