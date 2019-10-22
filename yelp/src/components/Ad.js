import React, {useEffect} from "react";
import ComplexGrid from './ComplexGrid';
import { connect } from 'react-redux';

import { fetchAd } from '../actions/adActions';



// export default class Ad extends React.Component {
  
//   constructor(props) {
//     console.log(`ad`, props)
//     super(props);
//     this.state = {
//       ad: null
//     };
//   }

  const Ad = (props) => {
    console.log(`Ad props`, props)
    const [ad, setAd] = ([])
  
  
  // //recieve from props id of ad that was clicked on, coming from ComplexGrid
  // componentDidMount() {
  //   console.log(this.props.match.params.id)
  //   this.fetchMovie(this.props.match.params.id);
  // }

  // //if id is not = to 
  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  useEffect(() => {
    props.fetchAd()
  }, [])

      if (props.isFetching) {
        return <h2>Loading Resturants Facts...</h2>;
      }

      

  // fetchMovie = id => {
  //   axios
  //     .get(`https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/movies/${id}`)
  //     .then(res => this.setState({ ad: res.data }))
  //     .catch(err => console.log(err.response));
  // };

  const saveMovie = () => {
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

  // render() {
  //   if (!this.state.ad) {
  //     return <div>Loading movie information...</div>;
  //   }

    return (
      <div className="save-wrapper">
        <ComplexGrid movie={this.state.ad} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <button
        onClick={() => this.props.history.push(`/update-movie/${this.state.ad.id}`)}
      >
        Edit Movie
      </button>
      <button onClick={this.deleteItem} className="md-button">
        Delete Item
      </button>
      </div>
    );
  }


  const mapStateToProps = state => {
    return {
      ad: state.adReducer.ad,
      isFetching: state.adReducer.isFetching,
      error: state.adReducer.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchAd }
  )(Ad);





 

  

  //if state is null, loading movie
//   render() {
   
//     );
//   }
// }


// if (!this.state.movie) {
//   return <div>Loading movie information...</div>;
// }

// return (
//   <div className="save-wrapper">
//     <MovieCard movie={this.state.movie} />
//     <div className="save-button" onClick={this.saveMovie}>
//       Save
//     </div>
//     <button
//     onClick={() => this.props.history.push(`/update-movie/${this.state.movie.id}`)}
//   >
//     Edit Movie
//   </button>
//   <button onClick={this.deleteItem} className="md-button">
//     Delete Item
//   </button>
//   </div>