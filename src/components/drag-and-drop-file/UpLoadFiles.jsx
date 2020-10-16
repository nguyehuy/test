import React, { Component } from 'react'
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import "./UpLoadFiles.css";
import axios from 'axios';


const Preview = ({meta}) => {
    const { name, percent, status, previewUrl } = meta;
    return (
      <div className="preview-box">
        <img src={previewUrl} /> <span className="name">{name}</span> - <span className="status">{status}</span>{status !== "done" && <span className="percent">&nbsp;({Math.round(percent)}%)</span>}
      </div>
    )
}

function UpLoadFiles() {
    // specify upload params and API url to file upload
  const getUploadParams = ({ file }) => {
    const body = new FormData();
    body.append('dataFiles', file);
    // body.append('para', '123');
    return { url: 'http://localhost:4000/uploadmultifile', body }
  }

  // handle the status of the file upload
  const handleChangeStatus = ({ meta, file, xhr}, status) => {
    if (status === 'done'){
        let response = JSON.parse(xhr.response);
        console.log(response.body);
    }  
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  // const handleDrop = files => {
  //   // Push all the axios request promise into a single array
  //   const uploaders = files.map(file => {
  //     // Initial FormData
  //     const formData = new FormData();
  //     formData.append("files", file);
      
  //     // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
  //     return axios.post("http://saunakovaasa.ml:8081/api/upload", formData,
  //     {
  //       headers: { 'X-Requested-With': 'XMLHttpRequest' },
  //     }).then(response => {
  //       const data = response.data;
  //       //const fileURL = data.secure_url // You should store this URL for future references in your app
  //       console.log(data);
  //     })
  //   });
  
  //   // Once all the files are uploaded 
  //   axios.all(uploaders).then(() => {
  //     console.log('cccc');
  //   });
  // }

  return (
    <div className="App">
      <h3>Drag and Drop file upload</h3>
      <div>
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          //onDrop={handleDrop}
          styles={{
            dropzone: { overflow: 'auto', border: '1px solid #999', background: '#f5f5f5' },
            inputLabelWithFiles: { margin: '20px 3%' }
          }}
          canRemove={false}
          PreviewComponent={Preview}
          onSubmit={handleSubmit}
          accept="image/*,audio/*,video/*"
        />
      </div>
    </div>
  );
    
}
export default UpLoadFiles;

// 'http://saunakovaasa.ml:8081/api/upload'
//https://httpbin.org/post