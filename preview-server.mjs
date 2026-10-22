import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer((req,res)=>{
  let requested;try{requested=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400).end();return}
  let file=path.resolve(root,`.${requested}`);
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return}
  if(fs.statSync(file,{throwIfNoEntry:false})?.isDirectory())file=path.join(file,'index.html');
  const exists=fs.existsSync(file);if(!exists)file=path.join(root,'404.html');
  const mime={'.svg':'image/svg+xml','.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png'};
  res.writeHead(exists?200:404,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);
}).listen(4174,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4174'));
