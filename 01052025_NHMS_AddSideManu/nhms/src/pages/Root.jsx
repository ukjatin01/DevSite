// import { useEffect } from "react";
// import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/footer/Footer";
// import Sidebar from "../components/sidebar/Sidebar";

// export default function Root() {
//   const token = useLoaderData();
//   return (
//     <>
//       <Navbar />
//       <Sidebar />
//       <main>
//         {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// }

import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

export default function Root() {
  const token = useLoaderData();
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main
          className="flex-fill p-3"
          style={{
            background: "linear-gradient(to right, #f0f2f5, #dfe9f3)",
          }}
        >
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
