import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Card from './components/card.jsx'
import Footer from './components/footer.jsx'


function App() {
  

  return (
    
      <div className="app-container">
        <Navbar />
        <main>
        <Card 
          title="Welcome to EduTrack"
          description="Your personalized learning companion. Track your progress, explore courses, and achieve your educational goals with ease."
          actionText="Get Started"
          onAction={() => alert('Get Started clicked!')}
          className="card"
        />
        </main>
        <Footer />
      </div>
    
  )
}

export default App
