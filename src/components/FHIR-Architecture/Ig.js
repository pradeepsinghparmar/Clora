import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from "axios";
import Sidebar from "./sidebar";

const Ig = () => {
  const [newIGData, setIGData] = useState([]);
  const {
    loading,
    loadingoverview,
    loadingig,
    loadingusermaser,
    loadingcustomerlist,
    loadingprojectlist,
    loadingrolelist,
    loadingscopelist,
    handleLogout,
    handleOverviewClick,
    handleIGClick,
    handleUserMaster,
    handleCustomerList,
    handleProjectList,
    handleRoleList,
    handleScopeList,
  } = HeaderFunctions();

  useEffect(() => {
    const initialGData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getiglist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setIGData(response.data.data);
      } catch (error) {
        console.error("Error fetching IG data:", error);
      }
    };

    initialGData();
  }, []);
  return (
    <>
      <Header
        loading={loading}
        loadingoverview={loadingoverview}
        loadingig={loadingig}
        loadingusermaser={loadingusermaser}
        loadingcustomerlist={loadingcustomerlist}
        loadingprojectlist={loadingprojectlist}
        loadingrolelist={loadingrolelist}
        loadingscopelist={loadingscopelist}
        handleLogout={handleLogout}
        handleOverviewClick={handleOverviewClick}
        handleIGClick={handleIGClick}
        handleUserMaster={handleUserMaster}
        handleCustomerList={handleCustomerList}
        handleProjectList={handleProjectList}
        handleRoleList={handleRoleList}
        handleScopeList={handleScopeList}
      />

      <div className="container">
        <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#">FHIR Build</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">FHIR configuration</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              IG Configuration
            </li>
          </ol>
        </nav>
      </div>
      <div className="container pb-4">
        <div className="box-bdr-dash">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <div className="box mb-2">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">IG Configuration </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-ig">
                      <i className="fa fa-plus"></i> New IG{" "}
                    </Link>
                  </div>
                </div>
                <div className="table-data-box">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Ideal Customer</th>
                        <th>Comments</th>
                        <th>IG Version</th>
                        <th>Upload date</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {newIGData.length > 0 &&
                        newIGData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.link}</td>
                            <td>{item.customer}</td>
                            <td className="description">{item.comments}</td>
                            <td>{item.ig_version}</td>
                            <td>{item.updated_at}</td>
                            {/* <td>
                              <span className="edit-row">
                                <img src={EditImage} alt="Edit" />
                              </span>{" "}
                              <span className="delete-row">
                                <img src={DeleteImage} alt="Delete" />
                              </span>
                            </td> */}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ig;
