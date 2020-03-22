import React from 'react';
import { Table } from 'react-bootstrap';
import './MovementTable.css';

//*** This code is copyright 2002-2016 by Gavin Kistner, !@phrogz.net
//*** It is covered under the license viewable at http://phrogz.net/JS/_ReuseLicense.txt
Date.prototype.customFormat = function(formatString){
    var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
    YY = ((YYYY=this.getFullYear())+"").slice(-2);
    MM = (M=this.getMonth()+1)<10?('0'+M):M;
    MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
    DD = (D=this.getDate())<10?('0'+D):D;
    DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
    th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
    formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
    h=(hhh=this.getHours());
    if (h==0) h=24;
    if (h>12) h-=12;
    hh = h<10?('0'+h):h;
    hhhh = hhh<10?('0'+hhh):hhh;
    AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
    mm=(m=this.getMinutes())<10?('0'+m):m;
    ss=(s=this.getSeconds())<10?('0'+s):s;
    return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
};

const onCheckChange = (e, props) => {
    const isChecked = e.target.checked;
    const index = props.marker.index;

    if (isChecked) {
        props.addMarker(index)
    } else {
        props.removeMarker(index)
    }
}

const TableRowElement = props => {

    const marker = props.marker;
    const index = marker.index;
    const endTime = new Date(marker.endTimeMillis);
    const startTime = new Date(marker.startTimeMillis);
    const endTimeDate = endTime.customFormat("#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#");
    const startTimeDate = startTime.customFormat("#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#");

    return (
        <tr>
            <td>{index}</td>
            <td>{startTimeDate}</td>
            <td>{endTimeDate}</td>
        </tr>
    )
}

const MovementTable = props => {
    const markerList = props.markerList;
    return (
        <Table striped bordered hover className='movement-table-overflow'>
            <thead>
                <tr>
                    <th>Marker ID</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </tr>
            </thead>
            <tbody>
                {markerList.map((marker) => {
                    const markerBundle = {...props, marker}
                    return (<TableRowElement {...markerBundle}/>)
                })}
            </tbody>
        </Table>
    )
}


export default MovementTable;