import React from 'react';
import momento from 'moment';
import es from 'moment/locale/es';

momento.locale('es');

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = momento(props.workItemData.startDate).format('MMMM/YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = momento(props.workItemData.endDate).format('MMMM/YYYY');
        } else {
          enddate = 'Actual';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="workItem">
          <h3>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3>
          <p className="workDates">{getWorkDates()}</p>
          <p>{props.workItemData.summary}</p>
          <ul>{getHighlights}</ul>
        </div>
    )
};

export default WorkItem;