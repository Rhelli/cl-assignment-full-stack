import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from 'dateformat';
import styles from './FolderListComponent.module.scss';

const FolderListComponent = ({ folderData }) => (
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
);

FolderListComponent.propTypes = {
  folderData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      started: PropTypes.date,
      projects: PropTypes.arrayOf(PropTypes.object),
    })
  )
}

export default FolderListComponent;
