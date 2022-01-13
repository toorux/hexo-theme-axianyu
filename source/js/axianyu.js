

document.oncopy = function (event) {
    if (!postInfo || !postInfo.license) {
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
        let contentStr = content.toString();
        if (contentStr.length < 20) {
            return;
        }
        // 如果复制的内容是以http/https开头、不含空白字符(换行等), 并且长度不超过200的话, 视为复制的超链接, 不追加版权信息
        if (/^https?:\/\/[^\s]{3,200}$/.test(contentStr)) {
            return;
        }
        // 如果复制的是git仓库链接, 不追加版权信息
        if (/^git@github.com:[^\s]+\/[^\s]+\.git$/.test(contentStr)) {
            return;
        }
        // 如果复制的是git clone指令, 不追加版权信息
        if (/^git clone git@github.com:[^\s]+\/[^\s]+\.git$/.test(contentStr)) {
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
        + `\n本文使用 ${postInfo.license} 许可协议, 著作权归作者 ${postInfo.author} 所有, 请遵守相关许可协议, `
        + (postInfo.license.indexOf('NC') > -1 ? '禁止商业转载/引用, 非商业转载/引用请注明出处。' : '引用请注明出处。'));
}



