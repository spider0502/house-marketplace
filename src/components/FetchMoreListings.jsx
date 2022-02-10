import React from 'react'

function FetchMoreListings({ lastFetchedListing, onFetchMoreListings }) {
    return <>
        {
            lastFetchedListing ? (
                <>
                    <p className="loadMore" onClick={onFetchMoreListings} >
                        Load More
                    </p>
                </>
            ) : (<p>No more listings.</p>)
        }
    </>
}


export default FetchMoreListings
