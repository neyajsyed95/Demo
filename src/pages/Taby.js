import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Row,Col,Container  } from 'react-bootstrap';

const Taby = () => {

return(

  <section className='blogs'>
    <Container>
    <Row>
  <Tabs>
  <TabList>
    <Tab>Title 1</Tab>
    <Tab>Title 2</Tab>
    <Tab>Title 3</Tab>
    <Tab>Title 4</Tab>
    <Tab>Title 5</Tab>
  </TabList>

  <TabPanel>
    <h2>Any content 1</h2>
  </TabPanel>
  <TabPanel>
    <h2>Any content 2</h2>
  </TabPanel>
  <TabPanel>
    <h2>Any content 3</h2>
  </TabPanel>

  <TabPanel>
    <h2>Any content 4</h2>
  </TabPanel>

  <TabPanel>
    <h2>Any content 5</h2>
  </TabPanel>


</Tabs>
</Row>
</Container>
    </section>
)
}


export default Taby;