import { useNavigate } from "react-router-dom";


function TakeTest() {
    const navigate=useNavigate();
    const subjects=[
      {
        name:"economics",
        available:true,
        path:"/test/economics"
      },
      {
        name:"geography-1",
        available:true,
        path:"/test/geography1"
      },
      {
        name:"geography-2",
        available:true,
        path:"/test/geography2"
      }
    ]
  return (
    <>
      <h2 className="mb-4">Choose Subject</h2>

      <div className="row">
       { subjects.map((subject)=>(
          <div className="col-md-4" key={subject.path}>
          <div className="card">
            <div className="card-body">
              <h5>{subject.name}</h5>
              <p>20 Questions</p>

              <button className={subject.available?"btn btn-success":"btn btn-secondary"}
               disabled={!subject.available}
               onClick={() => navigate(subject.path)}
               >
                Start Test
              </button>
            </div>
          </div>
        </div>
       ))
      };
      </div>
    </>
  );
}

export default TakeTest;