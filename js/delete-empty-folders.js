const { readdirSync, statSync, rmdirSync } = require('fs');
const { join } = require('path');

function isEmptyDir(directory) {
    return readdirSync(directory).length === 0;
}

async function removeEmptyDirs(dirPath) {
    const files = readdirSync(dirPath);

    for (const file of files) {
        const fullPath = join(dirPath, file);
        if (statSync(fullPath).isDirectory()) {
            await removeEmptyDirs(fullPath);

            if (isEmptyDir(fullPath)) {
                rmdirSync(fullPath);
                console.log(`Carpeta eliminada: ${fullPath}`);
            }
        }
    }
}

async function main(rootPath) {
    await removeEmptyDirs(rootPath);
}

const rootPath = process.argv[2];

if (!rootPath) {
    console.error(
        'Por favor, proporciona la ruta del directorio como argumento.',
    );
    process.exit(1);
}

main(rootPath)
    .then(() => console.log('Done!'))
    .catch(console.error);
