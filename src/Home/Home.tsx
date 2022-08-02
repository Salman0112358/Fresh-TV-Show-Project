import React from 'react';

// import components
import Header from '../Header/Header';
import Grid from '../Grid/Grid'

//import episodes
import episodes from '../episodes.json'

//import inteface
import { IEpisode } from '../types';


const Home = () : JSX.Element => {
    return (
        <>
        <Header/>
        <Grid header = "showing all episodes">
            {episodes.map((item : IEpisode) => <div key = {item.id}>{item.name}</div>)}
        </Grid>
        </>
    )
}
export default Home