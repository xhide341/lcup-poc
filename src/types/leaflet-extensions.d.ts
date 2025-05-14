import * as L from "leaflet";

declare global {
  interface Window {
    L: typeof L;
  }
}

declare module "leaflet" {
  namespace Icon {
    interface Default {
      _getIconUrl?: string;
    }
  }
}

export {};
