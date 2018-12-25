import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {NavigationActions} from 'react-navigation'
import MovieDetail from '../component/MovieDetail'
import { getMovies, getMovieDetail } from '../MovieActions'

export default connect(
   state => ({
   	  //orders: toJS(state.profile.getIn(['active_orders'])),
   	  movie: state.movie.get('selected_movie').toJS(),
   }),
   dispatch => {
     return {
       navigate: bindActionCreators(NavigationActions.navigate, dispatch),
       getMovieDetail: bindActionCreators(getMovieDetail, dispatch),
     }
   }
)(MovieDetail)
