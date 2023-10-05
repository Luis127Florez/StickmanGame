import React from "react";
import Link from "next/link";
import "../styles/globals.css";
import { MainView } from "../components/views/main/mainView";
//import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function Page() {
  return (
    //<Provider store={store}>
      <MainView />
    //</Provider>
  );
}
