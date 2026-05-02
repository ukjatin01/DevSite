import banner from "/src/assets/landing_Page_image.png";
export default function LandingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-light py-5">
  <div className="container">
    <div className="row align-items-center">

      <div className="col-md-6">
        <h1 className="fw-bold display-5">
          Commerce Career
        </h1>

        <p className="mt-3 text-muted">
          At <strong>Commerce Pro Academy</strong>, we focus on building strong
          concepts in Accounts, Business Studies, and Economics. Our teaching
          method is simple, practical, and exam-oriented, helping students
          understand topics deeply instead of just memorizing.
        </p>

        <p className="text-muted">
          Whether you are in Class 11, 12, or B.Com, we provide step-by-step
          guidance, regular doubt sessions, and personal attention to ensure
          better results and confidence in exams.
        </p>

        <button className="btn btn-primary px-4 py-2 mt-3">
          Join Now
        </button>
      </div>

      <div className="col-md-6 text-center mt-4 mt-md-0">
          <img src={banner} alt="logo" height="400" className="me-2" />
      </div>

    </div>
  </div>
</section>

      {/* FEATURES */}
      <section className="py-5">
        <div className="container text-center">

          <h2 className="mb-4">Why Choose Us?</h2>

          <div className="row">

            <div className="col-md-4 mb-3">
              <div className="p-4 border rounded shadow-sm">
                <h5>Expert Teaching</h5>
                <p>Simple and easy explanation of concepts</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="p-4 border rounded shadow-sm">
                <h5>Personal Guidance</h5>
                <p>Home tuition and doubt solving</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="p-4 border rounded shadow-sm">
                <h5>Exam Focus</h5>
                <p>Board and college exam preparation</p>
              </div>
            </div>

          </div>
        </div>
      </section>

<section className="py-5 bg-light">
  <div className="container text-center">

    <h2 className="mb-4">Learn with Our Videos</h2>
    <p className="text-muted mb-5">
      Watch our latest classes and understand concepts easily
    </p>

    <div className="row">

      {/* Video 1 */}
      <div className="col-md-4 col-sm-12 mb-4">
        <div className="ratio ratio-16x9 shadow rounded">
          <iframe
            src="https://www.youtube.com/embed/ZFvoS9N75qg"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video 2 */}
      <div className="col-md-4 col-sm-12 mb-4">
        <div className="ratio ratio-16x9 shadow rounded">
          <iframe
            src="https://www.youtube.com/embed/sVYawAjt5QM"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video 3 */}
      <div className="col-md-4 col-sm-12 mb-4">
        <div className="ratio ratio-16x9 shadow rounded">
          <iframe
             src="https://www.youtube.com/embed/ZFvoS9N75qg"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>

  </div>
</section>
      {/* COURSES */}
      <section className="bg-light py-5">
        <div className="container text-center">

          <h2 className="mb-4">Our Courses</h2>

          <div className="row">

            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card shadow-sm p-3">
                <h5>Class 11</h5>
                <p>Strong basics</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card shadow-sm p-3">
                <h5>Class 12</h5>
                <p>Board prep</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card shadow-sm p-3">
                <h5>B.Com</h5>
                <p>College subjects</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card shadow-sm p-3">
                <h5>Home Tuition</h5>
                <p>1-on-1 support</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}