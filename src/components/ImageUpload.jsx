import axios from 'axios';
import React, { useState } from 'react';

function ImageUpload() {
    const [img, setImg] = useState(null);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = async () => {
                const base64String = reader.result.split(',')[1]; // Extract base64 part
                try {
                    const response = await axios.post('https://freeimage.host/api/1/upload', {
                        key: '6d207e02198a847aa98d0a2a901485a5',
                        action: 'upload',
                        source: base64String,
                        format: 'json',
                    });
                    console.log(response.data);
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            };
        }
    };

    return (
        <form>
            <input type="file" name="image" onChange={handleImageUpload} />
        </form>
    );
}

export default ImageUpload;
