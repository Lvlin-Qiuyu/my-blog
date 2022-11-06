import {globby} from "globby";
import fs from "fs";

export async function getAllArticles() {
    let paths = await getAllMDFilePaths();

    let articles = paths.map((item) => {
        const content = fs.statSync(item);
        return {
            mtime: content.mtimeMs,
            year: content.mtime.toJSON().slice(0, 4),
            updateDate: content.mtime.toJSON().slice(5, 10),
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