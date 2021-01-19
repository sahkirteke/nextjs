import React from 'react';
import User from '../../components/User';


const  authIndexPage =  (props) => (
    <div>
        <h1>
            Kllanıcı sayfası --- {props.appName}
        </h1>
        <User name  = "Husam" age = "27" />
        
    </div>
);
authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({appName: 'super Ayrı'})
        },1000);
    });
    return promise;
}
export default authIndexPage;