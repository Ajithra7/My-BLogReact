import React from "react"
const Navbar = () => {
    return (
      <div>
          <nav class="navbar" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          
          <li class="nav-item">
            <a class="nav-link" href="/add">Add Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">View Blogs</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </div>
    )
  }
  
  export default Navbar