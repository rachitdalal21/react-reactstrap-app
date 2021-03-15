import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {EMPLOYEES} from '../shared/employees';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    employees: EMPLOYEES
};

function collectEmp ( emp ) {
    let result  = [],
        hierarchyDepth = 0

    emp.reports.forEach( ( employees ) => {
        if (employees.reports && employees.reports.length > 0 ){
            let res = collectEmp(employees);
            hierarchyDepth += 1
            result = result.concat({...employees, hierarchyDepth:hierarchyDepth}, collectEmp(employees));
        } else {
            result = result.concat({...employees, hierarchyDepth:hierarchyDepth})
            hierarchyDepth = 0
        }
    });
    return result;
}

function  minVal ( left, right ) {
    return left > right ? right : left ;

}
export const     Reducer = (state = initialState, action) => {
    // let n = 4,
    //     te = 7;
    // for ( let i = 0; i < te; i++ ){
    //     let st = "",
    //         pr = 4;
    //     // for (let j = 0; j < i+1; j++ ){
    //     //     // if ( (i == 0  ||  i == te) ||  (j == 0 || j == te) ){
    //     //     //     //console.log("3");
    //     //     //     st += n.toString() ;
    //     //     // } else if( ( i > 0 && i < te ) &&  ( j >0 && j < te ) ){
    //     //     //     //if (( i!=2 && j!= 2)){
    //     //     //     // &&( (i !== (n+1) / 2  && j != (n+1) /2) )
    //     //     //
    //     //     //         if ( i == j && i == parseInt(te / 2 )   && j == parseInt(te /2 )) {
    //     //     //             st += (1).toString() ;
    //     //     //         } else {
    //     //     //             st += (n-i).toString() ;
    //     //     //         }
    //     //     //     //}
    //     //     //     //console.log("2")
    //     //     // }
    //     //     st +=  pr  ;
    //     //     pr -= 1;
    //     // }
    //     let start=0,
    //         end = 7;
    //      while (n != 0){
    //          st = "";
    //          for (let i = start; i < end; i++){
    //              for (let j = start; j < end; j++){
    //                  if (( i == start || i == end) || (j == start || j == end )){
    //                      st += n;
    //
    //                  }
    //              }
    //          }
    //          start ++;
    //          end--;
    //          n--;
    //
    //          console.log(st);
    //      }
    //
    //
    // }

    let test = collectEmp(initialState.employees[0]);
    let dict  = {},
        maximun = Number.MIN_SAFE_INTEGER;
    for (let i =0; i < test.length; i++)
    {
        if (!dict[test[i].department]){
            dict[test[i].department] = 1;
            //if (maximun < test[i].hierarchyDepth ){
                    maximun =  test[i].hierarchyDepth;
                // console.log(test[i].department,  test[i].hierarchyDepth)
            //}
        } else {
            dict[test[i].department] += 1;
            //if (maximun < test[i].hierarchyDepth ){
                maximun = dict[test[i].department].hierarchyDepth;
                //console.log(test[i].department,  test[i].hierarchyDepth)
            //}
        }

        //console.log(dict);
    }
    const totalLength = 7,
        num = 4;
    let right = totalLength - 1,
        left = 0,
        top = 0,
        bottom = totalLength - 1,
        MIN1 = 0,
        MIN2 = 0,
        MIN =  0,
        fstr  = "";

    for(let i = 0; i < totalLength; i++){
        right = totalLength - 1;
        left = 0;
        fstr = "";
        for (let j=0; j < totalLength; j++){
            MIN1 = minVal(left, right);
            MIN2 = minVal(top, bottom);
            MIN = minVal(MIN1, MIN2);
            fstr += (num - MIN);
            right -= 1;
            left += 1;
        }
        console.log(fstr);
        top += 1;
        bottom -= 1;

    }
    console.log(dict);
    return state;
};
