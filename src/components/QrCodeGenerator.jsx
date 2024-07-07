import React, {useState} from "react";
import QRCode from "qrcode.react";

const QrCodeGenerator = () =>{
    const [text, setText] = useState('');
    const handleChange = (e) =>{
        setText(e.target.value);
    };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
            <input type="text" value={text} onChange={handleChange} placeholder="Enter your text" className="mb-4 p-2 border border-gray-300 rounded"/>
            <QRCode value={text} size={256}/>
        </div>
    );
};

export default QrCodeGenerator;
