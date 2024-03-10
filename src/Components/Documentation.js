import React from 'react';
import './Documentation.css';

export default function Documentation() {
    return (
        <div id='documentation'>
            <div class="doc-sections" id="doc-intro">
                <h1>How does Dijkstra’s algorithm work?</h1>
                <p>Dijkstra’s algorithm starts at the chosen node (also known as the source node). The algorithm keeps track of the currently known shortest path from each node to the source node. It updates the path values if it finds a shorter path. When the algorithm finds the shortest path between the source node and another node, that node is marked as “visited” and added to the path. This process continues until all of the nodes have been added to the path. The result of the algorithm is a path that connects the source node to all other nodes in the graph following the shortest path to each node.</p>
            </div>

            <div class="doc-sections" id="algorithm-snippet">
                <h1>JavaScript code of Dijkstra’s algorithm:</h1>
                <div id="code-snippet"></div>
            </div>

            <div class="doc-sections" id="limitations">
                <h1>What are the limitations of Dijkstra's algorithm?</h1>
                <ul>
                    <li>Dijkstra's algorithm assumes that all edge weights in the graph are non-negative. If the graph contains negative weights, the algorithm may produce incorrect results.</li>
                    <li>The algorithm relies on storing and updating distance values for each vertex, which can result in significant memory and processing overhead for large graphs.</li>
                    <li>The time complexity of Dijkstra's algorithm is O(n &#8226; log(n)), where V is the number of vertices and E is the number of edges. While generally efficient, this complexity may become a limitation for very large graphs.</li>
                </ul>
            </div>

            <div class="doc-sections" id="real-life-use">
                <h1>How is Dijkstra's algorithm applied in real-life scenarios?</h1>
                <p>One prominent application is in the realm of network routing. Telecommunication networks, such as the internet, heavily rely on Dijkstra's algorithm to determine the most efficient path for data transmission. In computer networking protocols like OSPF (Open Shortest Path First) and IS-IS (Intermediate System to Intermediate System), Dijkstra's algorithm plays a pivotal role in optimizing the routing of data packets, ensuring minimal latency and efficient resource utilization.</p>
                <p>Another significant area where Dijkstra's algorithm excels is in logistics and transportation planning. Platforms like Google Maps leverage the algorithm to calculate the shortest distance and the fastest routes between locations. Whether it's for navigating through city streets or providing optimal directions for a road trip, Dijkstra's algorithm contributes to enhancing user experience and minimizing travel time.</p>
            </div>
        </div>
    )
}
