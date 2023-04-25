import { createContext, useState } from "react";
import { Login, Register, Home } from "./pages";
import { AuthProvider } from "./utils/auth";

export const PageContext = createContext();

function App() {
  const [page, setPage] = useState("login");
  return (
    <AuthProvider>
      <PageContext.Provider value={{ page, setPage }}>
        <main className="h-screen w-full relative flex flex-col lg:flex-row overflow-hidden">
          <Login />
          <Register />
          <Home />
        </main>
      </PageContext.Provider>
    </AuthProvider>
  );
}

export default App;
