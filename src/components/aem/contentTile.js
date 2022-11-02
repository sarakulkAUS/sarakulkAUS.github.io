import React from 'react';
import {withMappable , MapTo } from '@adobe/aem-react-editable-components';

const RESOURCE_TYPE = "foxtelremotespademo/components/contenttile";

export const ContentTileConfig = {
    emptyLabel : 'Edit Content Tile',
    isEmpty:function(props){
     return !props;
    },

    resourceType : RESOURCE_TYPE
};

const contentTile = ({fileReference, titleText, rteText, buttonLabel, link}) => {

    return (<div className="aemContentTile">
                <h3>{titleText}</h3>
                 <div class="img">
                      <img src={fileReference} width="100%" height="300px" />
                 </div>

                <hr/>
                <div class="desc">
                    <div dangerouslySetInnerHTML={{ __html: rteText }}></div>
                </div>
                <div class="btn-label">
                    <button link={link}>{buttonLabel}</button>
                </div>
                <hr/>
    </div>);
};

export default contentTile;

MapTo(RESOURCE_TYPE)(contentTile,ContentTileConfig);
export const AEMContentTile = withMappable(contentTile,ContentTileConfig);