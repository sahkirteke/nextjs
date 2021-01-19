import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
    static getInitialProps(context) {

        const promise = new Promise((resolve, reject)=> {
            setTimeout(() => {
                resolve({appName: 'super'})
            },1000);
        });
        return promise;
    }
  render() {
    return (
      <div>
        <h1>Ana sayfa {this.props.appName}</h1>
        <p>
          Git <Link href="/auth"> Kullanıcı syfası </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>
          {" "}
          Kullanıcı Sayfasına git
        </button>
      </div>
    );
  }
}
export default IndexPage;
