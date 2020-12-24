import React from 'react';

const Navigation = (props) => {
    if (props.isSignedIn) {
        return (
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
                <button type="button" onClick={() => props.onRouteChange("signout")} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma3">Sign out</button>
            </nav>);
    } else {
    return (
        <div>
            <nav style={{display: "flex", justifyContent: "flex-end"}} className="pa3">
                <p onClick={() => props.onRouteChange("signin")} className="f6 link dim black underline pointer dib mr3">Sign in</p>
                <p onClick={() => props.onRouteChange("register")} className="f6 link dim black underline pointer dib">Sign up</p>
            </nav>
        </div>
    )}
}

export default Navigation;
