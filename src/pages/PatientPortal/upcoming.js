import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../constants";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export default function Upcoming() {

  const [data,setData] = useState([])
  const [name,setName] = useState("")

  const helperfun = () => {
    const { id, jwtToken } = JSON.parse(localStorage.getItem("items"));
    axios
        .get(`${SERVER_URL}/patient/${id}/upcoming`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((resp) => {
          console.log(resp.data);
          setData(resp.data.upcoming)
          setName(resp.data.name)
        });
  };

  useEffect(() => {
    helperfun()
  },[])

  return (
      <div style={{ width: "90%" }}>
        <h1 style={{marginBottom : "50px",marginTop : "40px" }}>
          Hey <span style={{ color: "#655D8A" }}>{name}</span> ,Welcome
          Back!
        </h1>
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Doctor's Name</th>
              <th scope="col">Specialist</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data?.map((appointment,indx) => {
              return (
                  <tr key={indx}>
                    <td>
                      <div className="ms-3">
                        <p
                            className="fw-bold mb-1"
                            style={{ fontWeight: "600", color: "black" }}
                        >
                          Dr.{appointment.name}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="ms-3">
                        <p
                            className="fw-bold mb-1"
                            style={{ fontWeight: "600", color: "black" }}
                        >
                          {appointment.spec}
                        </p>
                      </div>
                    </td>
                    <td>
                      <p
                          className="fw-formal mb-1"
                          style={{ fontWeight: "450", color: "black" }}
                      >
                        {appointment.time}
                      </p>
                    </td>
                    <td>
                      <button
                          style={{
                            outline: "none",
                            border: "0px",
                            padding: "0.6rem",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                      >
                        Consult now
                      </button>
                    </td>
                  </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
  );
}