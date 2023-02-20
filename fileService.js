const uuid = require('uuid');
const path = require('path');

class fileUpload {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('pictures', fileName);
            file.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e.message);
        }
    }
}

module.exports = new fileUpload();
