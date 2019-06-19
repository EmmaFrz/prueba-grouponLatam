import React from 'react';
import { Layout } from 'antd';


function MainLayout(props){
	return(
		<React.Fragment>
			<Layout>
        <Layout.Header>
          <h1 style={{color:"white"}}>Movies Project</h1>
        </Layout.Header>
					<Layout.Content style={{ margin: '24px 16px 24px 16px' }}>
        		{props.children}
        	</Layout.Content>
         <Layout.Footer style={{background:'#fff'}}>
         <p>Emmanuel Franquiz</p>
         </Layout.Footer>
       </Layout>
		</React.Fragment>
	)
}

export default MainLayout;
