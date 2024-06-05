return Object.entries({{data}}).map(([taskId, taskData]) => {
  taskData.id = taskId;
  return taskData;
});