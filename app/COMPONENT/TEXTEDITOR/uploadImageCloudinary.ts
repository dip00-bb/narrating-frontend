import axios from "axios";

export async function uploadToCloudinary(file: File) {

    const response = await axios.post(
        "http://localhost:5000/api/cloudinary/signature"
    );

    const { data: signData } = response

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", signData.data.apiKey);
    formData.append("timestamp", signData.data.timestamp);
    formData.append("signature", signData.data.signature);
    formData.append("folder", signData.data.folder);

    const { data: uploadData } = await axios.post(
        `https://api.cloudinary.com/v1_1/${signData.data.cloudName}/image/upload`,
        formData
    );

    console.log(formData)

    return uploadData; 
}
