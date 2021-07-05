import React, { useState, useLayoutEffect, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchFoldersIndexApiRequest } from '../../api/api';

const ListingComponent = () => {
  const [folderData, setFolderData] = useState(null);

  const apiData = async () => {
    const apiResponse = await fetchFoldersIndexApiRequest();
    setFolderData(apiResponse);
  }

  useLayoutEffect(() => {
    apiData();
  }, []);

  console.log(folderData);

  return folderData ? (
    <div>
      {
        folderData.map(folder => (
          <div key={uuidv4()}>
            <div>
              <p>{folder.title}</p>
            </div>
            <div>
              <p>{folder.started}</p>
            </div>
            <div>
              <p>{folder.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  ) : (
    <h1>Error</h1>
  )
}

export default memo(ListingComponent);
