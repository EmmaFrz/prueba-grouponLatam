import React from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

function Favorites(props){
    return(
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <h3>Tus peliculas favoritas</h3>
		{props.favorites.map((data,index) => {
			return(
			 <div style={{ background: '#ECECEC', padding: '30px' }}>
			    <Row gutter={16}>
			      <Col span={4}>
			        <Card 
			        	style={{ width: 300 }}
						hoverable
						cover={<img alt="poster" src={data.Poster} />}>
			          Card content
			          <Meta title={data.Title} description={data.Description} />
			        </Card>
			      </Col>
			    </Row>
			  </div>
		)})}        
        </div>
    )	
}

export default Favorites;

