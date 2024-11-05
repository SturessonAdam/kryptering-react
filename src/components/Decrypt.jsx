import axios from 'axios';

const Decrypt = async (text, shift) => {
    const response = await axios.post(`http://localhost:8080/api/decrypt`, null, {
        params: { text, shift },
    });
    return response.data;
};

export default Decrypt;