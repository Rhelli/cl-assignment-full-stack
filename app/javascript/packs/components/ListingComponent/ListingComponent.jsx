import React, { useState, useLayoutEffect, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from 'dateformat';
import { fetchFoldersIndexApiRequest } from '../../api/api';
import projectCounter from '../../utils/listingUtils';
import styles from './ListingComponent.module.scss';

const ListingComponent = () => {
  const [folderData, setFolderData] = useState(null);
  const [viewOption, setViewOption] = useState('folders');

  console.log(viewOption);

  const apiData = async () => {
    const apiResponse = await fetchFoldersIndexApiRequest();
    setFolderData(apiResponse);
  }

  useLayoutEffect(() => {
    apiData();
  }, []);

  console.log(folderData);

  return folderData ? (
    <div className={styles.listingContainer}>
      <div className={styles.viewOptionSelectContainer}>
        <select
          name="viewOption"
          id="viewOption"
          value={viewOption}
          onChange={event => setViewOption(event.target.value)}
          className={styles.viewOptionSelector}
        >

          <option value="folders">Folders ({folderData.length})</option>
          <option value="projects">Projects ({projectCounter(folderData)})</option>
        </select>
      </div>
      <div className={styles.folderList}>
        {
          folderData.map(folder => (
            <div
              key={uuidv4()}
              className={styles.folderBlock}
            >
              <div className={styles.folderBlockTitleDate}>
                <div className={styles.folderTitle}>
                  <p>{folder.title}</p>
                </div>
                <div className={styles.folderStarted}>
                  <p>{dateFormat(folder.started, "dS, mmmm, yyyy")}</p>
                </div>
              </div>
              <div className={styles.folderBlockDesc}>
                <p>{folder.description}</p>
              </div>
              <div className={styles.folderBlockProjects}>
                <p className={styles.projectsTitle}>Projects</p>
                <div className={styles.projectList}>
                  {
                    folder.projects.map(project => (
                      <div key={uuidv4()}>
                        <p>
                        {' '}
                        &gt;
                        {' '}
                        {project.title}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  ) : (
    <h1>Error</h1>
  )
}

export default memo(ListingComponent);
