import { useSearchParams } from 'react-router-dom';

export type PreviewMode = 'pagination' | 'infinite';

export const usePreviewMode = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const previewMode = (searchParams.get('preview') as PreviewMode) || 'pagination';
  
  const setPreviewMode = (mode: PreviewMode) => {
    setSearchParams({ preview: mode });
  };

  return { previewMode, setPreviewMode };
};
