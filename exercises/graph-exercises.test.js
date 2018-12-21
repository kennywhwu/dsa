const { Graph, Node, shortestPath, canFinish } = require('./graph-exercises');

let graph = new Graph();
let S = new Node('S');
let P = new Node('P');
let U = new Node('U');
let X = new Node('X');
let Q = new Node('Q');
let Y = new Node('Y');
let V = new Node('V');
let R = new Node('R');
let W = new Node('W');
let T = new Node('T');

graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);

describe('addVertex', function() {
  it('addVertex_should_add_a_key_in_the_adjacency_list_with_a_value_as_an_empty_array', function() {
    let graph = new Graph();
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    graph.addVertices([a, b, c]);
    expect(graph.nodes.has(a)).toEqual(true);
    expect(graph.nodes.has(b)).toEqual(true);
    expect(graph.nodes.has(c)).toEqual(true);
  });
});

describe('addEdge', function() {
  it('addEdge_should_add_the_appropriate_edges_to_the_adjacency_list', function() {
    let graph = new Graph();
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    let d = new Node('D');
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);
    expect(a.adjacent).toContain(b, c);
    expect(b.adjacent).toContain(a, d);
    expect(c.adjacent).toContain(a, d);
    expect(d.adjacent).toContain(b, c);
  });
});

describe('removeEdge', function() {
  it('removeEdge_should_remove_the_vertices_from_the_adjacency_list', function() {
    let graph = new Graph();
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    let d = new Node('D');
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);

    graph.removeEdge(b, a);
    graph.removeEdge(c, d);

    expect(a.adjacent).not.toContain(b);
    expect(c.adjacent).not.toContain(d);
  });
});

describe('removeVertex', function() {
  it('removeVertex_should_remove_the_vertex_as_well_as_any_edges', function() {
    let graph = new Graph();
    let a = new Node('A');
    let b = new Node('B');
    let c = new Node('C');
    let d = new Node('D');
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);

    graph.removeVertex(c);
    graph.removeVertex(d);

    expect(graph.nodes.has(a)).toBeTruthy();
    expect(graph.nodes.has(b)).toBeTruthy();
    expect(graph.nodes.has(c)).toBeFalsy();
    expect(graph.nodes.has(d)).toBeFalsy();
  });
});

describe('DFS', function() {
  it('should_return_an_array_of_the_nodes_searched_using_DFS', function() {
    var result = JSON.stringify(graph.depthFirstSearch(S));
    var validResult =
      result ===
        JSON.stringify(['S', 'U', 'V', 'W', 'T', 'R', 'Q', 'Y', 'X', 'P']) ||
      result ===
        JSON.stringify(['S', 'P', 'X', 'U', 'V', 'W', 'Y', 'R', 'Q', 'T']);

    expect(validResult).toBe(true);
  });
});

describe('BFS', function() {
  it('should_return_an_array_of_the_nodes_searched_using_BFS', function() {
    expect(graph.breadthFirstSearch(S)).toEqual([
      'S',
      'P',
      'U',
      'X',
      'Q',
      'V',
      'Y',
      'R',
      'W',
      'T',
    ]);
  });
});

describe('shortestPath ', function() {
  it('should_return_array_of_nodes_forming_shortest_path_from_start_to_target_nodes', function() {
    expect(shortestPath(graph, S, Q)).toEqual(['S', 'P', 'Q']);
    var result1 = JSON.stringify(shortestPath(graph, S, T));
    var validResult1 =
      result1 === JSON.stringify(['S', 'P', 'Q', 'R', 'T']) ||
      result1 === JSON.stringify(['S', 'U', 'V', 'W', 'T']);
    expect(validResult1).toEqual(true);
    var result2 = JSON.stringify(shortestPath(graph, Q, W));
    var validResult2 =
      result2 === JSON.stringify(['Q', 'X', 'V', 'W']) ||
      result2 === JSON.stringify(['Q', 'R', 'Y', 'W']) ||
      result2 === JSON.stringify(['Q', 'X', 'Y', 'W']) ||
      result2 === JSON.stringify(['Q', 'R', 'T', 'W']);
    expect(validResult2).toEqual(true);
  });
});

describe('canFinish', function() {
  it('should_return_an_array_of_the_nodes_searched_using_BFS', function() {
    // expect(canFinish(2, [['A', 'B'], ['A', 'C']])).toEqual(true);
    // expect(canFinish(2, [['A', 'B'], ['B', 'A']])).toEqual(false);
    expect(
      canFinish(5, [
        ['A', 'B'],
        ['A', 'C'],
        ['C', 'D'],
        ['D', 'B'],
        ['E', 'A'],
        ['C', 'E'],
      ])
    ).toEqual(false);
    // expect(
    //   canFinish(5, [['A', 'B'], ['A', 'C'], ['C', 'D'], ['D', 'B'], ['C', 'E']])
    // ).toEqual(true);
    // expect(canFinish(2, [[0, 1], [1, 0]])).toEqual(false);
  });
});

// // describe('hasCycle', function () {
// //   it('should determine if there is a cycle', function () {
// //     let g = new Graph()
// //     g.addVertex(0)
// //     g.addVertex(1)
// //     g.addVertex(2)
// //     g.addVertex(3)
// //     expect(g.hasCycle()).toBe(false)
// //     g.addEdge(0, 1)
// //     expect(g.hasCycle()).toBe(true)
// //     g.addEdge(0, 2)
// //     expect(g.hasCycle()).toBe(true)
// //     g.addEdge(0, 3)
// //     expect(g.hasCycle()).toBe(true)
// //     g.addEdge(2, 0)
// //     expect(g.hasCycle()).toBe(true)
// //     g.addEdge(2, 1)
// //     expect(g.hasCycle()).toBe(true)
// //     g.addEdge(1, 3)
// //     expect(g.hasCycle()).toBe(true)
// //   });
// //   it('should determine if there is a cycle', function () {
// //     let g = new Graph()
// //     g.addVertex('A')
// //     g.addVertex('B')
// //     g.addVertex('C')
// //     g.addVertex('D')
// //     g.addVertex('E')
// //     g.addEdge('A', 'B')
// //     g.addEdge('D', 'E')
// //     g.addEdge('C', 'E')
// //     g.addEdge('A', 'D')
// //     g.addEdge('A', 'C')
// //     g.addEdge('E', 'B')
// //     g.addEdge('D', 'B')
// //     expect(g.hasCycle()).toBe(true)
// //   });
// });
