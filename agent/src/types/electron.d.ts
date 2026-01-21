export {};

declare global {
  interface Window {
    electronAPI: {
      onInputData: (callback: (data: any) => void) => void;
    };
  }
}
