import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import Layout from "./components/layout/Layout";
import Website from "./pages/Website";
import Properties from "./pages/properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Property from "./pages/property/Property";
import UserDetailsContext from "./context/UserDetailsContext";

function App() {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favorites: [],
    bookings: [],
    token: null
  })

  return (
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading ....</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              <Route path="/properties" >
                <Route index element={<Properties />}/>
                <Route path=":propertyId" element={<Property />}/>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </UserDetailsContext.Provider>
  );
}

export default App;
