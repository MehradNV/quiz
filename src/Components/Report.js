import React from 'react';

class Report extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.reports.highschool}</p>
                <p>{this.props.reports.university}</p>
                <p>{this.props.reports.degree}</p>


            </div>
        );
    }
}

export default Report;