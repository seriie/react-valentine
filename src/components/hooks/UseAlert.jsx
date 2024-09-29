import { useState } from 'react';

export default function useAlert() {
    const [alert, setAlert] = useState(null);

    function showAlert(text, duration) {
        setAlert(text);
        setTimeout(() => {
            setAlert(null);
        }, duration);
    }

    return {
        alert,
        showAlert,
    };
}