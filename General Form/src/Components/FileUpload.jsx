import React, { useState } from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [previewUrl, setPreviewUrl] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setFileName(file.name);
            setPreviewUrl(URL.createObjectURL(file));
            setShowConfirmation(true);
        }
    };

    const handleApi = () => {
        if (!file) {
            console.error('No file selected.');
            return;
        }

        fetch('https://v3vc7bsc7f.execute-api.ap-south-1.amazonaws.com/Test/upload', {
            method: 'POST',
            headers: {
                'filename': fileName
            },
            body: file,
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

    const handleYes = () => {
        handleApi();
        setShowConfirmation(false);
        setFile(null);
        setFileName('');
        setPreviewUrl(null);
    };

    const handleNo = () => {
        setShowConfirmation(false);
        setFile(null);
        setFileName('');
        setPreviewUrl(null);
    };

    return (
        <div>
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Quick Example</h3>
                </div>
                <form>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name='file' id="exampleInputFile" onChange={handleFile} />
                                    <label className="custom-file-label" htmlFor="exampleInputFile">{fileName || 'Choose file'}</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

            <Modal show={showConfirmation} onHide={handleNo}>
                <Modal.Header>
                    <Modal.Title>Do you want to upload it?</Modal.Title>
                    <CloseButton onClick={handleNo} />
                </Modal.Header>
                <Modal.Body>
                    {previewUrl && (
                        <img src={previewUrl} alt="Preview" style={{ width: '100%' }} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleNo}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleYes}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            
    </div>
    );
};

export default FileUpload;
