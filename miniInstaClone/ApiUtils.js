import { useEffect } from "react";



export default function ApiUtils({ updateData }) {

    useEffect(() => {
        fetch("http://localhost:3002/user")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error("Something went wrong");
                }
                return res.json();
            })
            .then(data => {
                updateData(data);
                // console.log(data);
            })
    }, [])
}