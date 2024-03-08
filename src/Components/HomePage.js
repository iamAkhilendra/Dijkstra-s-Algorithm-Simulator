import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div id='home-page'>

        <div id='home-top'>
            <h1 id='home-top-heading'>Learn about Dijkstra's algorithm</h1>
            <p id='home-top-para'>Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.</p>
            <Link to="/simulator">
                <button id='home-top-to-simulator'>Go to Simulator</button>
            </Link>
        </div>

        <div id="about-the-app">
            <h2 id="about-the-app-heading">Features Offered in the app:</h2>
            <ul id='about-the-app-points'>
                <li>Allows users with the ability to dynamically select custom start and end points on the grid.</li>
                <li>Allows users to create walls within the grid, influencing the pathfinding algorithm and helps to Visualize the impact of obstacles on the shortest path, offering a deeper understanding of the algorithm's adaptability.</li>
                <li>Provides a real-time, interactive visualization of Dijkstra's algorithm.</li>
            </ul>
        </div>
    </div>
  )
}
