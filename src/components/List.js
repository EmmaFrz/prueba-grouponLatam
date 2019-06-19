import React from 'react';
import { Card, Button} from 'antd';
import "antd/dist/antd.css";
const { Meta } = Card;

function CarList(props){
	return(
		<div style={{ padding: '30px' }}>
			<Card
				style={{ width: 300 }}
				hoverable
				cover={<img alt="poster" src={props.data.Poster} />}
				actions={[
					<Button onClick={props.handleClick} >Ver más</Button>,
					<Button onClick={props.handleFavorite} >Favorito</Button>
				]}
			>
			<Meta title={props.data.Title} description={props.data.Year} />
			</Card>
		</div>
	)
}

export default CarList;