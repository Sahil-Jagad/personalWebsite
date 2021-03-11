import React, {useEffect, useState} from "react";
import sanityClient from "../client.js"
import { Link } from "react-router-dom";
export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_types == "project]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, [])

    return <h1>Project Page</h1>
}