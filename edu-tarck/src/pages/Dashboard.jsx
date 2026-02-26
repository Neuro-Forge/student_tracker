// src/pages/Dashboard.jsx
import Card from '../components/card.jsx';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={styles.container}>
      <h2>Welcome, {user?.email}</h2>
      {user?.role === "admin" ? (
        <>
          <h3>Admin Panel</h3>
          <Card 
            title="Manage Courses" 
            description="Add, edit, or delete courses." 
            actionText="Go to Courses" 
            onAction={() => window.location.href="/courses"} 
          />
          <Card 
            title="Manage Students" 
            description="View and manage student registrations." 
            actionText="Go to Students" 
            onAction={() => window.location.href="/students"} 
          />
        </>
      ) : (
        <>
          <h3>Student Dashboard</h3>
          <Card 
            title="My Courses" 
            description="View enrolled courses and progress." 
            actionText="Go to Courses" 
            onAction={() => window.location.href="/courses"} 
          />
        </>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "2rem" }
};

export default Dashboard;