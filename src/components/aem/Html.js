import React from 'react';
import { withMappable, MapTo } from '@adobe/aem-react-editable-components';

const RESOURCE_TYPE = 'wknd-app/components/htmlContainer';

export const HtmlEditConfig = {
    // Empty component placeholder label
    emptyLabel:'Edit HTML',
    isEmpty:function(props) {
       return !props || !props.html || props.html.trim().length < 1;
    },
    // resourcetype of the AEM counterpart component
    resourceType: RESOURCE_TYPE
};

const Html = ({ html }) => {

   return (

   <div class="AEM-html" dangerouslySetInnerHTML={{ __html: html }}></div>
   );
};


export default Html;

MapTo(RESOURCE_TYPE)(Html,HtmlEditConfig);
export const AEMHtml = withMappable(Html, HtmlEditConfig);
