import writePositionData from "../services/position.service";
import {useEffect} from "react";


export default function SecondPage() {

    useEffect(() => {
        writePositionData(2);
    }, []);



    return (
        <div>
            <h1>SecondPage Page</h1>
            <p>This is the SecondPage page</p>
        </div>
    );
}
