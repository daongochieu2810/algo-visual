<template>
   <div id="grid">
       <md-button @click="mazeGenerator">
        Generate Maze
       </md-button>
       <md-button @click="visualizeDijkstra">
        Visualize Dijkstra's Algorithm
       </md-button>
       <md-button @click="reset">
        Reset
       </md-button>
        <table class="grid" style="margin: 0">
            <tbody>
            <tr v-for="r in grid" :key="r">
                <td v-for="node in r" :key="node.id">
                    <node 
                        :col="node.col" 
                        :row="node.row" 
                        :isFinish="node.isFinish"
                        :isWall="node.isWall"
                        :isStart="node.isStart"
                        @down:mouse="handleMouseDown"
                        @enter:mouse="handleMouseEnter"
                        @up:mouse="handleMouseUp"
                    />
                </td>
            </tr>
            </tbody>
        </table>
   </div>
</template>

<script>
import Node from './Node'
export default {
  name: "grid",
  props: {
    
  },
  components: {
    Node
  },
  mounted() {
      for(let row = 0;row < 20; row++) {
          const currRow = [];
          for(let col = 0;col < 70;col++) {
              currRow.push(this.createNode(row, col));
          }
          this.grid.push(currRow)
      }
  },
 
  data() {
    return {
      grid: [],
      tempGrid: [],
      mouseIsPressed: false,
      id: 0,
      START_NODE_ROW: 10,
      START_NODE_COL: 15,
      FINISH_NODE_ROW: 10,
      FINISH_NODE_COL: 35,
      directions: ['N', 'E', 'S', 'W']
    }
  },
  methods: {
      animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
          for(let i=0;i<= visitedNodesInOrder.length;i++) {
              if(i==visitedNodesInOrder.length) {
                  setTimeout(() => {
                      this.animateShortestPath(nodesInShortestPathOrder);
                  }, 10*i);
                  return;
              }
              setTimeout(() => {
                  const node = visitedNodesInOrder[i];
                  
                  document.querySelector(`#node-${node.row}-${node.col}`).className = 'node node-visited'

              }, 10*i);

          }
      },
      visualizeDijkstra() {
          const startNode = this.grid[this.START_NODE_ROW][this.START_NODE_COL];
          const finishNode = this.grid[this.FINISH_NODE_ROW][this.FINISH_NODE_COL];
          const visitedNodesInOrder = this.dijkstra(this.grid, startNode, finishNode);
          const nodesInShortestPathOrder = this.getNodesInShortestPathOrder(finishNode);
          this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
      },
      createNode(row, col) {
          let curr = this.id++;
          return {
              id: curr,
              col: col,
              row: row,
              isStart: row === this.START_NODE_ROW && col === this.START_NODE_COL,
              isFinish: row === this.FINISH_NODE_ROW && col === this.FINISH_NODE_COL,
              distance: Infinity,
              isVisited: false,
              isWall: false,
              prevNode: null
          }
      },
      animateShortestPath(nodesInShortestPathOrder) {
          for(let i=0;i<nodesInShortestPathOrder.length;i++) {
              setTimeout(() => {
                  const node = nodesInShortestPathOrder[i];
                  
                  document.querySelector(`#node-${node.row}-${node.col}`).className = 'node node-shortest-path'
              }, 50*i);
          }
      },
     
      dijkstra(grid, startNode, finishNode) {
          const visitedNodesInOrder = [];
          startNode.distance = 0;
          const unvisitedNodes = [];
          for(const row of grid) {
              for(const node of row) {
                  unvisitedNodes.push(node)
              }
          }
          while(!!unvisitedNodes.length) {
              unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
              const closestNode = unvisitedNodes.shift();
              if(closestNode.isWall) continue;
              //stop when being trapped
              if(closestNode.distance === Infinity) return visitedNodesInOrder;
              closestNode.isVisited = true;
              visitedNodesInOrder.push(closestNode);
              if(closestNode === finishNode) return visitedNodesInOrder;
              this.updateUnvisitedNeighbors(closestNode, grid); 
          }
      },
      updateUnvisitedNeighbors(node, grid) {
        const unvisitedNeighbors = this.getUnvisitedNeighbors(node, grid);
        for (const neighbor of unvisitedNeighbors) {
            neighbor.distance = node.distance + 1;
            neighbor.prevNode = node;
        }   
     },
      getUnvisitedNeighbors(node, grid) {
        const neighbors = [];
        const row = node.row;
        const col = node.col;
        if (row > 0) neighbors.push(grid[row - 1][col]);
        if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
        if (col > 0) neighbors.push(grid[row][col - 1]);
        if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
        return neighbors.filter(neighbor => !neighbor.isVisited);
      },
      getNodesInShortestPathOrder(finishNode) {
          const nodesInShortestPathOrder = [];
          let curr = finishNode;
          while(curr != null) {
              nodesInShortestPathOrder.unshift(curr);
              curr = curr.prevNode;
          }
          return nodesInShortestPathOrder;
      },
      
      getNewGridWithWallToggled(grid, row, col) {
          const newGrid = this.grid.slice();
          const node = newGrid[row][col];
          const newNode = {
              ...node,
              isWall: !node.isWall,
          };
          newGrid[row][col] = newNode
          return newGrid;
      },
      handleMouseDown(row, col) {
          const newGrid = this.getNewGridWithWallToggled(this.grid, row, col);
          this.grid = newGrid;
          this.mouseIsPressed = true;
      },
      handleMouseEnter(row, col) {
          if(!this.mouseIsPressed) return;
          const newGrid = this.getNewGridWithWallToggled(this.grid, row, col);
          this.grid = newGrid;
      },
      handleMouseUp() {
          this.mouseIsPressed = false;
      },
      reset() {
          this.grid =[]
          for(let row = 0;row < 20; row++) {
            const currRow = [];
            for(let col = 0;col < 70;col++) {
                currRow.push(this.createNode(row, col));
            }
          this.grid.push(currRow)
        }
          this.mouseIsPressed = false
          this.id = 0
      },
      recursiveBacktrackingMaze(seedRow, seedCol) {
          console.log(seedRow+"reached"+seedCol)
         this.tempGrid[seedRow][seedCol].isVisited = true;
         this.tempGrid[seedRow][seedCol].isWall = false;
         this.directions = this.shuffle(this.directions)
         let next_r, next_c, currW_r, currW_c;

         let r = this.tempGrid[seedRow][seedCol].row, c = this.tempGrid[seedRow][seedCol].col;
         console.log(r+"  "+c)
         for(let direction of this.directions) {
             switch(direction) {
               case 'N': {
					currW_r = r - 1;
					currW_c = c;
					next_r = r - 2;
					next_c = c;
				}
					break;
				case 'W': {
					currW_r = r;
					currW_c = c - 1;
					next_r = r;
					next_c = c - 2;
				}
					break;
				case 'E': {
					currW_r = r;
					currW_c = c + 1;
					next_r = r;
					next_c = c + 2;
				}
					break;
				default: {
					currW_r = r + 1;
					currW_c = c;
					next_r = r + 2;
					next_c = c;
				}
					break;
             }
             console.log("reached1")
             console.log(next_r +"  "+next_c)
             if(next_c >= 0 && next_c < 70 && next_r >=0 && next_r < 20 && !this.tempGrid[next_r][next_c].isVisited) {
                console.log("reached2")
                this.tempGrid[currW_r][currW_c].isWall = false;
				this.recursiveBacktrackingMaze(next_r,next_c);
			}
         }
      },
     random(seed) {
        var x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
      },
      shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(this.random(this.id++) * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
        },
       mazeGenerator() {
          this.tempGrid = []
          for(let i=0;i<20;i++) {
              let currRow = []
              for(let j=0;j<70;j++) {
                let currNode = this.createNode(i, j);
                if(!currNode.isStart && !currNode.isFinish) currNode.isWall = true
                currRow.push(currNode)
              }
              this.tempGrid.push(currRow)
          }
          let seedRow = 10, seedCol = 30;
          let allWalls = []
          this.recursiveBacktrackingMaze(seedRow,seedCol)
          for(let i=0;i<20;i++) {
              for(let j=0;j<70;j++) {
                  this.tempGrid[i][j].isVisited = false;
                  this.grid[i][j] = this.tempGrid[i][j]
                  if(this.tempGrid[i][j].isWall) allWalls.push(this.tempGrid[i][j])
              }
          }
          for(let i=0;i<allWalls.length;i++) {
               setTimeout(() => {
                  const node = allWalls[i];   
                  document.querySelector(`#node-${node.row}-${node.col}`).className = 'node node-wall'
              }, 5*i);
          }
          
      },
      
    
  }
}
</script>

<style scoped>
  .grid {
    margin: 100px 0 0;
   }
</style>