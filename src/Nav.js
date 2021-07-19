import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position:'fixed',
    bottom: 0,
    backgroundColor:'#2d313a',
    color:'white',
    zIndex:100,
    
    padding:'7px',


  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();



  useEffect(() => {
     if(value===0) history.push("/");
     else if(value===1) history.push("/Movies");
     if(value===2) history.push("/WebSeries");
     if(value===3) history.push("/Search");

  }, [value,history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style ={{color: 'white'}} label="Trending" icon={<WhatshotIcon/>} />
      <BottomNavigationAction style ={{color: 'white'}} label="Movies" icon={<MovieIcon/>} />
      <BottomNavigationAction style ={{color: 'white'}} label="Web Series" icon={<TvIcon/>} />
      <BottomNavigationAction style ={{color: 'white'}} label="Search" icon={<SearchIcon/>} />
    </BottomNavigation>
  );
}
