const chalk = require('chalk')
const prompts = require('prompts')
const versionerWriter = require('./utils/versioner-writer')

function versioner(params) {
    if (params.length == 0) {

    } else {
        const command = params[0];

        if (command == 'init') {
            init(params)
        } else if (command == 'version') {
            newVersion(params)
        } else {
            console.log(chalk.red("Uknown command"))
            console.log(chalk`{blue You can use:}
            {red versioner init}: {black Initialize files and create commands to package.json}
            {red versioner newVer}: {black Modify/create version of the file}
            `)
        }
    }
}

module.exports = versioner


async function init() {
    const initial_version = await prompts([
        {
            type: 'number',
            name: 'major',
            message: 'Type current MAJOR version of your app',
            initial: 1
        },
        {
            type: 'number',
            name: 'minor',
            message: 'Type current MINOR version of your app',
            initial: 0
        },
        {
            type: 'number',
            name: 'patch',
            message: 'Type current PATCH version of your app',
            initial: 0
        }
    ])
    const { major, minor, patch } = initial_version
    versionerWriter.init(major, minor, patch)
}

async function newVersion() {

    let typeVersion = await prompts([
        {
            type: 'select',
            name: 'type_version',
            message: 'Choose type of version',
            choices: [
                {
                    title: "Major",
                    value: "major"
                },
                {
                    title: "Minor",
                    value: "minor"
                },
                {
                    title: "Patch",
                    value: "patch"
                }
            ]
        }
    ])
    if (typeVersion.type_version == 'major') {
        versionerWriter.major()
    } else if (typeVersion.type_version == 'minor') {
        versionerWriter.minor()
    } else if (typeVersion.type_version == 'patch') {
        versionerWriter.patch()
    }
}
// versioner.config = config;


