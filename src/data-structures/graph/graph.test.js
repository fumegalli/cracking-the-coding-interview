const Graph = require('./graph');

describe('Graph Tests', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('addVertex', () => {
    it('should add a vertex to the graph', () => {
      graph.addVertex('A');
  
      expect(graph.vertices.has('A')).toBe(true);
      expect(graph.vertices.has('B')).toBe(false);
    });

    it('should add multiple vertices to the graph', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
  
      expect(graph.vertices.has('A')).toBe(true);
      expect(graph.vertices.has('B')).toBe(true);
      expect(graph.vertices.has('C')).toBe(true);
      expect(graph.vertices.has('D')).toBe(false);
    });
  });

  describe('addEdge', () => {
    it('should add an edge between two vertices', () => {
      graph.addVertex('A');
      graph.addVertex('B');
  
      graph.addEdge('A', 'B');
  
      expect(graph.vertices.get('A')).toContain('B');
      expect(graph.vertices.get('B')).toContain('A');
    });

    it('should throw an error when adding an edge between non-existing vertices', () => {
      graph.addVertex('A');
  
      expect(() => graph.addEdge('A', 'B'))
        .toThrow('Both vertices must exist in the graph to create an edge.');
    });
  });

  describe('hasVertex', () => {
    it('should check if a vertex exists in the graph', () => {
      graph.addVertex('A');
  
      expect(graph.hasVertex('A')).toBe(true);
      expect(graph.hasVertex('B')).toBe(false);
    });
  
    it('should check if multiple vertices exist in the graph', () => {
      graph.addVertex('A');
      graph.addVertex('B');
  
      expect(graph.hasVertex('A')).toBe(true);
      expect(graph.hasVertex('B')).toBe(true);
      expect(graph.hasVertex('C')).toBe(false);
    });
  })

  describe('getNeighbors', () => {
    it('should get neighbors of a vertex', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
  
      const neighborsA = graph.getNeighbors('A');
  
      expect(neighborsA).toEqual(['B', 'C']);
    });

    it('should get neighbors of a vertex with no edges', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
  
      const neighborsA = graph.getNeighbors('A');
  
      expect(neighborsA).toEqual([]);
    });

    it('should throw an error when getting neighbors of a non-existing vertex', () => {
      expect(() => graph.getNeighbors('A')).toThrow('The vertex does not exist in the graph.');
    });
  })

  describe('getVertices', () => {
    it('should get a list of all vertices in the graph', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
  
      const vertices = graph.getVertices();
  
      expect(vertices).toEqual(['A', 'B', 'C']);
    });

    it('should get a list of all vertices in the graph with no vertices', () => {
      const vertices = graph.getVertices();
  
      expect(vertices).toEqual([]);
    });
  });

  describe('getEdges', () => {
    it('should get a list of all edges in the graph', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
  
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'C');
      graph.addEdge('B', 'D');
  
      const edges = graph.getEdges();
  
      expect(edges).toEqual([
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['B', 'D'],
      ]);
    });

    it('should get a list of all edges in the graph with no edges', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
  
      const edges = graph.getEdges();
  
      expect(edges).toEqual([]);
    });
  });

  describe('removeEdge', () => {
    it('should remove an edge between two vertices', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
  
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'C');
  
      graph.removeEdge('A', 'B');
  
      expect(graph.getNeighbors('A')).not.toContain('B');
      expect(graph.getNeighbors('B')).not.toContain('A');
    });

    it('should throw an error when removing a non-existing edge', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
  
      expect(() => graph.removeEdge('A', 'B')).toThrow('The edge does not exist between the given vertices.');
    });
  });

  describe('removeVertex', () => {
    it('should remove a vertex and its associated edges from the graph', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
  
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'C');
      graph.addEdge('B', 'D');
  
      graph.removeVertex('A');
  
      expect(graph.hasVertex('A')).toBe(false);
      expect(graph.getNeighbors('B')).not.toContain('A');
      expect(graph.getNeighbors('C')).not.toContain('A');
    });

    it('should throw an error when removing a non-existing vertex', () => {
      expect(() => graph.removeVertex('A')).toThrow('The vertex does not exist in the graph.');
    });
  });
});
