import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from 'dateformat';
import styles from './ProjectComponent.module.scss';

const ProjectListComponent = ({ folderData, projectData }) => (
  <div className={styles.projectList}>
    {
      projectData.map(project => (
        <div
          key={uuidv4()}
          className={styles.projectBlock}
        >
          <div className={styles.projectBlockTitleDate}>
            <div className={styles.projectTitle}>
              <p>{project.title}</p>
            </div>
            <div className={styles.projectStarted}>
              <p>{dateFormat(project.started, 'dS, mmmm, yyyy')}</p>
            </div>
          </div>
          <div className={styles.projectBlockDesc}>
            <p>{project.description}</p>
          </div>
          <div>
          </div>
        </div>
      ))
    }
  </div>
);

ProjectListComponent.propTypes = {
  folderData: PropTypes.arrayOf(PropTypes.object),
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      folders_id: PropTypes.number,
      started: PropTypes.number,
      cost: PropTypes.number
    })
  )
};

export default ProjectListComponent;
