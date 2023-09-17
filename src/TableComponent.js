import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const TableComponent = ({ data }) => {

    const initialAsset = {
        "Asset ID": "",
        "Asset Type": "",
        "Floor": "",
        "Room": "",
        "Installation Date": "",
        "Manufacturer": "",
        "Operational Time (hrs)": "",
        "Work Orders": "",
        "Repairs": "",
        "Last Serviced Date": ""
    };

    const [jsonData, setJsonData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newAsset, setNewAsset] = useState(initialAsset);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAsset({...newAsset, [name]: value });
    };

    const handleAddAsset = () => {
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setJsonData([...jsonData, newAsset]);
        setNewAsset(initialAsset);
        setShowForm(false);
    };

    return (


        <
        div >
        <
        button onClick = { handleAddAsset }
        className = "btn btn-primary" > Add Asset < /button>

        {
            showForm && ( <
                form onSubmit = { handleSubmit } > {
                    Object.keys(initialAsset).map((key) => ( <
                        div key = { key } >
                        <
                        label > { key } < /label> <
                        input type = "text"
                        name = { key }
                        value = { newAsset[key] }
                        onChange = { handleInputChange }
                        /> <
                        /div>
                    ))
                } <
                button type = "submit" > Save < /button> <
                /form>
            )
        }

        <
        div >
        <
        pre > { JSON.stringify(jsonData, null, 2) } < /pre> <
        /div> <
        table border = "1"
        className = "table table-bordered" >
        <
        thead >
        <
        tr >
        <
        th > Asset ID < /th> <
        th > Asset Type < /th> <
        th > Floor < /th> <
        th > Room < /th> <
        th > Installation Date < /th> <
        th > Manufacturer < /th> <
        th > Operational Time(hrs) < /th> <
        th > Work Orders < /th> <
        th > Repairs < /th> <
        th > Last Serviced Date < /th> <
        /tr> <
        /thead> <
        tbody > {
            data.map((item, index) => ( <
                tr key = { index } >
                <
                td > { item['Asset ID'] } < /td> <
                td > { item['Asset Type'] } < /td> <
                td > { item['Floor'] } < /td> <
                td > { item['Room'] } < /td> <
                td > { item['Installation Date'] } < /td> <
                td > { item['Manufacturer'] } < /td> <
                td > { item['Operational Time (hrs)'] } < /td> <
                td > { item['Work Orders'] } < /td> <
                td > { item['Repairs'] } < /td> <
                td > { item['Last Serviced Date'] } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table></div >
    );
};

export default TableComponent;