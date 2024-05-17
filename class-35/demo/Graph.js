'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge  {
  constructor(node, weight = 1) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // key -> nodes, values -> array of neihboring edges.
    this.adjacencyList = new Map(); // Hash Map -> key value pairs.
  }

  addNode(value) {
    let newNode = new Node(value);
    this.adjacencyList.set(newNode, []);
    return newNode;
  }

  addEdge(startNode, endNode) {
    if (!this.adjacencyList.has(startNode) && !this.adjacencyList.has(endNode)) {
      throw new Error('Nodes not found in the list');
    }

    const neighbors = this.adjacencyList.get(startNode);
    neighbors.push(new Edge(endNode));
  }

  getVertices() {
    // return all nodes in the adjacenct list
  }

  getNeighbors(node) {
    console.log('her is the node', node);
    if (!this.adjacencyList.has(node)) {
      throw new Error('Invalid node');
    }

    return [...this.adjacencyList.get(node)];
  }

  size() {
    // return the number of node in the adjacency list.
  }

  depthFirst(node) {
    let stack = [node];
    let visited = new Set();
    visited.add(node);

    while(stack.length) {
      let current = stack.pop();
      let neighbors = this.getNeighbors(current);
      for (let i = 0; i < neighbors.length; i++) {
        let edge = neighbors[i];
        let neighborNode = edge.node;

        if (!visited.has(neighborNode)) {
          stack.push(neighborNode);
          visited.add(neighborNode);
        }
      }
    }

    return visited;
  }

  breadthFirst(node) {
    console.log('INPUT NODE', node);
    let queue = [node];
    let visited = new Set();
    visited.add(node);

    while (queue.length) {
      let current = queue.shift();
      let neighbors = this.getNeighbors(current);
      for (let i = 0; i < neighbors.length; i++) {
        let edge = neighbors[i];
        let neighborNode = edge.node;
        console.log('THIS IS THE NEIGHBOR', neighborNode);

        if (!visited.has(neighborNode)) {
          queue.push(neighborNode);
          visited.add(neighborNode);
        } else {
          continue;
        }
      }
    }

    return visited;
  }
}

let chirpy = new Graph();

let Jacob = chirpy.addNode('Jacob');
let Ahmed = chirpy.addNode('Ahmed');
let Brock = chirpy.addNode('Brock');
let Isai = chirpy.addNode('Isai');
let Mak = chirpy.addNode('Mak');


chirpy.addEdge(Jacob, Ahmed);
chirpy.addEdge(Jacob, Brock);
chirpy.addEdge(Jacob, Isai);
chirpy.addEdge(Brock, Ahmed);
chirpy.addEdge(Ahmed, Jacob);
chirpy.addEdge(Brock, Mak);
chirpy.addEdge(Mak, Brock);

console.log(chirpy);
console.log(chirpy.adjacencyList.get(Jacob));
console.log(chirpy.breadthFirst(Jacob));