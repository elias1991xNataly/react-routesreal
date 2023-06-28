import './App.css';
//2.
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import homePageWithNavigate from "../src/pages/HomePageWithNavigate";
import projectsData from "./projects-data.json";
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import QueryStringExample from './pages/queryStringExample';

function App() {


  return (
    <div className="App">
      <Navbar />
      {/* 3. */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<homePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
        <Route path="projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="example" element={<QueryStringExample />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
