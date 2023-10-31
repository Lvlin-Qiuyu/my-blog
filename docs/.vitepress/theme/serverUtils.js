import fs from "fs";
import spawn from 'cross-spawn';
import path from 'path';
import { globby } from "globby";

export async function getAllArticles() {
    let paths = await getAllMDFilePaths();

    let articles = paths.map((item) => {
        const content = fs.statSync(item);
        const lastUpdateDate = getGitLastUpdatedTimeStamp(item);
        return {
            mtime: lastUpdateDate,
            year: new Date(lastUpdateDate).getFullYear(),
            updateDate: `${new Date(lastUpdateDate).getMonth() + 1}/${new Date(lastUpdateDate).getDate()}`,
            title: item.split('/').at(-1).replace('.md', ''),
            path: item.replace('docs', '').replace('.md', '')
        };
    });
    
    return articles.sort((a, b) => b.mtime - a.mtime);
}

async function getAllMDFilePaths() {
    // 扫描 docs 下的所有 MD 文件
    let paths = await globby(["docs/**/**.md", "!docs/index.md", "!docs/archives.md"]);
    return paths;
}

function getGitLastUpdatedTimeStamp(filePath) {
    let lastUpdated
    try {
        lastUpdated = parseInt(spawn.sync(
            'git',
            ['log', '-1', '--format=%at', path.basename(filePath)],
            { cwd: path.dirname(filePath) }
        ).stdout.toString('utf-8')) * 1000
    } catch (e) { /* do not handle for now */ }
    return lastUpdated
}