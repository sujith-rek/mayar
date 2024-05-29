const game1 = {
  name: 'The Last war',
  res: `https://cdn.jsdelivr.net/mojs/latest/mo.min.js`,
  html: `    
    <div class="init">
    <div class="center1">
        <h1>WE NEED YOU!</h1>
        <p>Click on each square to plant a tree. You must hurry or the factories will colonize us!</p>
        <p class="floating bold">START GAME</p>
    </div>
</div>
<div class="won">
    <div class="center">
        <h1>YOU WON!</h1>
        <p class="floating replay bold">save the World again</p>
    </div>
</div>
<div class="init hidden"><h1 class="center">INCREASED VELOCITY!</h1></div>
<!-- <h2 class="counter">Level: 1</h2> -->
<div class="container">
    <div class="game"></div>
</div>  
<script src='https://cdn.jsdelivr.net/mojs/latest/mo.min.js'></script>
`,
  css: `/* {
    border: 1px solid #888;
}*/

@import url('https://fonts.googleapis.com/css?family=Roboto');

:root {
    --green:  	#9ff1a5;
    --red: #ff9292;
    --dim: 62px;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;
}

h1, h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #333;
    margin: 10px;
}

h1 {
    font-size: 60px;
}

h2 {
    font-size: 37px;
}

p {
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
    font-weight: 100;
    color: #333; 
    margin: 10px;
}

.bold {
  font-weight: 900;
}

.center {
    position: relative;
    top: 20%;
    margin: 0;
}

.center1 {
    position: relative;
    margin: 30px;
}

.container {
    height: 100%;
}

.game {
    margin: auto;
    width: 390px;
    height: 468px;
    border-radius: 9px;
    background-color: #333;
    padding: 5px;

}

.box {
    height: 70px;
    width: 70px;
    float: left;
    margin: 0;
    padding: 0px;
    text-align: center;
    border-radius: 9px;
    border: 4px solid #333;
    background-color: #f1c97c;

    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;

}

.green {
    background-color: var(--green);
    animation-name: getIn;
    animation-duration: .3s;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.tree {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDM1LjYzNyA0MzUuNjM3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzUuNjM3IDQzNS42Mzc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHg9IjIwMS44NzQiIHk9IjM1NC4wMzciIHN0eWxlPSJmaWxsOiNFREFFNzg7IiB3aWR0aD0iMzQuNCIgaGVpZ2h0PSI3NC40Ii8+DQo8cmVjdCB4PSIyMDEuODc0IiB5PSIzNTQuMDM3IiBzdHlsZT0iZmlsbDojRjlDMDk1OyIgd2lkdGg9IjEyLjgiIGhlaWdodD0iNzQuNCIvPg0KPHJlY3QgeD0iMjIxLjg3NCIgeT0iMzU0LjAzNyIgc3R5bGU9ImZpbGw6I0Q2OTM2NTsiIHdpZHRoPSIxMy42IiBoZWlnaHQ9Ijc0LjQiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiMyNEJBNzM7IiBwb2ludHM9IjcwLjY3NCwzNTQuMDM3IDEzMy4wNzQsMjc2LjQzNyA4OC4yNzQsMjc2LjQzNyAxNTguNjc0LDE3OS42MzcgMTEzLjg3NCwxNzkuNjM3IA0KCTE3OS40NzQsOTkuNjM3IDEzOS40NzQsOTkuNjM3IDIxOC42NzQsNy42MzcgMjk3Ljg3NCw5OS42MzcgMjU3Ljg3NCw5OS42MzcgMzIzLjQ3NCwxNzkuNjM3IDI3OC42NzQsMTc5LjYzNyAzNDkuMDc0LDI3Ni40MzcgDQoJMzA0LjI3NCwyNzYuNDM3IDM2Ni42NzQsMzU0LjAzNyAiLz4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMxQ0EzNUY7IiBwb2ludHM9Ijg4LjI3NCwyNzYuNDM3IDg4LjI3NCwyNzYuNDM3IDkzLjA3NCwyNzYuNDM3IDkzLjA3NCwyNzYuNDM3IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMUNBMzVGOyIgcG9pbnRzPSIyNTcuODc0LDk5LjYzNyAyMTcuODc0LDk5LjYzNyAyODMuNDc0LDE3OS42MzcgMzIzLjQ3NCwxNzkuNjM3IDI1Ny44NzQsOTkuNjM3IA0KCQkyOTcuODc0LDk5LjYzNyAyMTguNjc0LDcuNjM3IDE5OC42NzQsMzAuODM3IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMUNBMzVGOyIgcG9pbnRzPSIzMDQuMjc0LDI3Ni40MzcgMjY0LjI3NCwyNzYuNDM3IDMyNi42NzQsMzU0LjAzNyAzNjYuNjc0LDM1NC4wMzcgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMxQ0EzNUY7IiBwb2ludHM9IjIzOC42NzQsMTc5LjYzNyAzMDkuMDc0LDI3Ni40MzcgMzQ5LjA3NCwyNzYuNDM3IDI3OC42NzQsMTc5LjYzNyAJIi8+DQo8L2c+DQo8Zz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMzZDRTgyOyIgcG9pbnRzPSIyMzMuMDc0LDI0LjQzNyAyMTguNjc0LDcuNjM3IDEzOS40NzQsOTkuNjM3IDE2Ny40NzQsOTkuNjM3IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMzZDRTgyOyIgcG9pbnRzPSIxMzMuMDc0LDI3Ni40MzcgNzAuNjc0LDM1NC4wMzcgOTguNjc0LDM1NC4wMzcgMTYxLjA3NCwyNzYuNDM3IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMzZDRTgyOyIgcG9pbnRzPSIxMTYuMjc0LDI3Ni40MzcgMTg2LjY3NCwxNzkuNjM3IDE0MS44NzQsMTc5LjYzNyAyMDcuNDc0LDk5LjYzNyAxNzkuNDc0LDk5LjYzNyANCgkJMTEzLjg3NCwxNzkuNjM3IDE1OC42NzQsMTc5LjYzNyA4OC4yNzQsMjc2LjQzNyAJIi8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojM0EyNzFFOyIgZD0iTTMyMS4wNzQsMjg0LjQzN2gyOGM0LjgsMCw4LTMuMiw4LThjMC0yLjQtMC44LTQtMi40LTUuNmwtNjAtODIuNGgyOC44YzQuOCwwLDgtMy4yLDgtOA0KCWMwLTIuNC0wLjgtNC44LTIuNC02LjRsLTU0LjQtNjYuNGgyMy4yYzQuOCwwLDgtMy4yLDgtOGMwLTIuNC0wLjgtNC44LTMuMi02LjRsLTc3LjYtOTAuNGMtMy4yLTMuMi04LTQtMTEuMi0wLjhsLTAuOCwwLjgNCglsLTc5LjIsOTEuMmMtMy4yLDMuMi0yLjQsOC44LDAuOCwxMS4yYzEuNiwxLjYsMy4yLDEuNiw1LjYsMS42aDIyLjRsLTU0LjQsNjcuMmMtMi40LDMuMi0yLjQsOC44LDAuOCwxMS4yYzEuNiwwLjgsMy4yLDEuNiw0LjgsMS42DQoJaDI4LjhsLTYxLjYsODRjLTIuNCwzLjItMS42LDguOCwxLjYsMTEuMmMxLjYsMC44LDMuMiwxLjYsNC44LDEuNmgyOGwtNTIsNjQuOGMtMi40LDMuMi0yLjQsOC44LDAuOCwxMS4yYzEuNiwwLjgsMy4yLDEuNiw0LjgsMS42DQoJaDEyMy4ydjY2LjRjMCw0LjgsMy4yLDgsOCw4aDM0LjRjNC44LDAsOC0zLjIsOC04di02NS42aDEyMy4yYzQuOCwwLDgtMy4yLDgtOGMwLTEuNi0wLjgtNC0xLjYtNC44TDMyMS4wNzQsMjg0LjQzN3oNCgkgTTIyNy40NzQsNDIwLjQzN2gtMTguNHYtNTguNGgxOC40VjQyMC40Mzd6IE0yMzUuNDc0LDM0Ni4wMzdoLTE0OGw1Mi02NC44YzIuNC0zLjIsMi40LTguOC0wLjgtMTEuMmMtMS42LTAuOC0zLjItMS42LTQuOC0xLjYNCgloLTI4LjhsNjAuOC04NGMyLjQtMy4yLDEuNi04LjgtMS42LTExLjJjLTEuNi0wLjgtMy4yLTEuNi00LjgtMS42aC0yOC44bDU0LjQtNjcuMmMyLjQtMy4yLDIuNC04LjgtMC44LTExLjINCgljLTEuNi0wLjgtMy4yLTEuNi00LjgtMS42aC0yMS42bDYwLjgtNzEuMmw2MS42LDcxLjJoLTIyLjRjLTQuOCwwLTgsMy4yLTgsOGMwLDEuNiwwLjgsNCwxLjYsNC44bDU0LjQsNjcuMmgtMjhjLTQuOCwwLTgsMy4yLTgsOA0KCWMwLDEuNiwwLjgsMy4yLDEuNiw0LjhsNjAuOCw4NGgtMjkuNmMtNC44LDAtOCwzLjItOCw4YzAsMS42LDAuOCw0LDEuNiw0LjhsNTIsNjQuOEgyMzUuNDc0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=');
}

.red {
    background-color: var(--red);
    animation-name: getIn1;
    animation-duration: .3s;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.factory {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFM0UzRTM7IiBkPSJNMzc5LjAwMSwzMzguODc2di04MC4xMmwtMTIzLDgwdi04MGwtMTE2LjUsNzUuNjhsLTkuNTYtMTE4LjU2aC05Ni42MWwtMC4yNi0wLjAybC0xOS44NCwyNDYuMDENCgljMC4wOTcsMC4wMSwwLjEsMC4wMSwwLjEsMC4wMWwtMC4xLTAuMDFsLTMuMjMsNDAuMDFoMTQzaDM0OXYtMjQzTDM3OS4wMDEsMzM4Ljg3NnogTTE0OS42NzEsNDYxLjg3NkwxNDkuNjcxLDQ2MS44NzZsMC4xLTAuMDENCglMMTQ5LjY3MSw0NjEuODc2eiIvPg0KPGc+DQoJPHJlY3QgeD0iMzk5LjAwMSIgeT0iMzc4Ljg3MSIgc3R5bGU9ImZpbGw6IzREQkJFQjsiIHdpZHRoPSI2MyIgaGVpZ2h0PSI0MCIvPg0KCTxyZWN0IHg9IjI5Ni4wMDEiIHk9IjM3OC44NzEiIHN0eWxlPSJmaWxsOiM0REJCRUI7IiB3aWR0aD0iNjMiIGhlaWdodD0iNDAiLz4NCgk8cmVjdCB4PSIxOTYuMDAxIiB5PSIzNzguODcxIiBzdHlsZT0iZmlsbDojNERCQkVCOyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIi8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkQ2MjQ0OyIgZD0iTTE0OS43NzEsNDYxLjg2NmwzLjIzLDQwLjAxaC0xNDNsMy4yMy00MC4wMWMwLjE1MiwwLjAxNSwxMzYuMjg3LDAuMDEsMTM2LjQ0LDAuMDFMMTQ5Ljc3MSw0NjEuODY2DQoJCXoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkQ2MjQ0OyIgcG9pbnRzPSIxMjYuNDcxLDE3Mi44NjYgMTI5Ljk0MSwyMTUuODc2IDMzLjMzMSwyMTUuODc2IDMzLjA3MSwyMTUuODU2IDM2LjUzMSwxNzIuODY2IA0KCQkzNi42NzEsMTcyLjg3NiAxMjYuMzMxLDE3Mi44NzYgCSIvPg0KPC9nPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0UzRTNFMzsiIHBvaW50cz0iMTIzLjAwMSwxMjkuODc2IDEyNi40NzEsMTcyLjg2NiAxMjYuMzMxLDE3Mi44NzYgMzYuNjcxLDE3Mi44NzYgMzYuNTMxLDE3Mi44NjYgDQoJNDAuMDAxLDEyOS44NzYgIi8+DQo8cGF0aCBkPSJNMTk2LjAwMSw0NTEuODc2Yy01LjUyLDAtMTAsNC40OC0xMCwxMHM0LjQ4LDEwLDEwLDEwczEwLTQuNDgsMTAtMTBTMjAxLjUyMSw0NTEuODc2LDE5Ni4wMDEsNDUxLjg3NnoiLz4NCjxwYXRoIGQ9Ik01MDYuNzcsMjUwLjA4NmMtMy4yMjYtMS43NDktNy4xNDctMS41OTItMTAuMjIxLDAuNDA3bC0xMDcuNTQ4LDY5Ljk1di02MS42ODdjMC0zLjY2Ny0yLjAwOC03LjA0MS01LjIzMS04Ljc5DQoJYy0zLjIyNS0xLjc0OC03LjE0Ni0xLjU5Mi0xMC4yMjEsMC40MDdsLTEwNy41NDgsNjkuOTV2LTYxLjU2N2MwLTMuNjY2LTIuMDA3LTcuMDM5LTUuMjI5LTguNzg5DQoJYy0zLjIyMi0xLjc0OS03LjE0NC0xLjU5Ni0xMC4yMTgsMC40MDNsLTEwMi40MzYsNjYuNTQ0Yy0wLjU3OC03LjE3Mi0xNS4wMDktMTg2LjEwOC0xNS4xNDktMTg3Ljg0Mw0KCWMtMC40MTktNS4xOTQtNC43NTctOS4xOTUtOS45NjgtOS4xOTVoLTgzYy01LjIxMSwwLTkuNTQ5LDQuMDAxLTkuOTY4LDkuMTk1bC0zMCwzNzJjLTAuMjI1LDIuNzgzLDAuNzI1LDUuNTMzLDIuNjE4LDcuNTg1DQoJczQuNTU4LDMuMjE5LDcuMzUsMy4yMTljNi40NzksMCw0NjEuMTQ4LDAsNDkyLDBjNS41MjIsMCwxMC00LjQ3NywxMC0xMHYtMjQzQzUxMi4wMDEsMjU1LjIwOSw1MDkuOTkzLDI1MS44MzUsNTA2Ljc3LDI1MC4wODZ6DQoJIE0xMTkuMDk4LDIwNS44NzZINDMuOTA1bDEuODU1LTIzaDcxLjQ4NEwxMTkuMDk4LDIwNS44NzZ6IE00Mi4yOTIsMjI1Ljg3Nmg3OC40MTljMC42OTEsOC41NjMsMTcuMjUxLDIxMy45MjIsMTguMjI1LDIyNkgyNC4wNjcNCglMNDIuMjkyLDIyNS44NzZ6IE0xMTMuNzc2LDEzOS44NzZsMS44NTUsMjNINDcuMzcybDEuODU1LTIzSDExMy43NzZ6IE0yMC44NDEsNDkxLjg3NmwxLjYxMy0yMGgxMTguMDk1bDEuNjEzLDIwSDIwLjg0MXoNCgkgTTQ5Mi4wMDEsNDkxLjg3NkgxNjIuMjI3bC0xMi4yODItMTUyLjNsOTYuMDU2LTYyLjM5OXY2MS41NzljMCwzLjY2NywyLjAwOCw3LjA0MSw1LjIzMSw4Ljc5DQoJYzMuMjI2LDEuNzQ5LDcuMTQ3LDEuNTkzLDEwLjIyMS0wLjQwN2wxMDcuNTQ4LTY5Ljk1djYxLjY4N2MwLDMuNjY3LDIuMDA4LDcuMDQxLDUuMjMxLDguNzljMy4yMjMsMS43NDcsNy4xNDYsMS41OTMsMTAuMjIxLTAuNDA3DQoJbDEwNy41NDgtNjkuOTVWNDkxLjg3NnoiLz4NCjxwYXRoIGQ9Ik0xOTYuMDAxLDQyOC44NzZoNjBjNS41MjIsMCwxMC00LjQ3NywxMC0xMHYtNDBjMC01LjUyMy00LjQ3OC0xMC0xMC0xMGgtNjBjLTUuNTIyLDAtMTAsNC40NzctMTAsMTB2NDANCglDMTg2LjAwMSw0MjQuMzk5LDE5MC40NzksNDI4Ljg3NiwxOTYuMDAxLDQyOC44NzZ6IE0yMDYuMDAxLDM4OC44NzZoNDB2MjBoLTQwVjM4OC44NzZ6Ii8+DQo8cGF0aCBkPSJNMjk2LjAwMSw0MjguODc2aDYzYzUuNTIyLDAsMTAtNC40NzcsMTAtMTB2LTQwYzAtNS41MjMtNC40NzgtMTAtMTAtMTBoLTYzYy01LjUyMiwwLTEwLDQuNDc3LTEwLDEwdjQwDQoJQzI4Ni4wMDEsNDI0LjM5OSwyOTAuNDc5LDQyOC44NzYsMjk2LjAwMSw0MjguODc2eiBNMzA2LjAwMSwzODguODc2aDQzdjIwaC00M1YzODguODc2eiIvPg0KPHBhdGggZD0iTTM5OS4wMDEsNDI4Ljg3Nmg2M2M1LjUyMiwwLDEwLTQuNDc3LDEwLTEwdi00MGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwaC02M2MtNS41MjIsMC0xMCw0LjQ3Ny0xMCwxMHY0MA0KCUMzODkuMDAxLDQyNC4zOTksMzkzLjQ3OSw0MjguODc2LDM5OS4wMDEsNDI4Ljg3NnogTTQwOS4wMDEsMzg4Ljg3Nmg0M3YyMGgtNDNWMzg4Ljg3NnoiLz4NCjxwYXRoIGQ9Ik01NC4wMDEsNzkuODc2YzUuNTIyLDAsMTAtNC40NzcsMTAtMTBjMC0xNi41NDIsMTMuNDU4LTMwLDMwLTMwaDEyMmM4LjAzMiwwLDE1Ljg3Mi0zLjI3MSwyMS41MDktOC45NzUNCgljNS41NjgtNS42MzUsOC41ODMtMTMuMDU1LDguNDktMjAuODk0Yy0wLjA2NC01LjQ4Mi00LjUyOC05Ljg4MS05Ljk5Ny05Ljg4MWMtMC4wMzksMC0wLjA4LDAtMC4xMiwwDQoJYy01LjUyMiwwLjA2Ni05Ljk0Niw0LjU5Ni05Ljg4MSwxMC4xMThjMC4wMjksMi40NTItMC45MzcsNC43OTUtMi43MTksNi41OThjLTEuOTA0LDEuOTI4LTQuNTU5LDMuMDMzLTcuMjgyLDMuMDMzaC0xMjINCgljLTI3LjU3LDAtNTAsMjIuNDMtNTAsNTBDNDQuMDAxLDc1LjM5OSw0OC40NzksNzkuODc2LDU0LjAwMSw3OS44NzZ6Ii8+DQo8cGF0aCBkPSJNMjM1Ljk5LDU5Ljc1NmwtMTExLjk4OSwwLjEyYy0xNi41NDIsMC0zMCwxMy40NTgtMzAsMzBjMCw1LjUyMyw0LjQ3OCwxMCwxMCwxMHMxMC00LjQ3NywxMC0xMGMwLTUuNTE0LDQuNDg2LTEwLDEwLjAxMS0xMA0KCWwxMTEuOTg5LTAuMTJjMTYuNTQyLDAsMzAtMTMuMjQzLDMwLTI5LjUydi0wLjIzYzAtNS41MjMtNC40NzgtMTAtMTAtMTBzLTEwLDQuNDc3LTEwLDEwdjAuMjMNCglDMjQ2LjAwMSw1NS40ODUsMjQxLjUxNSw1OS43NTYsMjM1Ljk5LDU5Ljc1NnoiLz4NCjxwYXRoIGQ9Ik00NjIuMDAxLDQ1MS44NzZoLTIyNmMtNS41MjIsMC0xMCw0LjQ3Ny0xMCwxMHM0LjQ3OCwxMCwxMCwxMGgyMjZjNS41MjIsMCwxMC00LjQ3NywxMC0xMFM0NjcuNTI0LDQ1MS44NzYsNDYyLjAwMSw0NTEuODc2DQoJeiIvPg0KPHBhdGggZD0iTTcwLjAwMSwyODguODc2aDIzYzUuNTIyLDAsMTAtNC40NzcsMTAtMTBzLTQuNDc4LTEwLTEwLTEwaC0yM2MtNS41MjIsMC0xMCw0LjQ3Ny0xMCwxMFM2NC40NzksMjg4Ljg3Niw3MC4wMDEsMjg4Ljg3NnoiLz4NCjxwYXRoIGQ9Ik03MC4wMDEsMzI4Ljg3NmgyM2M1LjUyMiwwLDEwLTQuNDc3LDEwLTEwcy00LjQ3OC0xMC0xMC0xMGgtMjNjLTUuNTIyLDAtMTAsNC40NzctMTAsMTBTNjQuNDc5LDMyOC44NzYsNzAuMDAxLDMyOC44NzZ6Ii8+DQo8cGF0aCBkPSJNNzAuMDAxLDM2OC44NzZoMjNjNS41MjIsMCwxMC00LjQ3NywxMC0xMHMtNC40NzgtMTAtMTAtMTBoLTIzYy01LjUyMiwwLTEwLDQuNDc3LTEwLDEwUzY0LjQ3OSwzNjguODc2LDcwLjAwMSwzNjguODc2eiIvPg0KPHBhdGggZD0iTTkzLjAwMSwzODguODc2aC0yM2MtNS41MjIsMC0xMCw0LjQ3Ny0xMCwxMHM0LjQ3OCwxMCwxMCwxMGgyM2M1LjUyMiwwLDEwLTQuNDc3LDEwLTEwUzk4LjUyNCwzODguODc2LDkzLjAwMSwzODguODc2eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=');
}

.won, .init {
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    border: 8px solid #333;
    border-radius: 7px;
}

.won {
    background-color: var(--green);
    top: 100%;
    width: 600px;
    height: 300px;
}

.init {
    background-color: var(--red);
    top: 30%;
    width: 600px;
    height: 300px;
}

.floating {
    position: relative;
    animation-name: floating;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #333;
    margin-top: 30px;
}

.levelUp {
  animation: levelUp 2.5s ease-in-out;
  animation-delay: 2s;
}

.hidden {
  visibility: hidden;
}

@keyframes won {
    from {top: 100%; transform: rotate(180deg);}
    to   {top: 30%; transform: rotate(0deg);}    
}

@keyframes start {
    from   {top: 30%; transform: rotate(0deg);}    
    to {top: 100%; transform: rotate(180deg);}
}

@keyframes floating {
    0% {top: 0px; transform: rotate(0deg);}
    25% {top: 5px; transform: rotate(3deg);}
    50% {top: -5px; transform: rotate(-3deg);}
    100%   {top: 0px; transform: rotate(0deg);}  
}

@keyframes getIn {
    from {background-size: 0%;}
    to   {background-size: 70%;}
}

@keyframes getIn1 {
    from {background-size: 0%;}
    to   {background-size: 70%;}
}

@keyframes levelUp {
    0% {opacity: 0; visibility: visible;}
    50% {opacity: 1;}
    100%   {opacity: 0; visibility: hidden;}  
}

@media (max-width: 500px) {
    h1 {
        font-size: 37px;
    }
  
    .game {
        width: 331px;
        height: 396px;
    }

    .box {
        width: var(--dim);
        height: var(--dim);
        border: 2.1px solid #333;
    }

    .won, .init {
        width: 300px;
        height: 400px;
    }
  
    .init {
        top: 10%;
    }
}`,
  js: `const game = document.querySelector('.game');
var arrFactory = [];
var arrTree = [];
var newFactory;
var interval = 800;
//var counter = 1;

function createGame() {
    for (let i = 0; i < 30; i++) {
        let a = document.querySelector('.game');
        let b = document.createElement('div');
        b.classList.add('box');
        b.setAttribute('data-value', i);
        a.appendChild(b);   
    }
    
}

function replay() {
    var replay = document.querySelector('.replay');
    replay.addEventListener('click', function() {
        box.forEach(function(box) {
            box.classList.remove('green');
            box.classList.remove('tree');

        });
        //counter += 1;
        //document.querySelector('.counter').innerHTML = 'Level: ' + counter;
        document.querySelector('.hidden').classList.add('levelUp')
        let bang = document.querySelector('.won');
        newFactory = setInterval(randomFactory, 600);
        bang.style.animation = 'start .6s ease-in-out';
        bang.style.top = '100%';
    });
}

function addTree(e) {
    let c = e.target;
    
    if(arrTree.indexOf(c.dataset.value) == -1) {
        arrTree.push(c.dataset.value);
        if(arrTree.length == 30) {
            clearInterval(newFactory);
            
            document.querySelector('.hidden').classList.remove('levelUp');
            let bang = document.querySelector('.won');
            bang.style.animation = 'won .6s ease-in-out';
            bang.style.top = '30%';
            replay();
        }
    } 
    

    if(arrFactory.indexOf(c.dataset.value) != -1) {
        arrFactory.splice(arrFactory.indexOf(c.dataset.value) ,1);
    }
    c.classList.remove('red');
    c.classList.remove('factory');
    c.classList.add('green');
    c.classList.add('tree');
}

function randomFactory() {
    let e = Math.random() * 30;
    let g = Math.floor(e);
    
    if(arrFactory.indexOf(box[g].dataset.value) == -1) {
        arrFactory.push(box[g].dataset.value);
        box[g].classList.add('red');
        box[g].classList.remove('green');
        box[g].classList.add('factory');
        if(arrFactory.length == 30) {
            clearInterval(newFactory);
        }
    } 
    
    if(arrTree.indexOf(box[g].dataset.value) != -1) {
        arrTree.splice(arrTree.indexOf(box[g].dataset.value), 1);
    }
}

var yol = document.querySelector('.yolo');

createGame();

var box = document.querySelectorAll('.box');
// console.log(box);
var start = document.querySelector('.floating');
start.addEventListener('click', function() {
    let init = document.querySelector('.init');
    init.style.animation = 'start .5s ease-in';
    init.style.top = '100%';
    newFactory = setInterval(randomFactory, interval);
});

box.forEach(function(box) {
    box.addEventListener('click', addTree, false);
}, false);

function fire(e) {
    let trg = e.target;
    
    const itemDim = this.getBoundingClientRect(),
    itemSize = {
      x: itemDim.right - itemDim.left,
      y: itemDim.bottom - itemDim.top,
    };
    
    let burst = new mojs.Burst({
        left: itemDim.left + (itemSize.x/2),
        top: itemDim.top + (itemSize.y/1.7),
        count: 9,
        radius: {50 : 90},
    });
    burst.play();
};


box.forEach(function(box) {
    box.addEventListener('click', fire);
});`,
};

