import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {LinksPage} from "./pages/LinksPage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPaje";
import {CrtrPage} from "./pages/CrtrPage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CrtrPage />
                </Route>
                <Route path="/detail/:id" exact>
                    <DetailPage />
                </Route>
                <Redirect to="create"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
            <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}