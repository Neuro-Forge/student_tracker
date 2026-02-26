// src/pages/Courses.jsx
import { useState } from "react";
import Card from "../components/card.jsx";
import AddCourse from "../components/AddCourse.jsx";

function Courses() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", description: "Learn components, props, and state." },
    { id: 2, title: "Advanced React", description: "Hooks, Context API, and performance." }
  ]);

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Courses</h2>
      {user?.role === "admin" && <AddCourse onAddCourse={addCourse} />}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {courses.map(course => (
          <Card
            key={course.id}
            title={course.title}
            description={course.description}
            actionText={user?.role === "admin" ? "Delete" : "Enroll"}
            onAction={() =>
              user?.role === "admin"
                ? deleteCourse(course.id)
                : alert("Enrolled!")
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;