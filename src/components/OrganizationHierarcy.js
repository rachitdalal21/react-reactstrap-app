import React, {Component} from 'react';

class OrganizationHierarcy extends Component {
    constructor(props){
        super(props)

    }

    collectEmp(employee) {
        let fRes = [];
        //console.log(employee)
        employee.forEach( (emp) => {
            if(emp.reports && emp.reports.length > 0 ){
                let res = this.collectEmp(emp.reports);

                fRes.concat(emp, res);
            } else {
                fRes.concat(emp);
            }
        })
        return fRes;
    }

    convDict(empDetails){
        let dict = {}
        for (let i =0; i < empDetails.length; i++)
        {
            if (!dict[empDetails[i].department]){
                dict[empDetails[i].department] = 1;
            } else {
                dict[empDetails[i].department] += 1;
            }

            //console.log(dict);
        }
        return dict;
    }

    render( ){

        debugger
        const empDetails = this.collectEmp(this.props.employees[0].reports)
        const empDict = new Map(Object.entries(this.convDict(empDetails)));
        debugger;

        return (
            <p>Hello</p>
        );
    }
}

export default OrganizationHierarcy;