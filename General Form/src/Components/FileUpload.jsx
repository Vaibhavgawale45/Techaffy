import React, { useState } from 'react';

const FileUpload = () => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            console.log(file);
            setImageName(file.name);
        }
    };

    const handleApi = () => {
        if (!image) {
            console.error('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        fetch('https://v3vc7bsc7f.execute-api.ap-south-1.amazonaws.com/Test/upload', {
            method: 'POST',
            headers: {
                'filename': imageName
            },
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            {/* <!-- general form elements --> */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Quick Example</h3>
              </div>
              {/* <!-- /.card-header -->
              <!-- form start --> */}
              <form>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputFile">File input</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" name='file' id="exampleInputFile" onChange={handleImage} />
                        <label className="custom-file-label" htmlFor="exampleInputFile">{imageName || 'Choose file'}</label>
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text" onClick={handleApi}>Upload</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                </div>
                {/* <!-- /.card-body --> */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
        </div>
    );
};

export default FileUpload;
