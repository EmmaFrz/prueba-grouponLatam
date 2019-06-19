import React from 'react';
import List from '../components/List.js';
import Search from '../components/Search.js'
import axios from 'axios'; 
import Modal from '../components/Modal.js';
import DashboardLayout from '../components/DashboardLayout.js';
import PageLoading from '../components/PageLoading.js';
import Favorites from '../components/Favorites.js';
class Dashboard extends React.Component{
  
  state = {
    movies:{},
    favorite:[],
    isVisible:false,
    collapsed:false,
    loading:true,
    error:null,
    search:false
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  handleDetailModalOk = (e) => {
    this.setState({
      isVisible:false,
    })
  };

  handleDetailModalCancel = (e) => {
    this.setState({
      error:null,
      isVisible:false,
    })
  };

  handleDetailClick = (e) => {
    this.setState({
      isVisible:true
    })
  };
  
  handleFavorite = (e) => {
    this.setState({
      favorite:[
        ...this.state.favorite,
        this.state.movie
      ]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
   this.setState({
      loading:true,error:null
    })
    axios.get(`http://www.omdbapi.com/?t=${e.target.movie.value}&y=${e.target.year.value}&apikey=afdde52d`)
    .then( res => {
        this.setState({
          loading:false,
          search:true,
          movie:res.data
        })
    })
  };

  
  render(){
    if (this.state.loading) {
      return(
        <PageLoading/>
      )
    }
    return(
      <DashboardLayout collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <Search handleSubmit={this.handleSubmit}/>
        {this.state.search && 
        <React.Fragment>
          <List 
            data={this.state.movie} 
            handleClick={this.handleDetailClick}
            handleFavorite={this.handleFavorite}
          />
          <Modal
            visible = {this.state.isVisible}
            onOk = {this.handleDetailModalOk}
            onCancel = {this.handleDetailModalCancel}
            data={this.state.movie}
          />   
          <Favorites
            favorites={this.state.favorite}
          />     
        </React.Fragment>
        }
        </div>
      </DashboardLayout>         
    )
  }

  componentDidMount(){
    this.setState({
      loading:false
    })
  };

}

export default Dashboard;
