import React, {useState} from 'react'
import axios from 'axios';
const Fileupload = () => {

    const [file,setFile] = useState('');
    const [email, setEmail] = useState('')
    const [filePreview,setFilePreview] = useState(null);
    const [filename,setFilename] = useState('');
    const [uploadedFile,setUploadedFile] = useState({});
    const onChangeHandler = e => {
        setFile(e.target.files[0]);
        setFilePreview(URL.createObjectURL(e.target.files[0]));
        console.log(filePreview);
    }
    const onSubmitHandler =async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        
        try{

            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }});
                console.log(res);
                const {fileName,filePath} = res.data;
                setUploadedFile({fileName,filePath});

        }catch(err){
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
              } else {
                console.log(err);
              }
            }

        
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>

                <input type='file' id="fileup"  onChange={onChangeHandler}/>
                <input type="submit" value="submit" />
            </form>
            {uploadedFile ? <div> <img src={uploadedFile.filePath} /> </div> : '' }
            <img src={filePreview}/>
        </div>
    )
}
export default Fileupload;