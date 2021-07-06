import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dateFormat from 'dateformat';
import styles from './ProjectComponent.module.scss';

const ProjectListComponent = ({ projectData }) => (
  <div className={styles.projectList}>
    {
      console.log(projectData)
    }
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
          <div className={styles.topicContainer}>
            <p className={styles.topicTitle}>Topics:</p>
            <div className={styles.topicBar}>
              {
                project.topics.length ? (
                  project.topics.map(topic => (
                    <div
                      key={uuidv4()}
                      className={styles.topicItem}
                    >
                      <p>{topic.title}</p>
                    </div>
                  ))
                ) : (
                  <div className={styles.noTopic}>
                    <p>None Assigned</p>
                  </div>
                )
              }
            </div>
          </div>
          <div className={styles.folderContainer}>
            <p className={styles.folderTitle}>Folders:</p>
            <div className={styles.folderBar}>
              {
                project.folders.length ? (
                  project.folders.map(folder => (
                    <div
                      key={uuidv4()}
                      className={styles.folderItem}
                    >
                      <p>{folder.title}</p>
                    </div>
                  ))
                ) : (
                  <div className={styles.noFolder}>
                    <p>None Assigned</p>
                  </div>
                )
              }
            </div>
          </div>
          <div>
          </div>
        </div>
      ))
    }
  </div>
);

ProjectListComponent.propTypes = {
  folderData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      folders_id: PropTypes.number,
      started: PropTypes.date,
      cost: PropTypes.number
    })
  )
};

export default ProjectListComponent;
