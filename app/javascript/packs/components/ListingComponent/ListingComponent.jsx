import React, { useState, useLayoutEffect, memo } from 'react';
import FolderListComponent from '../FolderListComponent/FolderListComponent';
import ProjectListComponent from '../ProjectComponent/ProjectComponent';
import { fetchFoldersIndexApiRequest, fetchProjectIndexApiRequest } from '../../api/api';
import { projectCounter } from '../../utils/listingUtils';
import styles from './ListingComponent.module.scss';

const ListingComponent = () => {
  const [folderData, setFolderData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [viewOption, setViewOption] = useState('folders');

  const resolveFolderDataFetch = async () => {
    const apiResponse = await fetchFoldersIndexApiRequest();
    setFolderData(apiResponse);
  }

  const resolveProjectDataFetch = async () => {
    const apiResponse = await fetchProjectIndexApiRequest();
    setProjectData(apiResponse);
  }

  useLayoutEffect(() => {
    if (viewOption === 'folders') {
      resolveFolderDataFetch();
    } else {
      resolveFolderDataFetch();
      resolveProjectDataFetch();
    }
  }, [viewOption]);

  return folderData && viewOption === 'folders' ? (
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
      <FolderListComponent folderData={folderData} />
    </div>
  ) : projectData && viewOption === 'projects' ? (
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
      <ProjectListComponent
        projectData={projectData}
        folderData={folderData}
      />
    </div>
  ) : (
    "Error"
  )
}

export default memo(ListingComponent);
