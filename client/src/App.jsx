import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/students/Home";
import CoursesList from "./pages/students/CoursesList";
import CourseDetails from "./pages/students/CourseDetails";
import MyEnrollements from "./pages/students/MyEnrollements";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educator/Educator";
import DashBoard from "./pages/educator/DashBoard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./components/students/navbar";
import Footer from "./components/students/Footer";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  return (
    <div className="text-default min-h-screen bg-white">
      {/* Educator has different navbar */}
      {!isEducatorRoute && <Navbar />}
      <Routes>
        {/* ------------STUDENTS ROUTE -------- */}
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollements />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* ------------Educator ROUTE -------- */}

        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<DashBoard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
