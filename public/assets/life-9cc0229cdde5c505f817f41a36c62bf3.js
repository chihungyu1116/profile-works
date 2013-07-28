var Life=function(){var a={setDefault:function(a){a=a||{},this.cell_dimension=20,this.container_id=a.container_id,this.control_id=a.container_id+"_control",this.board_id=a.container_id+"_board",this.board_width=a.board_width||30,this.board_height=a.board_height||30,this.cell_dead_color=a.cell_dead_color||"#aaa",this.cell_live_color=a.cell_live_color||"red",this.cell_empty_color=a.cell_empty_color||"#333",this.cell_map=[]},resetGameBoard:function(){},removeGameBoard:function(){},createGame:function(){function e(){var c=d.control_id,e;b=$(c),c=c.replace("#",""),b.length===0&&(e=['<div id="',c,'" class="game-control clearfix">','<div class="clearfix">','<div id="',c+'_width" class="input-container col">',"<label>Width</label>",'<input name="width">',"</div>",'<div id="',c+'_height" class="input-container col">',"<label>Height</label>",'<input name="height">',"</div>",'<div id="',c+'_cell_live_color" class="input-container col">',"<label>Live Cell Color</label>",'<input name="cell_live_color">',"</div>",'<div id="',c+'_cell_dead_color" class="input-container col">',"<label>Dead Cell Color</label>",'<input name="cell_dead_color">',"</div>",'<div id="',c+'_cell_empty_color" class="input-container col">',"<label>Empty Cell Color</label>",'<input name="cell_empty_color">',"</div>","</div>",'<div id="',c+'_set_btn" class="btn col">Set</div>','<div id="',c+'_start_btn" class="btn col">Start</div>','<div id="',c+'_reset_btn" class="btn col">Reset</div>',"</div>"].join(""),b=$(e),a.append(b))}function f(){function e(a){var b=['<div id="',a,'" class="cell"></div>'].join("");return b}function f(){var a=d.board_width,b=d.board_height,c="",f,g,h,i,j;for(j=0;j<b;j++){f=[];for(i=0;i<a;i++)g="cell_"+j+"_"+i,h={id:"#"+g,status:"empty",next_status:"",neighbors:[]},f.push(h),c+=e(g);d.cell_map.push(f)}return $(c)}function g(a){var b=d.board_width,c=d.board_height,e=d.cell_dimension,f,g;return a=a.replace("#",""),f=['<div id="',a,'" class="game-board clearfix"></div>'].join(""),g=$(f),g.css({height:c*e+"px",width:b*e+"px"}),g}var b=d.board_id,c=$(b);c.length===0&&(c=g(b),$board_elems=f(),c.append($board_elems),a.append(c))}var a=$(this.container_id),b,c,d=this;e(),f()},setCellColor:function(a,b){var c=this.cell_live_color,d=this.cell_dead_color,e=this.cell_empty_color,f;b==="empty"?f=e:b==="live"?f=c:b==="dead"&&(f=d),a.css("background",f)},setCellStatus:function(a,b){a.status=b},getCellReference:function(a){var b=this.cell_map,c,d,e,f;for(e=0;e<b.length;e++){c=b[e];for(f=0;f<c.length;f++){d=c[f];if(d.id===a)return d}}},setCellNeighbors:function(a,b,c){function q(a,b){return"#cell_"+a+"_"+b}function r(){var a=o-1,b=p-1,c;return a<0||b<0?null:(c=q(a,b),d.getCellReference(c))}function s(){var a=o,b=p-1,c;return b<0?null:(c=q(a,b),d.getCellReference(c))}function t(){var a=o+1,c=p-1,e;return a>=b||c<0?null:(e=q(a,c),d.getCellReference(e))}function u(){var a=o-1,b=p,c;return a<0?null:(c=q(a,b),d.getCellReference(c))}function v(){var a=o+1,c=p,e;return a>=b?null:(e=q(a,c),d.getCellReference(e))}function w(){var a=o-1,b=p+1,e;return a<0||b>=c?null:(e=q(a,b),d.getCellReference(e))}function x(){var a=o,b=p+1,e;return b>=c?null:(e=q(a,b),d.getCellReference(e))}function y(){var a=o+1,e=p+1,f;return a>=b||e>=c?null:(f=q(a,e),d.getCellReference(f))}var d=this,e=a.id,f,g,h,i,j,k,l,m,n,o,p;e=e.replace("#cell_",""),f=e.split("_"),o=f[0],p=f[1],console.log(o,p,e),g=r(),h=s(),i=t(),j=u(),k=v(),l=w(),m=x(),n=y(),a.neighbors.push(g),a.neighbors.push(h),a.neighbors.push(i),a.neighbors.push(j),a.neighbors.push(l),a.neighbors.push(l),a.neighbors.push(m),a.neighbors.push(n)},bindCell:function(a,b){var c=this.cell_live_color,d=this.cell_empty_color,e=this;a.click(function(){b.status==="empty"?(e.setCellColor(a,"live"),e.setCellStatus(b,"live")):b.status==="live"&&(e.setCellColor(a,"empty"),e.setCellStatus(b,"empty"))})},bindBoard:function(){var a=this,b=this.board_width,c=this.board_height,d=this.cell_map,e,f,g,h,i,j;for(j=0;j<d.length;j++)e=d[j],$.each(e,function(d,e){f=e.id,g=e.status,i=$(f),a.setCellColor(i,g),a.setCellNeighbors(e,b,c),a.bindCell(i,e)})},gameStart:function(){},bindControls:function(){var a=this.control_id,b=this;$(a+"_start_btn").click(function(){b.gameStart()})}};return{init:function(b){var c=Object.create(a);c.setDefault(b),c.createGame(),c.bindBoard(),c.bindControls()}}}();