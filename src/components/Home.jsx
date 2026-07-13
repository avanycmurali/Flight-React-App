import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <div>
        <NavigationBar/>
      {/* Hero Section */}
      <div
        className="container-fluid text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          background: "linear-gradient(135deg, #0d6efd, #6fb1fc)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold">
                Welcome to Flight Management System
              </h1>

              <p className="lead mt-4">
                A modern platform designed to simplify airline operations by
                efficiently managing flights, schedules, passenger information,
                and bookings.
              </p>

              <p className="fs-5">
                Experience organized, secure, and reliable flight management
                with an intuitive interface.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
                alt="Flight"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">
          Flight Management Features
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <h1>✈️</h1>
                <h4 className="mt-3">Flight Scheduling</h4>
                <p>
                  Manage arrivals, departures, routes, and flight timings
                  efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <h1>👨‍✈️</h1>
                <h4 className="mt-3">Passenger Records</h4>
                <p>
                  Maintain passenger information securely with quick access and
                  organized records.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body text-center">
                <h1>🌍</h1>
                <h4 className="mt-3">Global Connectivity</h4>
                <p>
                  Connect multiple destinations while ensuring smooth airline
                  operations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Statistics */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">250+</h2>
              <p>Flights Daily</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">80+</h2>
              <p>Destinations</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">50K+</h2>
              <p>Passengers Served</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-primary">24/7</h2>
              <p>Support Available</p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          © 2026 Flight Management System | Safe • Efficient • Reliable
        </p>
      </footer>
    </div>
  )
}

export default Home