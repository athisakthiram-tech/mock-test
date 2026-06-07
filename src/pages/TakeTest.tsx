import { useNavigate } from "react-router-dom";


function TakeTest() {
    const navigate=useNavigate();
  return (
    <>
      <h2 className="mb-4">Choose Subject</h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Economics</h5>
              <p>20 Questions</p>

              <button className="btn btn-success"
               onClick={() => navigate("/test/economics")}
              >
                Start Test
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Tamil</h5>
              <p>Coming Soon</p>

              <button
                className="btn btn-secondary"
                disabled
              >
                Disabled
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>English</h5>
              <p>Coming Soon</p>

              <button
                className="btn btn-secondary"
                disabled
              >
                Disabled
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default TakeTest;