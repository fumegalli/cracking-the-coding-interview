const Queue = require('../../data-structures/queue/queue');

function _visit(queue, path, vertex) {
  const isVisited = path.includes(vertex);
  if (isVisited) return;
  path.push(vertex);
  queue.enqueue(vertex);
}

function bfs(graph, startingVertex) {
  const queue = new Queue();
  const path = [];
  _visit(queue, path, startingVertex);
  while (!queue.isEmpty()) {
    const vertex = queue.dequeue();
    const neighbors = graph.getNeighbors(vertex);
    neighbors.forEach(neighbor => _visit(queue, path, neighbor));
  }
  return path;
}

module.exports = bfs;
