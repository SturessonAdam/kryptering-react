import axios from 'axios';

const Decrypt = async (text, shift) => {
    const response = await axios.get(`http://localhost:8080/decrypt`, {
        params: { text, shift },
    });
    return response.data;
};

export default Decrypt;