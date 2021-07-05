function crawl(args) {
    let url = "http://kino-dom.org/page/" + JSON.stringify(args[0]) + "/";
    let responses = http([{url: url}]);
    let items = regex('<div class="post-cover">([\s\S]*?)</a>', responses);
    let shows = [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let title = regex('<div class="post-title"><h3>(.*)</h3></div>', [item])[0];
        let thumbnail = regex('<div style="background-image:url\((.*)\)" class="post-image">', [item])[0];
        let ids = regex('<div class="post-title-eng">(.*)</div>', [item]);
        let id = ids.length > 0 ? ids[0] : title;
        shows.push({id: id, title: title, thumbnail: thumbnail});
    }
    return shows;
}