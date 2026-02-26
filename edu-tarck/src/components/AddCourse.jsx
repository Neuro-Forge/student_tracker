import { useState } from "react";

export default function AddCourse({ onAddCourse }) {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseName || !description) {
      alert("Please fill in all details");
      return;
    }

    onAddCourse({ id: Date.now(), title: courseName, description });
    setCourseName("");
    setDescription("");
  };

  return (
    <div className="add-course">
      <form onSubmit={handleSubmit}>
        <h3>Add Course</h3>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}
