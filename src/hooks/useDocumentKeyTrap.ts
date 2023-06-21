import { useCallback, useEffect } from 'react';

interface UseDocumentKeyTrapPayload {
  isEnabled: boolean;
  cb: (e: KeyboardEvent) => void;
  isStopPropagation?: boolean;
}

export const useDocumentKeyTrap = ({
  cb,
  isStopPropagation = true,
  isEnabled,
}: UseDocumentKeyTrapPayload) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isStopPropagation) {
      e.stopPropagation();
    }
    cb(e);
  }, []);

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isEnabled]);
};
