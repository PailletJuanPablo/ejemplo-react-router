import React from 'react'
import {Switch, Route} from 'react-router-dom';
import GenresInDb from '../GenresInDb';
import LastMovieInDb from '../LastMovieInDb';
import ContentRowMovies from '../ContentRowMovies';

const routes = [
    {
        path: '/genres',
        component: <GenresInDb /> 
    },
    {
        path: '/last',
        component: <LastMovieInDb />
    },
    {
        path: '/',
        component: <ContentRowMovies />,
        exact: true
    },
    {
        path: '*',
        component: (<div> Página de Error </div>),
    }
]

export default function Routes() {
    return (
        <Switch>
            {
            routes.map(
                (route, index) => <Route exact={route.exact ? true : false} key={index} path={route.path} children={route.component} />)
          }
        </Switch>
    )
}
