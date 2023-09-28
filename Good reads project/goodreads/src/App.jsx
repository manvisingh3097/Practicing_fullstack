import BookDetailPage from "./Pages/BookDetailPage";
import BookPage from "./Pages/BookPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import {Routes, Route} from 'react-router-dom';
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProtectedRoute from "./Routes/ProtectedRoute";

// import {BrowseRouter as Router , Routes , Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route
          path="/books"
          element={<ProtectedRoute component={BookPage} />}
        />
        <Route path="/books" element={<BookPage />} />
        <Route path="/books/detail/:id" element={<BookDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/register" element={<RegisterPage />} />
        // <Route path="/login" element={<LoginPage />} />
        <Route
          path="/about"
          element={<ProtectedRoute component={AboutPage} />}
        />
        <Route
          path="/contact"
          element={<ProtectedRoute component={ContactPage} />}
        />
        <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>
   
  );
}

export default App;
