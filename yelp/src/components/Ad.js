import React, {useEffect} from "react";
import axios from 'axios'
import ComplexGrid from './ComplexGrid';
import { connect } from 'react-redux';
import { favoriteSave } from '../actions/favoritesAction';
import { fetchAd } from '../actions/adActions';



export class Ad extends React.Component {
 
  constructor(props) {
    
    super(props);
    this.state = {
      ad: null
    };
    console.log(`Ad`,this.props.favoriteSave)
  }

  // const Ad = (props) => {
  //   console.log(`Ad props`, props)
  //   const [ad, setAd] = ([])
  
  
  //recieve from props id of ad that was clicked on, coming from ComplexGrid
  componentDidMount() {
    console.log(this.props.match)
    this.fetchMovie(this.props.match.params.id);
  }

  //if id is not = to 
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  // useEffect(() => {
  //   props.fetchAd()
  // }, [])

  //     if (props.isFetching) {
  //       return <h2>Loading Resturants Facts...</h2>;
  //     }

      

  fetchMovie = id => {
    axios
      .get(`https://yelp-feelers-be.herokuapp.com/reviews/${id}`)
      .then(res => this.setState({ ad: res.data.review }))
      // .then(res => console.log(res.data.review))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.ad);
  };

  // deleteItem = e => {
  //   e.preventDefault();
  //   axios
  //     .delete(`http://localhost:5000/api/movies/${this.state.ad.id}`)
  //     .then(res => {
  //       console.log(res.data)
  //     })
  //     .catch(err => console.log(err.response));
  // };

  render() {
    if (!this.state.ad) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <ComplexGrid fact={this.state.ad} />
        <button className="save-button" onClick={this.props.favoriteSave}>
          Save to Favorites
        </button>
        {/* <button
        onClick={() => this.props.history.push(`/update-movie/${this.state.ad.id}`)}
      >
        Edit Movie
      </button>
      <button onClick={this.deleteItem} className="md-button">
        Delete Item
      </button> */}
      </div>
    );
  }
}

export default connect(
    null,
    { favoriteSave }
  )(Ad);



  // const mapStateToProps = state => {
  //   return {
  //     ad: state.adReducer.ad,
  //     isFetching: state.adReducer.isFetching,
  //     error: state.adReducer.error
  //   };
  // };
  
  // export default connect(
  //   mapStateToProps,
  //   { fetchAd }
  // )(Ad);





 

  


