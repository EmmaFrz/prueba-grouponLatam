import React from 'react';
import { Form, Input, Button, Icon} from 'antd';
import "antd/dist/antd.css";

function SearchForm(props){
	return(
		<Form layout="inline" onSubmit={props.handleSubmit}>
			<Form.Item label="Titulo">
				<Input name='movie' style={{width:'100px'}} onChange={props.handleChange} />
			</Form.Item>
			<Form.Item label="Año">
				<Input name='year' style={{width:'100px'}} onChange={props.handleChange}/>
			</Form.Item>												
			<Button type="primary" htmlType="submit">
	      Search<Icon type="search" />
	    </Button>
		</Form>
	)
}

export default SearchForm;