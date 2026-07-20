import React, { useState } from "react";
import logo from "./images/logo.png";
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const VALID_USER = {
    id: "B24BS1182",
    password: "Kalash@1605",
    city: "Surat",
  };

  const handleLogin = (e, credentials) => {
    e.preventDefault();
    if (
      credentials.id === VALID_USER.id &&
      credentials.password === VALID_USER.password &&
      credentials.city.toLowerCase() === VALID_USER.city.toLowerCase()
    ) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials. Please check your ID, Password, and City.");
    }
  };

  return (
    /* Use conditional styling: center for login, normal for home */
    <div style={isLoggedIn ? {} : styles.appContainer}>
      {isLoggedIn ? (
        <Home onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={handleLogin} errorMessage={error} />
      )}
    </div>
  );
}

// --- Components ---

function Login({ onLogin, errorMessage }) {
  const [form, setForm] = useState({ id: "", password: "", city: "" });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 2. Logo sits ABOVE the card */}
        <img
          src={logo}
          alt="Logo"
          style={{ width: "750px", marginBottom: "40px" }}
        />

        {/* 3. The Login Card */}
        <div style={styles.card}>
          <h2 style={styles.title}>Student Login</h2>
          <form onSubmit={(e) => onLogin(e, form)} style={styles.form}>
            <input
              style={styles.input}
              placeholder="Login ID"
              onChange={(e) => setForm({ ...form, id: e.target.value })}
            />
            <input
              style={styles.input}
              type="password"
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <input
              style={styles.input}
              placeholder="Favorite City"
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <button type="submit" style={styles.button}>
              Sign In
            </button>
          </form>
          {errorMessage && <p style={styles.error}>{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}
function StudentDetails({ onBack }) {
  const leftColumnData = [
    { label: "Roll No", value: "B24BS1182" },
    { label: "Name in Hindi", value: "कलश पटेल" },
    { label: "Date of Birth", value: "16-05-2002" },
    { label: "Gender", value: "Female" },
    { label: "Nationality", value: "Indian" },
    { label: "Category", value: "ST" },
    { label: "Blood Group", value: "AB+" },
    { label: "Personal Email Id", value: "kalashpatel606@gmail.com" },
    { label: "Institute Email Id", value: "b24bs1182@iitj.ac.in" },
    { label: "Mobile Number", value: "7862035711" },
    { label: "Mother Tongue", value: "" },
    { label: "Education Medium HS(10+2)", value: "" },
  ];

  const rightColumnData = [
    { label: "Hostel Attachment(Yes/No)", value: "No" },
    { label: "Anti Ragging Undertaking Reference ID", value: "" },
    { label: "Identification Mark", value: "" },
    { label: "Aadhar Number", value: "682963400074" },
    { label: "Bank Account Number(Self)", value: "39644280941" },
    { label: "Bank Name", value: "SBI" },
    { label: "Bank Branch Name", value: "Adajan" },
    { label: "Bank IFSC Code", value: "SBIN0005098" },
    { label: "ABC ID", value: "" },
    { label: "Student Current Status", value: "Enrolled" },
  ];

  return (
    <div style={styles.detailsContainer} className="content-wrapper-mobile">
      <div style={styles.contentWrapper} className="grid-container-mobile">
        <button onClick={onBack} style={styles.backBtn}>← Back to Academic</button>
        
        <h3 style={styles.tableHeader}>Basic Information</h3>
        
        <div style={styles.gridContainer}>
          {/* Left Column */}
          <div style={styles.column}>
            {leftColumnData.map((item, index) => (
              <div key={index} style={styles.gridItem}>
                <span style={styles.label}>{item.label}</span>
                <span style={styles.value}>{item.value || "—"}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div style={styles.column}>
            {rightColumnData.map((item, index) => (
              <div key={index} style={styles.gridItem}>
                <span style={styles.label}>{item.label}</span>
                <span style={styles.value}>{item.value || "—"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultTable({ onBack }) {
  const results = [
    { session: "2024-2025", sem: "Semester 3", code: "AIL1010", subject: "Linear Algebra and Numerical Analysis", cat: "PC", ltp: "3-0-4-0", credit: 3, grade: "B-" },
    { session: "2024-2025", sem: "Semester 3", code: "AIL1020", subject: "Foundations of Statistics and Probability", cat: "PC", ltp: "3-0-4-0", credit: 3, grade: "A" },
    { session: "2024-2025", sem: "Semester 3", code: "AIL1030", subject: "Algorithmic Thinking and Its Applications", cat: "PC", ltp: "3-0-4-0", credit: 3, grade: "B" },
    { session: "2024-2025", sem: "Semester 3", code: "AIL1040", subject: "Basics of Data Analytics", cat: "PC", ltp: "3-0-4-0", credit: 3, grade: "A" },
  ];

  return (
    <div style={styles.resultPageContainer}>
      <button onClick={onBack} style={styles.backBtn}>← Back</button>
      
      {/* The light blue header bar from your screenshot */}
      <div style={styles.resultHeaderBar}>
        Grades/Results for Semester/Session : Semester 3 and Program: Cohort 1
      </div>

      <div className="table-wrapper-mobile">
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            <th style={styles.th}>Session</th>
            <th style={styles.th}>Semester</th>
            <th style={styles.th}>Subject Code</th>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Subject Category</th>
            <th style={styles.th}>L-T-P-D</th>
            <th style={styles.th}>Credit</th>
            <th style={styles.th}>Grade Obtained</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} style={styles.tableRow}>
              <td style={styles.td}>{r.session}</td>
              <td style={styles.td}>{r.sem}</td>
              <td style={styles.td}>{r.code}</td>
              <td style={styles.td}>{r.subject}</td>
              <td style={styles.td}>{r.cat}</td>
              <td style={styles.td}>{r.ltp}</td>
              <td style={styles.td}>{r.credit}</td>
              <td style={styles.td}>{r.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <div style={styles.footerStats}>
        <strong>Credits Earned in Semester: 12, Cumulative Credits earned: 12, SGPA: 5.75, CGPA: 5.75</strong>
      </div>

      {/* <div style={styles.resultHeaderBar}>
        Grades/Results for Semester/Session : Semester 2 and Program: Cohort 1
      </div>

      <div className="table-wrapper-mobile">
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeaderRow}>
            <th style={styles.th}>Session</th>
            <th style={styles.th}>Semester</th>
            <th style={styles.th}>Subject Code</th>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Subject Category</th>
            <th style={styles.th}>L-T-P-D</th>
            <th style={styles.th}>Credit</th>
            <th style={styles.th}>Grade Obtained</th>
          </tr>
        </thead>
        <tbody>
          {result.map((r, i) => (
            <tr key={i} style={styles.tableRow}>
              <td style={styles.td}>{r.session}</td>
              <td style={styles.td}>{r.sem}</td>
              <td style={styles.td}>{r.code}</td>
              <td style={styles.td}>{r.subject}</td>
              <td style={styles.td}>{r.cat}</td>
              <td style={styles.td}>{r.ltp}</td>
              <td style={styles.td}>{r.credit}</td>
              <td style={styles.td}>{r.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <div style={styles.footerStats}>
        <strong>Credits Earned in Semester: 12, Cumulative Credits earned: 12, SGPA: 7.75, CGPA: 7.75</strong>
      </div>
    </div> */}
  );
}

function Home({ onLogout }) {
  const [currentView, setCurrentView] = useState('menu');

  if (currentView === 'studentDetails') {
    return <StudentDetails onBack={() => setCurrentView('menu')} />;
  }

  if (currentView === 'result') {
    return <ResultTable onBack={() => setCurrentView('menu')} />;
  }

  return (
    /* CHANGED: Now using homeStyles to get the blue rows back */
    <div style={homeStyles.container}>
      <div style={homeStyles.header}>🎓 Academic</div>
      <div style={homeStyles.breadcrumb}>
        You are in: <span style={{color: '#007bff'}}>Academic</span>
      </div>

      {/* Added the other rows from your screenshot */}
      

      <div style={homeStyles.row} onClick={() => setCurrentView('result')}>
        <div style={homeStyles.plusBox}>+</div>
        <span style={homeStyles.rowText}>Result</span>
      </div>

      <div style={homeStyles.row} onClick={() => setCurrentView('studentDetails')}>
        <div style={homeStyles.plusBox}>+</div>
        <span style={homeStyles.rowText}>Students</span>
      </div>
      
      <button onClick={onLogout} style={homeStyles.logoutBtn}>Logout</button>
    </div>
  );
}

// --- Styles (The Blue Theme) ---
const homeStyles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
    textAlign: 'left',
    padding: '0' // Remove padding to go edge-to-edge
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    borderBottom: '1px solid #ddd',
    color: '#666',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: '18px',
    marginLeft: '8px',
  },
  breadcrumb: {
    padding: '15px',
    fontSize: '14px',
    color: '#888',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e3f2fd', // Light blue background
    padding: '12px 15px',
    marginBottom: '8px',
    border: '1px solid #cce5ff',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  plusBox: {
    width: '18px',
    height: '18px',
    backgroundColor: '#999',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    marginRight: '12px',
    borderRadius: '2px',
  },
  rowText: {
    color: '#4a90e2', // The specific blue text color from your image
    fontSize: '18px',
  },
  logoutBtn: {
    marginTop: '20px',
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ccc',
    borderRadius: '4px'
  }
};
const styles = {
  // 1. GLOBAL & APP LAYOUT
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    // --- Updated Font Family ---
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', 
    backgroundColor: "#f4f7f6",
    margin: 0,
    WebkitFontSmoothing: "antialiased", // Makes fonts look smoother on Mac
    MozOsxFontSmoothing: "grayscale",
  },

  // 2. LOGIN PAGE STYLES
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "2px solid #007bff",
    boxShadow: "0 8px 24px rgba(0, 123, 255, 0.15)",
    width: "350px",
    textAlign: "center",
  },
  logoLarge: {
    width: "750px", // As per your requirement
    maxWidth: "90vw",
    height: "auto",
    marginBottom: "40px",
  },
  title: {
    color: "#0056b3",
    marginBottom: "20px",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #b3d7ff",
    outline: "none",
    fontSize: "16px",
    transition: "border-color 0.2s",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s",
  },

  // 3. HOME / ACADEMIC MENU STYLES (Blue Rows)
  homeContainer: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff",
    textAlign: "left",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  header: {
    padding: "15px 20px",
    borderBottom: "1px solid #ddd",
    color: "#666",
    fontWeight: "bold",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
  },
  breadcrumb: {
    padding: "15px 20px",
    fontSize: "14px",
    color: "#888",
  },
  row: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e3f2fd",
    padding: "12px 20px",
    marginBottom: "8px",
    border: "1px solid #cce5ff",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  plusBox: {
    width: "20px",
    height: "20px",
    backgroundColor: "#999",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    marginRight: "15px",
    borderRadius: "2px",
  },
  rowText: {
    color: "#4a90e2",
    fontSize: "18px",
  },

  // 4. STUDENT DETAILS & RESULT TABLE STYLES
  resultPageContainer: {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  resultHeaderBar: {
    backgroundColor: "#d9edf7",
    color: "#31708f",
    padding: "15px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "25px",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    border: "1px solid #bce8f1",
    borderRadius: "4px",
    marginBottom: "20px",
    marginTop: "25px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  tableHeaderRow: {
    backgroundColor: "#337ab7",
    color: "white",
  },
  th: {
    padding: "12px",
    border: "1px solid #ddd",
    textAlign: "left",
    fontSize: "20px",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    fontSize: "18px",
    color: "#333",
  },
  backBtn: {
    cursor: "pointer",
    color: "#337ab7",
    border: "none",
    background: "none",
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "15px",
    display: "inline-block",
  },
  footerStats: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "15px",
    borderTop: "1px solid #eee",
    paddingTop: "15px",
  },
  detailsContainer: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fff',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  contentWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '10px', // 20px gap on all sides
    boxSizing: 'border-box',
  },
  tableHeader: {
    color: '#5a6a85',
    fontSize: '20px',
    fontWeight: 'bold',
    borderBottom: '1px solid #eef1f6',
    paddingBottom: '10px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '60px', // Large gap between the two main columns
  },
  column: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px', // Standard portal font size
    padding: '4px 0',
  },
  label: {
    fontWeight: 'bold',
    color: '#666',
    width: '55%', // Ensures labels have enough room
    textAlign: 'left',
  },
  value: {
    color: '#333',
    width: '45%',
    textAlign: 'left',
  },
  
};
