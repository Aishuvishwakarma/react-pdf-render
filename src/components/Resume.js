import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

function Resume() {
  const [resume, setResume] = useState(null);
  const [jsonInput, setJsonInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3000/api/resume/669522d1c55d193b3f3dfe29", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwic3ViIjoiNjY5NTIyZDFjNTVkMTkzYjNmM2RmZTI5IiwiaWF0IjoxNzIxMTIzNjEwLCJleHAiOjE3MjEyMTAwMTB9.ldWrLb1qG3kAcE1hCW-uXvI9nsOeUP8LgLKIiyzxt78",
        },
      })
      .then((response) => {
        setResume(response.data.resume);
        setJsonInput(JSON.stringify(response.data.resume, null, 2));
      })
      .catch((err) => console.log(err));
  };

  const handleJsonChange = (event) => {
    setJsonInput(event.target.value);
    try {
      const updatedResume = JSON.parse(event.target.value);
      setResume(updatedResume);
    } catch (e) {
      console.error("Invalid JSON");
    }
  };

  if (!resume) {
    return <div>Loading...</div>;
  }

  const styles = StyleSheet.create({
    page: {
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    section: {
      marginBottom: 10,
    },
    heading: {
      fontSize: 18,
      marginBottom: 10,
    },
    subheading: {
      fontSize: 14,
      marginBottom: 6,
    },
    text: {
      fontSize: 12,
      marginBottom: 4,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  });

  const ResumeDocument = () => (
    <Document>
      <Page style={{}}>
        <View
          style={{
            width: "100%",
            // marginBottom: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(99 102 241)",
            color: "#fff",
          }}
        >
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              // alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 30,
                  marginBottom: 10,
                  textTransform: "uppercase",
                }}
              >
                {resume.user.name}
              </Text>
              <Text style={styles.text}>{resume?.user?.userInfo?.title}</Text>
            </View>
            <Text style={styles.text}>Address: {resume.user?.userInfo.address}</Text>
          </View>
          {/* <Image style={styles.image} src={resume.user.image} /> */}
          <View
            style={{
              width: "100%",
              marginTop: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.text}>
              Phone: {resume?.user?.userInfo?.phone}
            </Text>
            <Text style={{...styles.text,marginLeft:10}}>Email: {resume.user.email}</Text>
          </View>
        </View>

        <View style={{ ...styles.section, ...styles.page }}>
          <Text style={styles.heading}>About</Text>
          <Text style={{ fontWeight: 300, fontSize: 12 }}>
            {resume.user?.userInfo.description}
          </Text>
        </View>

        <View style={{ ...styles.section, ...styles.page }}>
          <Text style={styles.heading}>Skills</Text>
          <View>
            {resume.skills.map((skill) => (
              <Text key={skill._id} style={styles.text}>
                {skill.skillId.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={{ ...styles.section, ...styles.page }}>
          <Text style={styles.heading}>Education</Text>
          {resume.education.map((edu) => (
            <View key={edu._id}>
              <Text style={styles.subheading}>{edu.institution}</Text>
              <Text style={styles.text}>Degree: {edu.degree}</Text>
              <Text style={styles.text}>
                Field of Study: {edu.fieldOfStudy}
              </Text>
              <Text style={styles.text}>
                Start Date: {new Date(edu.startDate).toLocaleDateString()}
              </Text>
              <Text style={styles.text}>
                End Date: {new Date(edu.endDate).toLocaleDateString()}
              </Text>
              <Text style={styles.text}>Grade: {edu.grade}</Text>
              <Text style={styles.text}>Description: {edu.description}</Text>
            </View>
          ))}
        </View>

        <View style={{ ...styles.section, ...styles.page }}>
          <Text style={styles.heading}>Employment</Text>
          {resume.employment.map((job) => (
            <View key={job._id}>
              <Text style={styles.subheading}>{job.company}</Text>
              <Text style={styles.text}>Title: {job.title}</Text>
              <Text style={styles.text}>
                Start Date: {new Date(job.startDate).toLocaleDateString()}
              </Text>
              <Text style={styles.text}>
                End Date: {new Date(job.endDate).toLocaleDateString()}
              </Text>
              <Text style={styles.text}>Description: {job.description}</Text>
            </View>
          ))}
        </View>

        <View style={{ ...styles.section, ...styles.page }}>
          <Text style={styles.heading}>Personal Details</Text>
          <View >
            <Text style={styles.text}>Name: {resume?.user?.name}</Text>
            <Text style={styles.text}>Gender: {resume?.user?.userInfo?.gender}</Text>
            <Text style={styles.text}>
              DOB: {new Date('2000-07-15T11:48:00.355Z').toLocaleDateString()}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="flex h-screen p-10">
      <div className="w-1/2">
        <textarea
          className="w-full h-full px-2 overflow-y-scroll bg-amber-200 p-10 text-pretty font-medium"
          value={jsonInput}
          onChange={handleJsonChange}
        />
      </div>
      <div className="w-1/2 h-full  overflow-y-scroll bg-white-500  px-2  text-pretty font-medium">
        <PDFViewer style={{ width: "100%", height: "100%" }}>
          <ResumeDocument />
        </PDFViewer>
      </div>
    </div>
  );
}

export default Resume;
