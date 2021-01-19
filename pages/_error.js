import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const  errorPage =  () => (
    <div>
        <h1>Hata  var </h1>
        <h1>hata  oldu <Link href="/"> geri </Link>.</h1>
        
    </div>
);

export default errorPage;