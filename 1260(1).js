/* 1260번 DFS와 BFS
 * URL: https://www.acmicpc.net/problem/1260
 * Comment: 그래프 필수예제2. 관념적인 DFS를 어떻게 구현할 것인지가 관건.
 * 재귀방식
 */

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, M, V] = input[0].split(" ").map(Number);

const adj = Array.from(Array(N + 1), () => []);
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  adj[u].push(v);
  adj[v].push(u);
}
adj.forEach((edges) => edges.sort((a, b) => a - b));

const dfsPath = [];
const dfsVis = Array(N + 1).fill(false);
dfsVis[V] = true;
dfs(V);

console.log(dfsPath.join(" "));
console.log(bfs().join(" "));

function dfs(curr) {
  dfsPath.push(curr);

  for (const next of adj[curr]) {
    if (dfsVis[next]) continue;
    dfsVis[next] = true;
    dfs(next);
  }
}

function bfs() {
  const path = [V];
  const vis = Array(N + 1).fill(false);
  const q = [V];
  let head = 0;
  vis[V] = true;

  while (head < q.length) {
    const curr = q[head++];

    for (const next of adj[curr]) {
      if (vis[next]) continue;
      vis[next] = true;
      path.push(next);
      q.push(next);
    }
  }

  return path;
}
