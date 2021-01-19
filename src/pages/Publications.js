import React from 'react'

import pubsData from '../data/pubs_data.yaml'

class Publications extends React.Component {

  render() {
    return(
      <>
        {pubsData.seasons.map((season, index) =>
          <>
            <h2 key={season.id}>{season.title}</h2>
            {season.pubs.map((pub, index) =>
              <p key={"pub_" + index}>
                {pub.title + " by " + pub.author}
              </p>
            )}
          </>
        )}
      </>
    )
  }
}

export default Publications
