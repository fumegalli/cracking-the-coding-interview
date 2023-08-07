function _visit(graph, visited, path, vertex) {
  if (visited.includes(vertex)) return; 
  visited.push(vertex);
  path.push(vertex);
  const neighbors = graph.getNeighbors(vertex);
  for (const neighbor of neighbors) {
    _visit(graph, visited, path, neighbor);
  }
}

function dfs(graph, startingVertex) {
  const visited = [];
  const path = [];
  _visit(graph, visited, path, startingVertex);
  return path;
}

module.exports = dfs;