const game2 = {
  name: 'Fill the Mug',
  res: `https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js`,
  html: `
    <p class="helper tap">Hover over the tap to fill the mug</p>
    <h1>Fill the mug <span id="target">0</span>%</h1>
    <h2 id="percent-filled"></h2>
    <h3 id="result"></h3>
    <button class="tap-button">Fill the mug</button>
    <div id="tap-container">
      <div id="tap"></div>
      <div id="handle"></div>
      <div id="pour"></div>
    </div>
    
    <div id="mug-container">
      <div id="mug">
      <div id="beer"></div>
    </div>  
    
    <p class="helper mug">Click the mug to reset</p>
    `,
  css: `html {
        font-size:16px;
      }
      body {
        font-family: 'Roboto Condensed', sans-serif;
        background: green;
      }
      h1,h2,h3,h4 {
        font-family: 'Germania One', Arial,sans-serif;
      }
      #tap-container {
        position:relative;
        top:-260px;
        left:26px;
      }
      #tap {
        width:120px;
        background: #ddd;
        height:35px;
        margin:140px 0 0 0;
        position:relative;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
      }
      #tap:after {
        content:"";
        display:block;
        position:absolute;
        border-top: 70px solid #ddd;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-radius:0 0 40px 40px;
        height: 0;
        width: 20px;
        top:10px;
        right:10px;
        transform:rotate(-20deg);
        z-index:2;
      }
      .tap-button {
        display:none;
        cursor:pointer;
        color:white;
        background:#333;
        border:none;
        border-radius:5px;
        padding:10px 20px;
        font-size:1rem;
        margin:0 auto;
      }
      #tap:before {
        content:"";
        display:block;
        position:absolute;
        width:70px;
        height:60px;
        background:grey;
        left:-20px;
        top:-15px;
        border-radius: 0px 20px 20px 0px;
      }
      #handle {
        border-top: 100px solid black;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        width:20px;
        position:absolute;
        top:30px;
        left:80px;
        border-radius: 10px 10px 0 0;
        z-index:3;
      }
      #handle:before {
        content:"";
        display:block;
        width:30px;
        height:30px;
        background:lightgrey;
        position:absolute;
        bottom:-20px;
        left:-5px;
        border-radius:20px 20px 10px 10px
      }
      #handle:hover {
        transform:rotate(6deg);
        transform-origin: center bottom;
      }
      #handle:hover:before {
        transform:rotate(0deg);
      }
      #pour {
        position:absolute;
        left:92px;
        top:210px;
        width:16px;
        height:0px;
        z-index:1;
        background:rgba(229,197,57,1);
        transition:0s;
      }
      #pour.pouring {
        height:200px;
        transition:800ms ease;
      }
      
      #mug-container {
        position:absolute;
        top:180px;
      }
      #mug {
        margin:60px 0  0 40px;
        border:20px solid #eee;
        border-bottom-width:30px;
        width:120px;
        height:200px;
        border-top:none;
        border-radius: 0 0 10px 10px;
        position:relative;  
      }
      #mug:before {
        position:absolute;
        content:"";
        display:block;
        bottom:-40px;
        height:30px;
        width:180px;
        left:-30px;
        background:#eee;
      }
      #mug:after {
        position:absolute;
        content:"";
        display:block;
        right:-80px;
        top:30px;
        width:40px;
        height:110px;
        border:25px solid #eee;
        border-left:none;
        border-radius:0 50px 150px 0;
      } 
      #beer {
        width:100%;
        height:0%;
        max-height:100%;
        background:
          linear-gradient(
             rgba(255,255,255,1) 0%,
            rgba(255,255,255,1) 35%,
            rgba(237,237,173,1) 43%,
            rgba(229,197,57,1) 44%,
            rgba(229,197,57,1) 100%    
          );
        background-repeat: repeat;
        background-size:100% 200%;
        position:absolute;
        bottom:0;
        left:0;
      }
      @keyframes beerFill {
        5% {
          height:0%;
        }
        100% {
          height:100%;
        }
      }
      #beer.fill {
         animation-name:beerFill;
        animation-duration:10s;
        animation-fill-mode:forwards;
        background-position:0% 70%;
      }
      h1 {
        font-size:3rem;
        text-align:center;
        line-height:1em;
        margin-bottom:10px;
        margin-top:10px;
      }
      #percent-filled {
        text-align:center;
      }
      #result {
        text-align:center;
      }
      .helper.tap {
        text-align:center;
        margin-bottom:0;
      }
      .helper.mug {
        margin-left:30px;
        width:180px;
        text-align:center;
      }

      @media (max-width: 768px) {
        h1{
          font-size:2rem;
        }

        #mug-container {
          position:relative;
          top:0;
        }

        #tap-container {
          position:relative;
          top:0;
        }

        .tap-button {
          display:block;
        }
        
      }

      `,
  js: `
    var mugHeight;
var beerHeight;
var percentFilled;
var roundedPercent;
var gameg = Math.floor((Math.random() * 100) + 1);

function getHeights(){
    var mug = document.getElementById('mug');
    var beer = document.getElementById('beer');
    var percentFilledElement = document.getElementById('percent-filled');

    mugHeight = mug.offsetHeight;
    beerHeight = beer.offsetHeight;
    percentFilled = (beerHeight / mugHeight) * 100;
    roundedPercent = Math.round(percentFilled);
    percentFilledElement.innerHTML = 'Percent Filled: ' + roundedPercent + '%';
};

var handle = document.getElementById('handle');
var pour = document.getElementById('pour');
var result = document.getElementById('result');
var target = document.getElementById('target');

function startFilling() {
    var beer = document.getElementById('beer');
    beer.classList.add('fill');
    beer.style.animationPlayState = 'running';
    pour.classList.add('pouring');
}

function stopFilling() {
    getHeights();
    var beer = document.getElementById('beer');
    beer.style.animationPlayState = 'paused';
    pour.classList.remove('pouring');
    if (roundedPercent === 0) {
        // do nothing
    } else if (roundedPercent === gameg) {
        result.innerHTML = 'Nailed it! Good job!';
    } else if((gameg - roundedPercent) < 5 && (gameg - roundedPercent) > -5 ){
        result.innerHTML = 'Eh. Close enough.';
    } else {
        result.innerHTML = 'Nope !!! Try again.';
    }
}

handle.addEventListener('mouseover', startFilling);
handle.addEventListener('mouseout', stopFilling);

var tapButton = document.querySelector('.tap-button');
tapButton.addEventListener('click', function() {
  startFilling();
  setTimeout(stopFilling, 300); // stop filling after 1 second
});

var mug = document.getElementById('mug');
mug.addEventListener('click', function() {
    var beer = document.getElementById('beer');
    beer.classList.remove('fill');
    getHeights();
    result.innerHTML = '';
    gameg = Math.floor((Math.random() * 100) + 1);
    target.innerHTML = gameg;
});

document.addEventListener('DOMContentLoaded', function() {
    target.innerHTML = gameg;
});
`
};

