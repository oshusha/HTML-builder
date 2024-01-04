let path = require('path');
let fs = require('fs/promises');
let dir = path.join(__dirname, 'files');
let dirCopy = path.join(__dirname, 'files-copy');

fs.rm(dirCopy, {
    recursive: true,
    force: true
}).finally(function() {
    fs.mkdir(dirCopy, {
        recursive: true
    });

    fs.readdir(dir, {
        withFileTypes: true
    }).then(function(data) {
        data.forEach(function(item) {
            if (item.isFile()) {
                let pathItem = path.join(dir, item.name);
                let pathItemDes = path.join(dirCopy, item.name);
                fs.copyFile(pathItem, pathItemDes);}
        });
    });
});