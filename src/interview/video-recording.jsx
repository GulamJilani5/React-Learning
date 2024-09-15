/*******************************************************************************************************
 *******************************************************************
 ***************
 *******************************************************************
 *******************************************************************************************************/
//  The recordedChunks state in the VideoRecorder component plays a crucial role in the video recording and uploading
//  process. It acts as a temporary storage for the video data being captured by the MediaRecorder. Here's a
//  detailed explanation of its significance and how it works:

//  How recordedChunks Works
//  Initialization:

//  recordedChunks is initialized as an empty array using the useState hook.
//  This array will store the individual chunks of video data as they are recorded.

const [recordedChunks, setRecordedChunks] = useState([]);

//  Handling Data Availability:
//  When the MediaRecorder captures a chunk of video data, it triggers the dataavailable event.
//  The handleDataAvailable function is called whenever the dataavailable event occurs.

//  mediaRecorderRef.current.ondataavailable = handleDataAvailable;
//  Inside handleDataAvailable, the event.data contains the recorded video chunk.
//  If the chunk has a size greater than 0, it is added to the recordedChunks array using the state setter function.

const handleDataAvailable = (event) => {
  if (event.data.size > 0) {
    setRecordedChunks((prev) => [...prev, event.data]);
  }
};

//  Storing the Video Data:
//  The recordedChunks array accumulates the chunks of video data as they are captured.
//  This array grows over time as more chunks are recorded.

//  Creating a Blob:
//  When the recording is stopped, the chunks in recordedChunks are combined to create a single Blob.
//  A Blob represents the video data in a format that can be uploaded or downloaded.

const blob = new Blob(recordedChunks, { type: "video/webm" });

//  Uploading the Video:
//  The blob is then appended to a FormData object, which is used to send the video data to the backend server.
//  This happens in the uploadRecording function, which is called when the component unmounts.

const formData = new FormData();
formData.append("video", blob, "interview.webm");

try {
  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    console.log("Video uploaded successfully");
  } else {
    console.error("Failed to upload video");
  }
} catch (error) {
  console.error("Error uploading video:", error);
}

//  Summary
//  Initialization: recordedChunks is initialized as an empty array to store video chunks.
//  Data Capture: The handleDataAvailable function adds each video chunk to recordedChunks.
//  Blob Creation: When recording stops, the chunks are combined into a single Blob.
//  Uploading: The Blob is uploaded to the backend server when the component unmounts.

//////// How It Works

///  Recording Starts:

//  When the component mounts, the MediaRecorder starts recording.
//  As it records, it periodically triggers the dataavailable event.
//  Chunks are Captured:

//  Each time dataavailable is triggered, a chunk of video data is added to recordedChunks.
//  Recording Stops:

//  When the component unmounts, the recording stops.
//  The chunks in recordedChunks are combined into a Blob.
//  Video is Uploaded:

//  The Blob is uploaded to the backend server using a FormData object.
//  By using recordedChunks to store video data in chunks, the component can efficiently manage and upload the
//  recorded video, ensuring that the entire recording is captured and transferred correctly.
/*******************************************************************************************************
 *******************************************************************************************************
 *******************************************************************************************************
 *******************************************************************************************************
 *******************************************************************************************************/

import React, { useEffect, useState, useRef } from "react";

const VideoRecorder = () => {
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null);
  const webcamRef = useRef(null);

  useEffect(() => {
    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        webcamRef.current.srcObject = stream;

        mediaRecorderRef.current = new MediaRecorder(stream, {
          mimeType: "video/webm",
        });

        mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        mediaRecorderRef.current.start();
      } catch (error) {
        console.error("Error accessing media devices.", error);
        alert(
          "Error accessing camera and microphone. Please ensure they are connected and try again."
        );
      }
    };

    startRecording();

    return () => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setRecordedChunks((prev) => [...prev, event.data]);
    }
  };

  const uploadRecording = async () => {
    if (recordedChunks.length === 0) return;

    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const formData = new FormData();
    formData.append("video", blob, "interview.webm");

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Video uploaded successfully");
      } else {
        console.error("Failed to upload video");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  // Calling the uploadRecording when component is unmount(cleanup function of the useEffect())
  useEffect(() => {
    return () => {
      uploadRecording();
    };
  }, [recordedChunks]);

  return (
    <div>
      <video ref={webcamRef} autoPlay playsInline />
    </div>
  );
};

export default VideoRecorder;
