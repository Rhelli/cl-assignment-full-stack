require 'json'

sample_information = JSON.parse(File.read('sample_data.json'))

# Generate Folders from JSON
sample_information['folders'].each do |folder|
  Folder.create!(
    title: folder['title'],
    description: folder['description'],
    started: folder['started']
  )
end

# Generate Topics From JSON
sample_information['topics'].each do |topic|
  Topic.create!(
    title: topic['title']
  )
end

# Generate Projects, ProjectFolders, ProjectTopics from JSON
sample_information['projects'].each do |project|
  Project.create!(
    title: project['title'],
    description: project['description'],
    started: project['started'],
    folders_id: project['folder'],
    cost: project['cost']
  )
  if project['folder']
    ProjectFolder.create!(
      project_id: project['id'],
      folder_id: project['folder']
    )
  end
  unless project['topics'].empty?
    if project['topics'].length > 1
      project['topics'].each do |topic|
        ProjectTopic.create!(project_id: project['id'], topic_id: topic)
      end
    elsif project['topics'].length == 1
      ProjectTopic.create!(project_id: project['id'], topic_id: project['topics'].first)
    end
  end
end
