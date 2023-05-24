import { useEffect } from "react";



export default function ApiUtils({ updateData }) {

    //here I am using json server we need to make changes to this api
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