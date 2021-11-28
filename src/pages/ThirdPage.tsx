import writePositionData from "../services/position.service";
import {useEffect} from "react";

export default function ThirdPage() {

    useEffect(() => {
        writePositionData(3);
    }, []);


    return (
        <div>
            <h1>ThirdPage Page</h1>
            <p>This is the ThirdPage page</p>
        </div>
    );
}
