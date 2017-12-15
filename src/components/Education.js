import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMMM/YYYY');
  		const enddate = moment(item.endDate).format('MMMM/YYYY');
  		return (
          <div key={index}>
            <h3>{item.studyType} {item.area}</h3>
  				  <h4>{item.institution}</h4>
  				  <p>Estancia: {startdate} - {enddate}</p>
            <p>Cursos:{item.courses}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Educación</h2>
        {getEducation}
      </section>
  	)
};

export default Education;