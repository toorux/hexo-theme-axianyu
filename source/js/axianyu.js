// const postInfo = {
//     license: 'CC BY-SA 4.0',
//     author: '咸鱼',
//     url: 'http://localhost:4000/2022/01/hexo-action-deploy/',
// }

document.oncopy = function (event) {
    if (!postInfo.license) {
        return;
    }
    clipboardData = event.clipboardData || window.clipboardData;
    if (!clipboardData) {
        return
    }
    let content = window.getSelection() ? window.getSelection() : document.selection.createRange().text;
    if (!content) {
        return;
    }
    try {
        if (content.toString().length < 20) {
            return;
        }
    } catch (error) {
        
    }
    event.preventDefault();
    clipboardData.setData('text/plain', content 
        + '\n----------------------'
        + `\n来源: ${document.title}`
        + `\n作者: ${postInfo.author}`
        + `\n链接: ${postInfo.url}`
        + `\n本文著作权归作者 ${postInfo.author} 所有(外部引用部分除外)。本文使用 ${postInfo.license} 许可协议, 请遵守相关许可协议, `
        + (postInfo.license.indexOf('NC') > -1 ? '禁止商业转载/引用, 非商业转载/引用请注明出处。' : '引用请注明出处。'));
}



