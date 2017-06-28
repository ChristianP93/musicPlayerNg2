const musicFolder = '../music/';
const fs = require ('fs');
const ms = require('mediaserver');

// console.log(testFolder);

module.exports = ()=>{
   let readSongs = (req, res, next)=>{
      fs.readdir(musicFolder, (err, files) => {
        console.log(err);
        let x = {'response': files}
        files.forEach((index, value)=>{
          if(index.indexOf(".jpg") >= 0){
            let img = fs.readFileSync(musicFolder + index);
            x.cover = img
          }
        })
        res.status(200).json(x);
        return next();
      });
    };

    let createStream = (req, res, next)=>{
      ms.pipe(req, res, musicFolder + req.params.name);
    };

    return {
      'readSongs':readSongs,
      'createStream' : createStream,
    }
}
