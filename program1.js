const getTotalIsles = function (grid) {
  if(!grid||grid.length==0||grid[0].length==0){
    return 0;
  }
  const row=grid.length;
  const cols=grid[0].length;
  const visited=new Array(row).fill().map(()=>new Array(cols).fill(false));
  let numislands=0;

  function prons(rows,col){
    if(rows<0||rows>=rows||col<0||col >=cols){
      return;
    }
  }
    visited[row][col]=true;


    prons(row-1,col);
    prons(row+1,col);
    prons(row,col-1);
    prons(row,col+1);


    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        if(grid[r][c]=='L'&& !visited[r][c]){
          prons(r,c);
          numislands++;
        }
      }
    }
    return numislands;

  
}
  
module.exports = getTotalIsles;
