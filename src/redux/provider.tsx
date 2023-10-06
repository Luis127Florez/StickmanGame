"use client" 

import { Provider } from "react-redux";
import { store } from "./store";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

setupListeners(store.dispatch);