const Graph = require('../../data-structures/graph/graph');
const bfs = require('./breadth-first-search');

describe('Breadth-First Search', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should perform BFS traversal on a connected graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'F');

    const path = bfs(graph, 'A');

    expect(path).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });

  it('should handle disconnected nodes', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('C', 'D');

    const path = bfs(graph, 'A');
    
    expect(path).toEqual(['A', 'B']);
  });

  it('should handle BFS on a graph with loops', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');

    const path = bfs(graph, 'A');

    expect(path).toEqual(['A', 'B', 'C']);
  });
});
