/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React, {useState} from 'react';
import Adventures from './Adventures';
import AEMResponsiveGrid from './aem/AEMResponsiveGrid';
import AEMTitle from './aem/AEMTitle';
import AEMText from './aem/AEMText';
import AEMImage from './aem/AEMImage';
import AEMHtml from './aem/Html'
import AEMContentTile from './aem/contentTile'



/***
 * Displays a grid of current adventures
 */
function Home(){

    const[adventureActivity, setAdventureActivity] = useState('');

    return(
        <div className="Home">
             <AEMResponsiveGrid
                  pagePath='/content/wknd-app/us/en/home'
                  itemPath='root/responsivegrid'/>
              <AEMTitle
                   pagePath='/content/wknd-app/us/en/home'
                   itemPath='root/title'/>
              <AEMHtml
                pagePath='/content/wknd-app/us/en/home'
                itemPath='root/htmlContainer'/>
              <AEMContentTile
                 pagePath='/content/wknd-app/us/en/home'
                 itemPath='root/contenttile'/>



             <div className="adventure-nav">
               <button onClick={()=> setAdventureActivity('')}>All</button>
               <button onClick={()=> setAdventureActivity('Camping')}>Camping</button>
               <button onClick={()=> setAdventureActivity('Surfing')}>Surfing</button>
             </div>

           <Adventures adventureActivity={adventureActivity}/>
  </div>
    );
}

export default Home;