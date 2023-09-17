import React from 'react';
import TableComponent from './TableComponent';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const AssetStatistics = ({ data }) => {   // Extract asset types
      
    const assetTypes = [...new Set(data.map(item => item["Asset Type"]))];

       // Calculate statistics
      
    const stats = assetTypes.map(type => {     const assetsOfType = data.filter(item => item["Asset Type"] === type);     const totalRepairs = assetsOfType.reduce((acc, curr) => acc + Number(curr.Repairs), 0);     const totalOperationalTime = assetsOfType.reduce((acc, curr) => acc + Number(curr["Operational Time (hrs)"]), 0);     const averageOperationalTime = totalOperationalTime / assetsOfType.length;     const repairRate = totalRepairs / totalOperationalTime;

             return {       type,       count: assetsOfType.length,       averageOperationalTime: averageOperationalTime.toFixed(2),       repairRate: repairRate.toFixed(8),       predictedRepairs: (repairRate * 10000).toFixed(2)     };   });

    const handleRepairRequest = (assetType) => {
        return ( < App / > );

    }

      
    return (     < div >



               < h2 > Asset Statistics < /h2>       < p > Total Number of Assets: { data.length } < /p>       < table border = "1"
        className = "table table-bordered" >          < thead >            < tr >              < th > Asset Type < /th>             < th > Count < /th>             < th > Avg Operational Time < /th>             < th > Repair Rate(per hr) < /th>             < th > Predicted Repairs(next 10, 000 hrs) < /th> <
        th > Action < /th>           < /tr>         < /thead>         < tbody >           {
            stats.map((s, index) => (             < tr key = { index } >                < td > { s.type } < /td>               < td > { s.count } < /td>               < td > { s.averageOperationalTime } < /td>               < td > { s.repairRate } < /td>               < td > { s.predictedRepairs } < /td> <
                td > < button onClick = {
                    () => handleRepairRequest(s.type) } > Smart Repair < /button></td >              < /tr>          ))
        }         < /tbody>       < /table>     < /div>  );
};

export default AssetStatistics;