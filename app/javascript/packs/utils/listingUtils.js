export const projectCounter = folderData => {
  let count = 0;
  folderData.map(folder => {
    count += folder.projects.length;
  });
  return count;
};

export const topicExtractor = projectData => {
  let a = '';
  return a;
}