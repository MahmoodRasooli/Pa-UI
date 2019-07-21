import React, { Component } from 'react';
import {Card , CardHeader,CardBody , Table , Col , Row} from 'reactstrap'

 class EventBox extends Component {
    render(){
        return (
           <span>
               <Row>
  <Col  xs="12" sm="6" lg="3" >
            <Card className="text-white bg-info" >
              <CardBody className="pb-0">
               <div className="text-value ">کوه</div>
               <div className="text-value ">کوه</div>
               <div className="text-value ">کوه</div>
                
                <table style={{float:"right"}}>
                     <tr>
                         <td>نام</td>
                         <td></td>
                     </tr>
                     <tr>
                         <td>ظرفیت</td>
                         <td>دو نفر</td>
                     </tr>
                     <tr>
                         <td>تاریخ شروع</td>
                         <td>12/1</td>
                     </tr>
                     <tr>
                         <td>شهر</td>
                         <td>تهران</td>
                     </tr>
                 </table>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
               asd
              </div>
            </Card>
          </Col>

               </Row>
               
            </span>
        )
    };
}


export default EventBox

