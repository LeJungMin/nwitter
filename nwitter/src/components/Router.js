import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import Navigation from 'components/Navigation';
import { Redirect } from 'react-router-dom';

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? (
                    <div
                    style={{
                      maxWidth: 890,
                      width: "100%",
                      margin: "0 auto",
                      marginTop: 80,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Route exact path="/">
                      <Home userObj={userObj} />
                    </Route>
                    <Route exact path="/profile">
                      <Profile userObj={userObj} refreshUser={refreshUser} />
                    </Route>
                  </div>
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;