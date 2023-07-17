import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<Loading />}>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
