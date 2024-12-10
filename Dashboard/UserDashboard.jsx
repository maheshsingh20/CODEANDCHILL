import React, { useState } from "react";
import "./UserDashboard.css";
import Help1 from "./Help1";
import Help2 from "./Help2";
import Help3 from "./Help3";

const ProfileDashboard = () => {
  const [profilePic, setProfilePic] = useState("profile-picture-url");
  const [username, setUsername] = useState("Student Name");
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [bio, setBio] = useState(
    "An enthusiastic student passionate about learning."
  );
  const [contactNumber, setContactNumber] = useState("123-456-7890");
  const [email, setEmail] = useState("student@example.com");
  const [github, setGithub] = useState("github.com/student");
  const [linkedin, setLinkedin] = useState("linkedin.com/in/student");
  const [education, setEducation] = useState("B.Tech in Computer Science");
  const [address, setAddress] = useState("123 Main St, City, Country");

  const [skills, setSkills] = useState({
    advanced: ["Dynamic Programming", "Greedy Algorithms", "Graph Theory"],
    medium: ["Binary Search", "Backtracking", "Sorting"],
    normal: ["Arrays", "Strings", "Linked Lists"],
  });

  const [communityEngagement, setCommunityEngagement] = useState({
    comments: [
      "Great problem!",
      "Very helpful solution!",
      "Need more clarification on this.",
    ],
    profileViews: 150,
  });

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setUsername(newUsername);
    setEditMode(false);
  };

  return (
    <div className="profile-dashboard">
      <div className="left-side">
        <div className="profile-header">
          <img
            src={profilePic}
            alt="Profile"
            className="profile-picture"
            onClick={() => document.querySelector('input[type="file"]').click()}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ display: "none" }}
          />
          <div className="profile-info">
            {editMode ? (
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            ) : (
              <h2 className="username">{username}</h2>
            )}
            <h3 className="rank">Rank: 120</h3>
            {editMode ? (
              <button onClick={handleSaveProfile}>Save Profile</button>
            ) : (
              <button onClick={handleEditProfile}>Edit Profile</button>
            )}
          </div>
        </div>
        <div className="bio-section">
          <h3>Bio</h3>
          {editMode ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write your bio"
            />
          ) : (
            <p>{bio}</p>
          )}
        </div>
        <div className="personal-details">
          <h3>Contact Details</h3>
          {editMode ? (
            <>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Contact Number"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </>
          ) : (
            <ul>
              <li>Contact: {contactNumber}</li>
              <li>Email: {email}</li>
              <li>Address: {address}</li>
            </ul>
          )}
        </div>
        <div className="social-contact">
          <h3>Social Contacts</h3>
          {editMode ? (
            <>
              <input
                type="text"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="Github"
              />
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="LinkedIn"
              />
            </>
          ) : (
            <ul>
              <li>
                GitHub: <a href={`https://${github}`}>{github}</a>
              </li>
              <li>
                LinkedIn: <a href={`https://${linkedin}`}>{linkedin}</a>
              </li>
            </ul>
          )}
        </div>
        <div className="education-section">
          <h3>Education</h3>
          {editMode ? (
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Education Details"
            />
          ) : (
            <p>{education}</p>
          )}
        </div>
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-category">
            <h4>Advanced Skills</h4>
            {editMode ? (
              <input
                type="text"
                value={skills.advanced.join(", ")}
                onChange={(e) =>
                  setSkills({ ...skills, advanced: e.target.value.split(", ") })
                }
                placeholder="Enter advanced skills"
              />
            ) : (
              <ul>
                {skills.advanced.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="skills-category">
            <h4>Medium Skills</h4>
            {editMode ? (
              <input
                type="text"
                value={skills.medium.join(", ")}
                onChange={(e) =>
                  setSkills({ ...skills, medium: e.target.value.split(", ") })
                }
                placeholder="Enter medium skills"
              />
            ) : (
              <ul>
                {skills.medium.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="skills-category">
            <h4>Normal Skills</h4>
            {editMode ? (
              <input
                type="text"
                value={skills.normal.join(", ")}
                onChange={(e) =>
                  setSkills({ ...skills, normal: e.target.value.split(", ") })
                }
                placeholder="Enter normal skills"
              />
            ) : (
              <ul>
                {skills.normal.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="community-engagement">
          <h3>Community Engagement</h3>
          <div className="profile-views">
            <p>Profile Views: {communityEngagement.profileViews}</p>
          </div>
          <div className="comments">
            <h4>Comments</h4>
            <ul>
              {communityEngagement.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="topcont">
          <div className="Leftt">
            <Help1 />
            <Help2 />
          </div>
          <div className="Rightt">
            <h1>Latest Contest is Approaching Soon</h1>
            <div className="badge-container">
              <span className="badge">New</span>
              <span className="badge">Hot</span>
            </div>
            <p className="contest-details">
              Don't miss out on the upcoming contest! Be ready for some exciting
              challenges.
            </p>
          </div>
        </div>
        <div className="prob">
          <div className="prob1">
            <Help3 completed={189} total={3363} />
          </div>
          <div className="prob2">
            <p> Badge Earned</p>
          </div>
        </div>
        <div className="latest-submissions">
          <h2>Latest Submissions</h2>
          <ul>
            <li className="submission-item">
              <p className="question-title">
                Question: <span className="question-name">Array Rotation</span>
              </p>
              <p className="submission-result">
                Result: <span className="result-pass">Passed</span>
              </p>
              <p className="submission-date-time">
                Submitted on:{" "}
                <span className="date-time">Nov 24, 2024, 2:30 PM</span>
              </p>
              <a href="/view-submission/1" className="view-submission-link">
                View Submission
              </a>
            </li>
            <li className="submission-item">
              <p className="question-title">
                Question:{" "}
                <span className="question-name">Max XOR Subarray</span>
              </p>
              <p className="submission-result">
                Result: <span className="result-fail">Failed</span>
              </p>
              <p className="submission-date-time">
                Submitted on:{" "}
                <span className="date-time">Nov 23, 2024, 5:10 PM</span>
              </p>
              <a href="/view-submission/2" className="view-submission-link">
                View Submission
              </a>
            </li>
            <li className="submission-item">
              <p className="question-title">
                Question:{" "}
                <span className="question-name">Minimum Path Sum in Grid</span>
              </p>
              <p className="submission-result">
                Result: <span className="result-pass">Passed</span>
              </p>
              <p className="submission-date-time">
                Submitted on:{" "}
                <span className="date-time">Nov 22, 2024, 10:15 AM</span>
              </p>
              <a href="/view-submission/3" className="view-submission-link">
                View Submission
              </a>
            </li>
            <li className="submission-item">
              <p className="question-title">
                Question:{" "}
                <span className="question-name">
                  Longest Increasing Subsequence
                </span>
              </p>
              <p className="submission-result">
                Result: <span className="result-fail">Failed</span>
              </p>
              <p className="submission-date-time">
                Submitted on:{" "}
                <span className="date-time">Nov 21, 2024, 7:30 PM</span>
              </p>
              <a href="/view-submission/4" className="view-submission-link">
                View Submission
              </a>
            </li>
            <li className="submission-item">
              <p className="question-title">
                Question:{" "}
                <span className="question-name">Find Missing Number</span>
              </p>
              <p className="submission-result">
                Result: <span className="result-pass">Passed</span>
              </p>
              <p className="submission-date-time">
                Submitted on:{" "}
                <span className="date-time">Nov 20, 2024, 4:00 PM</span>
              </p>
              <a href="/view-submission/5" className="view-submission-link">
                View Submission
              </a>
            </li>
            <li className="submission-item">
              <p className="question-title">
                Question:{" "}
                <span className="question-name">
                  Search in Rotated Sorted Array
                </span>
              </p>
              <p className="submission-result">
                Result: <span className="result-pass">Passed</span>
              </p>
              <p className="submission-date-time">
                Submitted on:{" "}
                <span className="date-time">Nov 19, 2024, 1:45 PM</span>
              </p>
              <a href="/view-submission/6" className="view-submission-link">
                View Submission
              </a>
            </li>
          </ul>
        </div>
        <div className="course-section">
          <h2>Your Courses</h2>
          <div className="courses-container">
            <div className="purchased-courses">
              <h3>Purchased Courses</h3>
              <ul>
                <li className="course-item">
                  <p className="course-title">JavaScript for Beginners</p>
                  <div className="completion-status">
                    <div
                      className="completion-bar"
                      style={{ width: "75%" }}
                    ></div>
                    <span className="completion-percentage">75%</span>
                  </div>
                  <a href="/course-details/1" className="view-course-link">
                    View Course
                  </a>
                </li>
                <li className="course-item">
                  <p className="course-title">Advanced React</p>
                  <div className="completion-status">
                    <div
                      className="completion-bar"
                      style={{ width: "50%" }}
                    ></div>
                    <span className="completion-percentage">50%</span>
                  </div>
                  <a href="/course-details/2" className="view-course-link">
                    View Course
                  </a>
                </li>
              </ul>
            </div>

            <div className="enrolled-courses">
              <h3>Enrolled Courses</h3>
              <ul>
                <li className="course-item">
                  <p className="course-title">Data Structures & Algorithms</p>
                  <div className="completion-status">
                    <div
                      className="completion-bar"
                      style={{ width: "40%" }}
                    ></div>
                    <span className="completion-percentage">40%</span>
                  </div>
                  <a href="/course-details/3" className="view-course-link">
                    View Course
                  </a>
                </li>
                <li className="course-item">
                  <p className="course-title">Machine Learning Basics</p>
                  <div className="completion-status">
                    <div
                      className="completion-bar"
                      style={{ width: "30%" }}
                    ></div>
                    <span className="completion-percentage">30%</span>
                  </div>
                  <a href="/course-details/4" className="view-course-link">
                    View Course
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="completed-courses-section">
          <h2>Completed Courses</h2>
          <div className="completed-courses-container">
            <div className="completed-course-item">
              <p className="course-title">Full-Stack Web Development</p>
              <a
                href="/certificates/fullstack-cert.pdf"
                target="_blank"
                className="certificate-link"
              >
                <button className="download-button">
                  Download Certificate
                </button>
              </a>
            </div>
            <div className="completed-course-item">
              <p className="course-title">Python for Data Science</p>
              <a
                href="/certificates/python-ds-cert.pdf"
                target="_blank"
                className="certificate-link"
              >
                <button className="download-button">
                  Download Certificate
                </button>
              </a>
            </div>
            <div className="completed-course-item">
              <p className="course-title">Introduction to AI</p>
              <a
                href="/certificates/ai-cert.pdf"
                target="_blank"
                className="certificate-link"
              >
                <button className="download-button">
                  Download Certificate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
