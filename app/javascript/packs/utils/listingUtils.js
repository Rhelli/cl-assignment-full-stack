const projectCounter = folderData => {
  let count = 0;
  folderData.map(folder => {
    count += folder.projects.length;
  });
  return count;
};

export default projectCounter;