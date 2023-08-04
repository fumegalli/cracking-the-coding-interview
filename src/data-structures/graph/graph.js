class Graph {
  vertices = new Map();

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this._checkIfVerticesExists(vertex1, vertex2);
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  hasVertex(vertex) {
    return this.vertices.has(vertex);
  }

  getNeighbors(vertex) {
    this._checkIfVertexExists(vertex);
    return this.vertices.get(vertex);
  }

  getVertices() {
    return Array.from(this.vertices.keys());
  }

  getEdges() {
    const vertices = this.getVertices();
    const edges = [];
    vertices.forEach((vertex) => {
      const neighbors = this.getNeighbors(vertex);
      neighbors.forEach((neighbor) => {
        const isNeighborAlreadyAKey = edges.some(([key]) => key === neighbor);
        if (isNeighborAlreadyAKey) return;
        edges.push([vertex, neighbor]);
      });
    });
   return edges;
  }

  removeEdge(vertex1, vertex2) {
    this._checkIfVerticesExists(vertex1, vertex2);
    const index2 = this.vertices.get(vertex1).findIndex((neighbor) => neighbor === vertex2);
    const index1 = this.vertices.get(vertex2).findIndex((neighbor) => neighbor === vertex1);
    const edgesExists = index2 >= 0 && index1 >= 0;
    if (!edgesExists) throw new Error('The edge does not exist between the given vertices.');
    this.vertices.get(vertex1).splice(index2, 1);
    this.vertices.get(vertex2).splice(index1, 1);
  }

  removeVertex(vertex) {
    this._checkIfVertexExists(vertex);
    this.vertices.delete(vertex);
    for (const [_, neighbors] of this.vertices.entries()) {
      const index = neighbors.indexOf(vertex);
      const hasVertexToDeleteAsNeighbor = index !== -1;
      if (hasVertexToDeleteAsNeighbor) {
        neighbors.splice(index, 1);
      }
    }
  }

  _checkIfVerticesExists(vertex1, vertex2) {
    const bothVerticesExists = this.hasVertex(vertex1) && this.hasVertex(vertex2);
    if (!bothVerticesExists) {
      throw new Error('Both vertices must exist in the graph to create an edge.');
    }
  }

  _checkIfVertexExists(vertex) {
    if (!this.hasVertex(vertex)) throw new Error('The vertex does not exist in the graph.')
  }
}

module.exports = Graph;
