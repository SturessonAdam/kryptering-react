import axios from 'axios';

const Encrypt = async (text, shift) => {
    const response = await axios.get(`http://localhost:8080/encrypt`, {
        params: { text, shift },
    });
    return response.data;
};

export default Encrypt;