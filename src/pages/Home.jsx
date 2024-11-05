import Encrypt from '../components/Encrypt'
import Decrypt from '../components/Decrypt'
import {useState} from "react";

function Home() {
    const [inputText, setInputText] = useState('');
    const [shift, setShift] = useState(0);
    const [result, setResult] = useState('');
    const [operation, setOperation] = useState('encrypt');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (operation === 'encrypt') {
                const encryptedText = await Encrypt(inputText, shift);
                setResult(encryptedText);
            } else if (operation === 'decrypt') {
                const decryptedText = await Decrypt(inputText, shift);
                setResult(decryptedText);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder={"word to encrypt/decrypt"}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder={"shift number"}
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                        <option value="encrypt">encrypt</option>
                        <option value="decrypt">decrypt</option>
                    </select>
                </div>
                <button type="submit">Utför</button>
            </form>
            <h2>Resultat:</h2>
            <p>{result}</p>
        </div>
    )
}

export default Home;