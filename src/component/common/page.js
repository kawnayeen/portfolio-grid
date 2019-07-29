import React from 'react';
import Legend from "./legend";
import ContentArea from "./content";

const Page = ({id, pageInfo, children}) => {
    return (
        <div id={id} className="collapse show">
            <Legend
                title={pageInfo.navTitle}
                description={pageInfo.navDescription}
                bgStyle={pageInfo.navBg}/>
            <ContentArea title={pageInfo.pageTitle}
                         description={pageInfo.pageDescription}>
                {children}
            </ContentArea>
        </div>
    );
};

export default Page;