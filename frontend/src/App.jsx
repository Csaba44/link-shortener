import React, { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api') // Use Docker Compose service name
            .then((response) => response.json())
            .then((data) => setData(data.message))
            .catch((error) => console.error("Error fetching API:", error));
    }, []);

    return (
        <div>
            <p>{data || "Loading..."}</p>
        </div>
    );
}

export default App;
