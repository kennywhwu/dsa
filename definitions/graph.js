function addEdge(vertex1, vertex2) {
  if (
    this.adjacenyList.hasOwnProperty(vertex1) &&
    this.adjacenyList.hasOwnProperty(vertex2)
  ) {
    this.adjacenyList[vertex1].push(vertex2);
    this.adjacenyList[vertex2].push(vertex1);
  }
}

function removeEdge(vertex1, vertex2) {
  this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
    e => e === vertex2
  );
}
