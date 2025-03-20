import { useContext, useEffect, useState } from "react";
import SearchBar from "../../components/students/SearchBar";
import { AppContext } from "../../context/AppContext";
import CourseCard from "../../components/students/CourseCard";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../../assets/assets";

const CoursesList = () => {
  const { allCourses } = useContext(AppContext);
  const { input } = useParams();
  const navigate = useNavigate();

  const [filteredCourses, setFilteredCourses] = useState([]);
  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilteredCourses(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourses(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <div className="max-w-[1400px] mx-auto w-full px-4">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full px-6 py-4 rounded-lg">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Course List</h1>
          <div className="text-gray-600 text-sm">
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
            <span className="mx-1">/</span>
            <a href="/course-list" className="hover:text-blue-500">
              Course List
            </a>
          </div>
        </div>

        <SearchBar data={input} />
      </div>
      {input && (
        <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 ml-6  text-gray-600">
          <p>{input}</p>
          <img
            src={assets.cross_icon}
            className="cursor-pointer"
            onClick={() => navigate("/course-list")}
            alt=""
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 md:px-6 my-7 md:my-16">
        {filteredCourses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
