import CallToAction from "../../components/students/CallToAction";
import Companies from "../../components/students/Companies";
import CoursesSection from "../../components/students/CoursesSection";
import Hero from "../../components/students/Hero";
import Testimonial from "../../components/students/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <Testimonial />
      <CallToAction />
    </div>
  );
};

export default Home;
