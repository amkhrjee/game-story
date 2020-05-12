import React from 'react';

const reply = () => {
    
    return(
        <div className="reply-box">
            <div className="reply">
                <p>userEmail</p>
                <p>Sample Comments</p>
            </div>
            <div className="Upvote">
                <btn className="upvote-btn">
                    <img src='' alt='Upvote'/>
                </btn>
                <span>56</span>
            </div>
            <div className="Reply">
                <img src='' alt='Upvote'/>
                <btn className="reply-btn">
                    Reply
                </btn>
            </div>
        </div>
    )
}

export default reply;