export const fetchProjectIndexApiRequest = () => {
  fetch('/api/v1/projects/index')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('A Response Error With Projects Has Occurred');
  })
}

export const fetchFoldersIndexApiRequest = () => {
  return fetch('/api/v1/folders/index')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('A Response Error With Folders Has Occurred');
    })
}

export const fetchTopicsIndexApiRequest = () => {
  fetch('/api/v1/topics/index')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('A Response Error With Topics Has Occurred')
  })
}
