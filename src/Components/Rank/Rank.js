import React from 'react';

 const Rank = ({name, entries}) => {
    return (
        <div className="tc">
            <div className="white f3 mb2">
                {`${name}, your current entry count is...`}
            </div>
            <div className="white f2 nt3 mb2">
                {entries}
            </div>
        </div>
    )
}

export default Rank;