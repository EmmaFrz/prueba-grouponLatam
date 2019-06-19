import React from 'react';
import { Modal } from 'antd';
import "antd/dist/antd.css";

function ModalDetails(props){
	return(
		<React.Fragment>
			<Modal
				title="Movie Details"
				visible={props.visible}
				onOk={props.onOk}
				onCancel={props.onCancel}
			>
				<p>Title:{props.data.Title} </p>
				<p>Year:{props.data.Year} </p>
				<p>Rated:{props.data.Rated} </p>
				<p>Released:{props.data.Released} </p>
				<p>Runtime:{props.data.Runtime} </p>
				<p>Genre:{props.data.Genre} </p>
				<p>Director:{props.data.Director} </p>
				<p>Writer:{props.data.Writer} </p>
				<p>Actors:{props.data.Actors} </p>
				<p>Plot:{props.data.Plot} </p>
				<p>Language:{props.data.Language} </p>
				<p>Country:{props.data.Country} </p>
				<p>Awards:{props.data.Awards} </p>
				<p>Metascore:{props.data.Metascore} </p>
				<p>Type:{props.data.Type} </p>
				<p>BoxOffice:{props.data.BoxOffice} </p>
				<p>Production:{props.data.Production} </p>
				<p>Type:{props.data.Type} </p>
				<p>Website:<a target="_blank" href={props.data.Website} rel="noopener noreferrer">{props.data.Title}</a></p>				
			</Modal>
		</React.Fragment>
	)
}

export default ModalDetails
