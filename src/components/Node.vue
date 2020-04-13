<template>
    <div
    class="node"
    :ref="getId"
    :id="getId"
    :class="fullClassName"
    @mousedown="onMouseDown(row, col)"
    @mouseenter="onMouseEnter(row, col)"
    @mouseup="onMouseUp()"
    >
    </div>
</template>

<script>
export default {
    name: 'node',
    props: {
        row: Number,
        col: Number,
        isFinish: Boolean,
        isStart: Boolean,
        isWall: Boolean,
    },
    computed: {
        getId() {
            return 'node-'+this.row+'-'+this.col;
        },
        fullClassName() {
            let extra = this.isFinish
                    ? 'node-finish'
                    : this.isStart
                    ? 'node-start'
                    : this.isWall
                    ? 'node-wall'
                    : '';
            return extra;
        }
    
    },
    methods: {
      onMouseDown(row, col) {
        this.$emit('down:mouse', row, col)
      },
      onMouseEnter(row, col) {
        this.$emit('enter:mouse', row, col)
      },
      onMouseUp() {
        this.$emit('up:mouse')
      }
    }
}
</script>

<style scoped>
.node {
  width: 25px;
  height: 25px;
  outline: 1px solid rgb(175, 216, 248);
  display: inline-block;
}

.node-finish {
  background: linear-gradient(red, orange);
}

.node-start {
  width: 25px;
  height: 25px;
  outline: 1px solid rgb(175, 216, 248);
  display: inline-block;
  background: linear-gradient(green , yellow);
}

.node-visited {
  animation-name: visitedAnimation;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

@keyframes visitedAnimation {
  0% {
    transform: scale(0.3);
    background: linear-gradient(lightblue, purple);
    border-radius: 100%;
  }

  50% {
    background: linear-gradient(green, blue);
  }

  75% {
    transform: scale(1.2);
    background: linear-gradient(yellow, red);
  }

  100% {
    transform: scale(1);
    background: linear-gradient(lightgreen, lightyellow);
  }
}

.node-wall {
  animation-name: wallAnimation;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

.node-shortest-path {
  animation-name: shortestPath;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;
}
@keyframes wallAnimation {
  0% {
    transform: scale(.3);
    background:linear-gradient(#82e664, #f0d911);
  }

  50% {
    transform: scale(1.2);
    background: linear-gradient(#1e10e6, #0ed1f3);
  }

  100% {
    transform: scale(1.0);
    background: linear-gradient(black 70%, white);
  }
}
@keyframes shortestPath {
  0% {
    transform: scale(0.6);
    background-color: rgb(255, 254, 106);
  }

  50% {
    transform: scale(1.2);
    background-color: rgb(255, 254, 106);
  }

  100% {
    transform: scale(1);
    background: rgb(255, 254, 106);
  }
}
</style>