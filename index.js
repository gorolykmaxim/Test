const fs = require("fs");
const path = require("path");

function fileName(name) {
    return path.join(__dirname, name);
}

function readScript(name) {
    return fs.readFileSync(fileName(name, 'utf8')).toString();
}

const config = {
    "platforms": [
        {
            "name": "Кино-дом",
            "categories": {
                "cache-ttl": 86400000,
                "category-list": {
                    "name": "Новое",
                    "pages-per-load": 3,
                    "crawler": readScript("kd-new.js"),
                },
            },
        }
    ],
    "http-client": {
        "user-agents": [
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15",
            "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
        ]
    }
};

fs.writeFileSync(fileName("index.json"), JSON.stringify(config, null, 2));