import axios from 'axios';

const Encrypt = async (text, shift) => {
    const response = await axios.post(`http://localhost:8080/api/encrypt`, null, {
        params: { text, shift },
    });
    return response.data;
};

export default Encrypt;