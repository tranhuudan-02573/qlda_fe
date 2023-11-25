import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { publicRoutes } from "./routes";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <div className={styles.container}>
          <Sidebar />
          <Routes>
            {publicRoutes.map((route, index) => {
              let Page = route.component;
              return <Route path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