const game3 = {
  name: 'Tic Tac Toe',
  res: `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js`,
  html: `
<div id="container">
<div class="game-narrative" id="game-narrative-one">
  <p class="game-narrative-text">In a world where two forces battle for domination of a war-torn landscape, only one will draw the line and reign supreme.</p>
  <button class="game-btn" id="narrative-one-btn">...</button>
</div>

<div class="game-narrative" id="game-narrative-two">
  <p class="game-narrative-text">The year is 2048.</p>
  <p class="game-narrative-text">In a post apocalyptic galaxy run by giant corporations, you are a cybernetically enhanced space marine with no memory of their past.</p>
  <button class="game-btn" id="narrative-two-btn">...</button>
</div>

<div class="game-narrative" id="game-narrative-three">
  <p class="game-narrative-text">Are you the chosen one foretold by prophecy?</p>
  <p class="game-narrative-text">Do you have the strength to survive...</p>
  <div id="narrative-three-btns">
    <button class="game-btn" id="narrative-three-btn">YES</button>
    <div></div>
    <a class="game-btn" id="puppies-btn" href="https://au.pinterest.com/explore/puppy-pictures/" target="_blank">NO</a>
  </div>
</div>

<div id = "header">
  <p class="dramatic-text">
    <span id = "tic-text">Tic </span>
    <span id = "tac-text">Tac </span>
    <span id = "doom-text">DOOM</span>
  </p>
</div>


<div id="game-configuration"> 
  <h2 id = "identity-label">Choose your mark</h2>
  <div id="identity-selection" class="row">
    <div class="cell identity-cell" value="X">X</div>
    <div class="cell identity-cell" value="O">O</div>
  </div>
</div>

<div id="game-grid">
  <div class="row">
    <div class="cell game-cell" id="c00"></div>
    <div class="cell game-cell" id="c01"></div>
    <div class="cell game-cell" id="c02"></div>
  </div>
  <div class="row">
    <div class="cell game-cell" id="c10"></div>
    <div class="cell game-cell" id="c11"></div>
    <div class="cell game-cell" id="c12"></div>
  </div>
  <div class="row">
    <div class="cell game-cell" id="c20"></div>
    <div class="cell game-cell" id="c21"></div>
    <div class="cell game-cell" id="c22"></div>
  </div>
  <div class="computer-threat">
    <p><span id ="computer-threat-text"></span></p>
  </div>
</div>

<div id="game-over">
  <h2 id="game-end-heading"></h2>
  <h3 id="game-end-subheading"></h2>
  <button class="game-btn" id="game-reset-btn">&#8634; Play again</button>
</div>

</div>
  `,
  css: `* {
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #FDE3A7;
    -webkit-transition-duration: 0.5s; /* Safari */
    transition-duration: 0.5s;
  }
  
  #container {
  
  }
  
  .game-narrative {
    margin: 0 auto; /* Center the item vertically & horizontally */
    position: fixed; /* Break it out of the regular flow */
    top: 0; left: 0; bottom: 0; right: 0; /* Set the bounds in which to center it, relative to its parent/container */
    
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    resize: both;
    /* overflow: auto; */
    
    max-width: 700px;
    flex-direction: column;
    text-align: center;
  }
  
  .game-narrative-text {
    font-family: 'Share Tech', sans-serif;
    font-size: 2em;
    margin: 10px;
  }
  
  .game-btn {
    font-family: 'Share Tech', sans-serif;
    font-size: 2em;
    margin: 20px;
    
    -webkit-border-radius: 8;
    -moz-border-radius: 8;
    border-radius: 8px;
    color: #ffffff;
    font-size: 20px;
    background-color: #d35400;
    padding: 10px 20px 10px 20px;
    border: solid #F89406 2px;
    text-decoration: none;
    
  }
  
  .game-btn:hover {
    background-color: #e67e22;
    text-decoration: none;
  }
  
  .game-btn:focus {
    outline:0;
  }
  
  #narrative-three-btns {
    display: flex;
    flex-flow: row;
  }
  
  .dramatic-text {
    font-family: 'Trade Winds', cursive;
    font-size: 3em;
  }
  
  .computer-threat {
    font-family: 'Trade Winds', cursive;
    font-size: 1.5em;
    margin-top: 20px;
    color: #c0392b;
  }
  
  #header {
    text-align: center;
    margin: 10px;
    margin-top: 30px;
    color: #c0392b;
  }
  
  #game-configuration {
    
    margin: 0 auto; /* Center the item vertically & horizontally */
   
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    resize: both;
    
  }
  
  #identity-selection {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  
  .identity {
    margin: 0px 20px;
  }
  
  #identity-label {
    color: #FFF;
    font-family: 'Share Tech', sans-serif;
    font-size: 2em;
    text-align: center;
    vertical-align: middle;
    margin: 20px;
  }
  
  #game-grid {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  
  .cell {
    font-family: 'Gloria Hallelujah', cursive;
    color: #FFFFFF;
    background-color: #121a21;
    text-align: center;
    width: 100px;
    height: 100px;
    font-size: 3em;
    margin: 5px;
    
    border-radius: 10px;
    /* "pop-out" effect */
    box-shadow: 6px 6px 0px 0px #090d10;
    -webkit-transition-duration: 0.5s; /* Safari */
    transition-duration: 0.5s;
  }
  
  .cell:hover {
    color: #e74c3c;
    background-color: #34495e;
  }
  
  .cell-selected {
    color: #c0392b;
    transform: translate(3px,3px);
    box-shadow: 3px 3px 0px 0px #000000;
    background-color: #121a21;
    
  }
  
  .cell-selected:hover {
    /* Disabling hover on already selected cells */
    color: #c0392b;
    background-color: #121a21;
  }
  
  .cell-win {
    color: #e74c3c;
    background-color: #34495e;
    transition: all 1s ease-in-out;
    transform: scale(1.05);
  }
  
  .cell-win:hover {
    /* Disabling hover on win animation cells */
    background-color: #34495e;
  }
  
  #game-over {
    color: #FFF;
    font-family: 'Share Tech', sans-serif;
    
    margin: 0 auto; /* Center the item vertically & horizontally */
    position: fixed; /* Break it out of the regular flow */
    top: 0; left: 0; bottom: 0; right: 0; /* Set the bounds in which to center it, relative to its parent/container */
    
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    resize: both;
    /* overflow: auto; */
    
    max-width: 700px;
    flex-direction: column;
    text-align: center;
  }
  
  #game-end-heading {
    font-size: 2em;
    margin: 10px;
  }
  
  #game-end-subheading {
    font-size: 1.5em;
    margin: 10px;
  }
  
  #game-reset-btn {
    font-family: 'Share Tech', sans-serif;
    font-size: 2em;
    margin: 20px;
    
    -webkit-border-radius: 8;
    -moz-border-radius: 8;
    border-radius: 8px;
    color: #ffffff;
    font-size: 20px;
    background-color: #d35400;
    padding: 10px 20px 10px 20px;
    border: solid #F89406 2px;
    text-decoration: none;
    
  }
  
  #game-reset-btn: hover {
    background: #3cb0fd;
    text-decoration: none;
  }`,
  js: `
  var gamegrid = {
    board: [[null, null, null],
            [null, null, null],
            [null, null, null]], // Rows of the game grid in 2D array form.
    playerMark: "", // The mark 'X' or 'O' the player uses to select a cell.
    aiMark: "", // The mark the computer uses to select a cell.
    turnsPlayed: 0, // If reaches 9 without a win, its a draw.
    playerTurn: true, // Flag tracking who's turn it is.
    nextMove: [null, null], // Used to store move calculated by minimax.
    winner: "", // Stores winning mark.
    gameOver: false // Flag indicating whether the game has ended.
  }
  
  var darkColor = "#2c3e50";
  
  var $narrativeOne = $("#game-narrative-one");
  var $narrativeTwo = $("#game-narrative-two");
  var $narrativeThree = $("#game-narrative-three");
  var $narrativeFour = $("#game-narrative-four");
  
  var computerThreats = ["Prepare to suffer extreme humiliation!",
                        "I will destroy you!",
                        "I am invincible!",
                        "You cannot defeat me!",
                        "You will be annihilated!",
                        "You will fail!",
                        "Fear me!",
                        "Vengeance is mine!",
                        "I hunger!"]
  
  var $identityBtn = $(".identity-cell");
  var $gameBtn = $(".game-cell");
  var $gameResetBtn = $("#game-reset-btn");
  
  $(document).ready(function() {
    $narrativeOne.hide();
    $narrativeTwo.hide();
    $narrativeThree.hide();
    $narrativeFour.hide();
    $("#header").hide();
    $("#game-configuration").hide();
    $("#game-grid").hide();
    $("#game-over").hide();
    
    $narrativeOne.fadeIn(500);
  });
  
  $("#narrative-one-btn").on('click', function() {
    var transitionPeriod = 500;
    $narrativeOne.fadeOut(transitionPeriod);
    setTimeout(function() {
      $narrativeTwo.fadeIn(transitionPeriod);
    }, transitionPeriod);
  });
  
  $("#narrative-two-btn").on('click', function() {
    var transitionPeriod = 500;
    $narrativeTwo.fadeOut(transitionPeriod);
    setTimeout(function() {
      $narrativeThree.fadeIn(transitionPeriod);
    }, transitionPeriod);
  });
  
  $("#narrative-three-btn").on('click', function() {
    var transitionPeriod = 500;
    $narrativeThree.fadeOut(transitionPeriod);
    setTimeout(function() {
      $("#tic-text").hide();
      $("#tac-text").hide();
      $("#doom-text").hide();
      $("#header").show();
      
      $("#tic-text").show();
      setTimeout(function(){
        $("#tac-text").show();
        setTimeout(function() {
          $("body").css("background-color", darkColor);
          $("#doom-text").show();
          
          setTimeout(function(){
            $("#game-configuration").fadeIn(transitionPeriod);
            
          }, transitionPeriod * 2);
        }, transitionPeriod * 2);
      }, transitionPeriod * 2);
    }, transitionPeriod * 2);
  });
  
  
  
  // When a player initially chooses their mark before playing.
  $identityBtn.on('click', function() {
  
    // Grabbing value from the HTML element
    gamegrid.playerMark = $(this).attr("value");
    if (gamegrid.playerMark === "X"){
      gamegrid.aiMark = "O";
    } else {
      gamegrid.aiMark = "X";
    }
    
    startGame();
  });
  
  function startGame(){
    // Transitioning between config menu to game grid.
    $("#game-configuration").hide();
    $("#game-grid").fadeIn(500);
    
    if (!gamegrid.playerTurn)
      aiPlay();
  }
  
  $gameBtn.on('click', function() {
    if (gamegrid.playerTurn) {
      // Parsing player's move
      var cell = $(this).attr("id");
      var row = parseInt(cell[1]);
      var col = parseInt(cell[2]);
  
      if (spaceFree(gamegrid.board, row, col)) {
        makePlay(gamegrid.playerMark, row, col); // Commit move to the game board.
        checkPlay(gamegrid.playerMark); // Check if the move resulted in a win.
      } else {
        // Do nothing (space already taken)
      }
    } else {
      // Do nothing (not player's turn)
    }
  
  });
  
  function aiPlay() {
    var aiThinkingDelay = 1000;
    setTimeout(function() {
      
      minimax(gamegrid, 0); // Use minimax to calculate the next optimal move.
      makePlay(gamegrid.aiMark, gamegrid.nextMove[0], gamegrid.nextMove[1]); // Commit move to the game board.
      checkPlay(gamegrid.aiMark); // Check if the move resulted in a win.
      
      
      var randThreat = computerThreats[Math.floor(Math.random() * computerThreats.length)];
      $("#computer-threat-text").text(randThreat);
      $("#computer-threat-text").fadeIn(250);
      setTimeout(function() {
        $("#computer-threat-text").fadeOut(250);
      }, 2000);
      
    }, aiThinkingDelay);
    
    
  }
  
  function checkPlay(mark) {
    const gameOverDelay = 2000;
    if (hasWon()) {
      const gameOverDelay = 2000; // Wait two second to allow win animation to play out.
      // Turn has resulted in a valid win
      setTimeout(function() {
        gameOver(mark); // After delay, transition to game-over menu.   
      }, gameOverDelay);
      
    } else if (gamegrid.turnsPlayed >= 9) {
      // There are no more turns that can be made, it is a draw.
      // Draw animation?
      setTimeout(function() {
        gameOver("draw");
      }, gameOverDelay);
      
    } else {
      gamegrid.playerTurn = !gamegrid.playerTurn; // Toggle turn between pc and player.
      if (!gamegrid.playerTurn) {
        aiPlay(); // If it's not the players turn, initiate computer turn.
      }
    }
  }
  
  function spaceFree(board, row, col) {
    // Checks if a player can mark a selected cell.
    return (board[row][col] === null)
  }
  
  function makePlay(mark, row, col) {
    // Saving move to game    
    gamegrid.board[row][col] = mark;
    gamegrid.turnsPlayed++;
    
    var cellId = "#c" + row + "" + col;
    // Stylising game cell to reflect an ai move.
    $(cellId).text(mark);
    $(cellId).addClass("cell-selected");
    
  }
  
  function minimax(state, depth){
    // Inspired by http://neverstopbuilding.com/minimax
    
    // Creating a replicated object of the game state to avoid
    // editing the existing game state (it has been passed 'byRef')
    // See http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/5344074#5344074
    var gameState = JSON.parse(JSON.stringify(state));
    
    if (gameState.gameOver){
      // If game is in an end state (win, lose, draw) return corresponding score (10, -10, 0)
      return getScore(gameState, depth);
      
    } else {
      depth++; // Iterate depth as algorithm gets recursively deeper. Used to choose moves that prolong defeat, hasten victory.
      var moves = []; // Used to store all possible moves in this current game state.
      var scores = []; // Used to store the corresponding scores resulting from each of those moves.
      
      moves = generateAllAvailableMoves(gameState); // Generate an array of all available coordinates on the game board.
      
      for (var i = 0; i < moves.length; i++) {
        // For each possible move, create a simulation game state where the move has been played.
        var possibleGameState = generatePossibleGame(gameState, moves[i]);
        // Then store the resultant score, recursively calling the minimax algorithm.
        scores.push(minimax(possibleGameState, depth));
      }
      
      if (gameState.playerTurn) {
        // MAX
        var maxScoreIndex = findIndexOfMax(scores); // In the case of it being the protagonist's turn, find the highest equating score.
        gamegrid.nextMove = moves[maxScoreIndex]; // Store move to be executed.
        return scores[maxScoreIndex]; 
      } else {
        // MIN
        var minScoreIndex = findIndexOfMin(scores); // In the case of it being the opponent's turn, find the lowest equating score.
        gamegrid.nextMove = moves[minScoreIndex]; 
        return scores[minScoreIndex];
      }
    }
  }
  
  // Equates game states to scores
  // Wins equating to 10, loses equating to -10, draws or continued gameplay equating to 0.
  function getScore(gameState, depth) {
    if (gameState.gameOver && gameState.winner === gameState.playerMark) {
      return 10 - depth;
    } else if (gameState.gameOver && gameState.winner === gameState.aiMark) {
      return depth - 10;
    } else {
      return 0;
    }
  }
  
  // Returns an array of the coordinates (row, column) of all available cells in a particular game state.
  function generateAllAvailableMoves(gameState){
    const rowLength = 3;
    const colLength = 3;
    var availableMoves = [];
    
    for (var row = 0; row < rowLength; row++){
      for (var col = 0; col < colLength; col++){
        if (spaceFree(gameState.board, row, col)){
          // Scanning the game board for free spaces
          availableMoves.push([row, col]);
        }
      }
    }
    return availableMoves;
  }
  
  // Creates a simulated game state when a specified move is executed.
  function generatePossibleGame(state, move){
    var gameState = JSON.parse(JSON.stringify(state));
    
    // Execute the move
    if (gameState.playerTurn){
      gameState.board[move[0]][move[1]] = gameState.playerMark;
    } else {
      gameState.board[move[0]][move[1]] = gameState.aiMark;
    }
    gameState.turnsPlayed++;
    
    // Check if the move has resulted in an end game state.
    if (checkWin(gameState)) {
      gameState.gameOver = true;
      if (gameState.playerTurn){
        gameState.winner = gameState.playerMark;
      } else {
        gameState.winner = gameState.aiMark;
      }
    } else if (gameState.turnsPlayed >= 9) {
      gameState.gameOver = true;
      gameState.winner = "draw";
    } else {
      gameState.playerTurn = !gameState.playerTurn;
    }
    
    return gameState;
  }
  
  // Finds the index of the highest value in an array.
  function findIndexOfMax(arr) {
    var maxIndex = 0;
    if (arr.length > 1) {
      for (var i = 1; i < arr.length; i++){
        if (arr[i] > arr[maxIndex]){
          maxIndex = i;
        }
      }
    }
    return maxIndex;
  }
  
  // Finds the index of the lowest value in an array.
  function findIndexOfMin(arr) {
    var minIndex = 0;
    if (arr.length > 1) {
      for (var i = 1; i < arr.length; i++){
        if (arr[i] < arr[minIndex]){
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
  
  // Used to check if the last played move has resulted in a win.
  function checkWin(gameState) {
    const numRows = 3;
    const numCols = 3;
  
    // Check for diagonal win right to left
    if (gameState.board[0][0] === gameState.board[1][1] &&
      gameState.board[1][1] === gameState.board[2][2] &&
      gameState.board[0][0] !== null) {
      // Right to left, top to bottom diagonal win
      return true;
    }
  
    // Check for diagonal win left to right
    if (gameState.board[0][2] === gameState.board[1][1] &&
      gameState.board[1][1] === gameState.board[2][0] &&
      gameState.board[0][2] !== null) {
      // Left to right, top to bottom diagonal win
      return true;
    }
  
    // Checking each row for a horizontal win
    for (var row = 0; row < numRows; row++) {
      if (gameState.board[row][0] === gameState.board[row][1] &&
        gameState.board[row][1] === gameState.board[row][2] &&
        gameState.board[row][0] !== null) {
        // Horizontal win
        return true;
      }
    }
  
    // Checking each column for a vertical win
    for (var col = 0; col < numCols; col++) {
      if (gameState.board[0][col] === gameState.board[1][col] &&
        gameState.board[1][col] === gameState.board[2][col] &&
        gameState.board[0][col] !== null) {
        // Vertical win
        return true;
      }
    }
    return false;
  }
  
  /** 
  
  // Pre-Minimax AI, randomly selecting a space on the board.
  
  function aiGenerateRandomPlay() {
    var randRow = Math.floor(Math.random() * 3);
    var randCol = Math.floor(Math.random() * 3);
    var validMove = spaceFree(randRow, randCol);
    while (!validMove) {
      randRow = Math.floor(Math.random() * 3);
      randCol = Math.floor(Math.random() * 3);
      validMove = spaceFree(randRow, randCol);
    }
    return [randRow, randCol];
  }
  
  */
  
  
  // Checking whether the last move made has triggered a win, and if so triggers a win animation.
  function hasWon() {
    const numRows = 3;
    const numCols = 3;
  
    // Check for diagonal win right to left
    if (gamegrid.board[0][0] === gamegrid.board[1][1] &&
      gamegrid.board[1][1] === gamegrid.board[2][2] &&
      gamegrid.board[0][0] !== null) {
      // Right to left, top to bottom diagonal win
      console.log("Left to right, top to bottom diagonal win");
      // Win animation
      $("#c00").addClass("cell-win");
      $("#c11").addClass("cell-win");
      $("#c22").addClass("cell-win");
      
      return true;
    }
  
    // Check for diagonal win left to right
    if (gamegrid.board[0][2] === gamegrid.board[1][1] &&
      gamegrid.board[1][1] === gamegrid.board[2][0] &&
      gamegrid.board[0][2] !== null) {
      // Left to right, top to bottom diagonal win
      console.log("Right to left, top to bottom diagonal win");
      // Win animation
      $("#c02").addClass("cell-win");
      $("#c11").addClass("cell-win");
      $("#c20").addClass("cell-win");
      
      return true;
    }
  
    // Checking each row for a horizontal win
    for (var row = 0; row < numRows; row++) {
      if (gamegrid.board[row][0] === gamegrid.board[row][1] &&
        gamegrid.board[row][1] === gamegrid.board[row][2] &&
        gamegrid.board[row][0] !== null) {
        // Horizontal win
        console.log("Horizontal win");
        // Win animation
        $("#c" + row + "0").addClass("cell-win");
        $("#c" + row + "1").addClass("cell-win");
        $("#c" + row + "2").addClass("cell-win");
        return true;
      }
    }
  
    // Checking each column for a vertical win
    for (var col = 0; col < numCols; col++) {
      if (gamegrid.board[0][col] === gamegrid.board[1][col] &&
        gamegrid.board[1][col] === gamegrid.board[2][col] &&
        gamegrid.board[0][col] !== null) {
        // Vertical win
        console.log("Vertical win");
        // Win animation
        $("#c0" + col).addClass("cell-win");
        $("#c1" + col).addClass("cell-win");
        $("#c2" + col).addClass("cell-win");
        return true;
      }
    }
  
    return false;
  }
  
  // Transitions the screen from the game grid to a game over menu.
  function gameOver(winCase) {
    $("#game-grid").hide();
    $("#game-over").fadeIn(500);
  
    if (winCase === gamegrid.playerMark) {
      // Player wins
      $("#game-end-heading").text("You have claimed victory.");
      $("#game-end-subheading").text("May you bathe in tic-tac-toe glory.");
      
    } else if (winCase === gamegrid.aiMark) {
      // PC wins
      $("#game-end-heading").text("Alas, the computer has claimed victory!");
      $("#game-end-subheading").text("May they bathe their circuits in tic-tac-toe glory.");
    } else {
      // Draw
      $("#game-end-heading").text("X and O, ancient enemies, have concluded their bout in a draw.");
      $("#game-end-subheading").text("Perhaps their feud will be settled in another life, another dimension...");
    }
  }
  
  $gameResetBtn.on('click', resetGame);
  
  function resetGame() {
    $("#game-over").hide();
    $("#game-grid").hide();
    $("#game-configuration").fadeIn(500);
  
    $(".game-cell").empty();
    $(".cell").removeClass("cell-selected");
    $(".cell").removeClass("cell-win");
    
    gamegrid.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    gamegrid.turnsPlayed = 0;
    gamegrid.playerTurn = true;
  }
  `
}

export const gamearr = [game1, game2]