import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import EditImage from "../../assets/images/edit.png";
import DeleteImage from "../../assets/images/delete.png";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from "axios";

const ProjectList = () => {
  const navigate = useNavigate();
  const [newProjectData, setProjectData] = useState([]);
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
    const initiaProjectData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprojectlist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setProjectData(response.data.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    initiaProjectData();
  }, []);

  const handleEditProject = async (projectId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editproject/${projectId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-project", {
        state: { EditprojectData: response.data.data },
      });
    } catch (error) {
      console.error("Error fetching user data for editing:", error);
    }
  };
  const handleDeleteProject = async (projectId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deleteproject/${projectId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setProjectData((prevProjectData) =>
          prevProjectData.filter((project) => project.id !== projectId)
        );
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

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
              Configuration Summary
            </li>
          </ol>
        </nav>
      </div>
      <div className="container pb-4">
        <div className="box-bdr-dash">
          <div className="row">
            <div className="col-md-12">
              <div className="box mb-2">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">All Project </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-project">
                      <i className="fa fa-plus"></i> New project{" "}
                    </Link>
                  </div>
                </div>
                <div className="table-data-box">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        {/* <th>Customer</th> */}
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newProjectData.length > 0 &&
                        newProjectData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            {/* <td>{item.customer_id}</td> */}
                            <td>{item.description}</td>
                            <td>
                              <span
                                className="edit-row cursor"
                                onClick={() => handleEditProject(item.id)}
                              >
                                <img src={EditImage} alt="Edit" />
                              </span>{" "}
                              <span
                                className="delete-row cursor"
                                onClick={() => handleDeleteProject(item.id)}
                              >
                                <img src={DeleteImage} alt="Delete" />
                              </span>
                            </td>
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

export default ProjectList;
