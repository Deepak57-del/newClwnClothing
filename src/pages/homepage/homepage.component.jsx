import React from 'react';
import '../homepage/homepage.style.scss';
import Directory from '../../component/directory/directory.component'
const HomePage = ()=>(
    <div className="homepage">
        <div className="directory-menu">
            <Directory/>
        </div>
    </div>
)
export default HomePage;