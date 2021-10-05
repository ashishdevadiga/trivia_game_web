import React, { useEffect, useState } from "react";
import { PATH, SET_API } from "../../services";
import { GET } from "../../types";
import Item from "../Items/Item";

function HomeForm(props) {
    const [datasource, setDatasource] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await SET_API(PATH.TRIVIA_DATA, GET);
        setDatasource(response);
    }
    return(
        <div className="App-form">
            {datasource&&
            datasource.map((data, keys)=>
            <Item
                key ={keys}
                data ={data}
                fetchData={fetchData}
            />)}
        </div>
    )
}
export default HomeForm;