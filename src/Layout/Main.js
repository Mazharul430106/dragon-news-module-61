import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Outlet} from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSidebar from '../Pages/Shared/LeftSidebar/LeftSidebar';
import RightSideBar from '../Pages/Shared/RightSideBar/RightSideBar';
import Home from '../Pages/Home/Home';


const Main = () => {

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftSidebar></LeftSidebar>
                    </Col>
                    <Col lg='7'>
                        <Home></Home>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideBar></RightSideBar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;