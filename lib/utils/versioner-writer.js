const chalk = require("chalk");
const fs = require("fs");
const os = require("os");

function versionerWriter() {
    return versionerWriter
}



versionerWriter.init = function (major, minor, patch) {
    fs.writeFile(".versioner", "MAJOR=" + major + os.EOL + "MINOR=" + minor + os.EOL + "PATCH=" + patch, function (err) {
        if (err) throw err;
        console.log(chalk.black("Initial Version ") + chalk.bgGreenBright("v" + major + "." + minor + "." + patch));
    })
}

versionerWriter.major = function () {
    const file = versionerWriter.readVersionerFile()
    const version = versionerWriter.getVersion(file)
    const prev_version_text = chalk`{bgred v${version.MAJOR}.${version.MINOR}.${version.PATCH}}`
    console.log(prev_version_text)

}

versionerWriter.minor = function () {

}

versionerWriter.patch = function () {

}

versionerWriter.readVersionerFile = function () {
    return fs.readFileSync(".versioner", (err, data) => {
        if (err) {
            console.log(`${chalk.bgGray('[Versioner]')} ${chalk.red('.versioner file NOT FOUNDED:')}`)
            return null
        }
        return data
    }).toString()
}

versionerWriter.getVersion = function (textFile) {
    return version_obj = {
        MAJOR: textFile.split(os.EOL).find(line => line.includes("MAJOR")).split("=")[1],
        MINOR: textFile.split(os.EOL).find(line => line.includes("MINOR")).split("=")[1],
        PATCH: textFile.split(os.EOL).find(line => line.includes("PATCH")).split("=")[1]
    }
}

module.exports = versionerWriter