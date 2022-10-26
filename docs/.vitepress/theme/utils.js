// 将文章根据年份进行分类，返回一个二维数组
export function useYearSort(articles) {
    const data = [];
    let year = "0";
    let num = -1;
    for (let index = 0; index < articles.length; index++) {
        const element = articles[index];
        if(element.year !== year) {
            year = element.year;
            num++;
            data[num] = [];
        }
        data[num].push(element);
    }
    return data;
}