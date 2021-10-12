let fs = require("fs");
let paths = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz", "jpg", "png"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};

function fn(path) {
    let content = fs.readdirSync(path);
    let folderPath = paths.join(path, "organize");
    let organisePresent = fs.existsSync(folderPath);
    if (organisePresent) {
        console.log("File is already organized in organize folder 😎");
        return;
    }
    fs.mkdirSync(folderPath);

    let mediaPath = paths.join(folderPath, "media");
    fs.mkdirSync(mediaPath);

    let archivespath = paths.join(folderPath, "archives");
    fs.mkdirSync(archivespath);

    let documentsPath = paths.join(folderPath, "documents");
    fs.mkdirSync(documentsPath);

    let appPath = paths.join(folderPath, "app");
    fs.mkdirSync(appPath);

    let otherPath = paths.join(folderPath, "other");
    fs.mkdirSync(otherPath);

    for (let i = 0; i < content.length; i++) {
        let extwd = paths.extname(content[i]);
        let ext = extwd.split(".");
        folderName = "other";
        for (key in types) {
            for (let j = 0; j < types[key].length; j++) {
                if (types[key][j] == ext[1]) {
                    folderName = key;
                    break;
                }
            }
        }
        let srcfilepath = paths.join(path, content[i]);

        let destpath = paths.join(folderPath, folderName, content[i]);
        fs.copyFileSync(srcfilepath, destpath);
    }
    console.log("Your file organized successfully 😉");
}
module.exports = {
    fxn: fn,
};