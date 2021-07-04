const fs = require("fs");
const path = require("path");
const config = {
    "http-client": {
        "user-agents": [
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15",
            "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0"
        ]
    }
};
fs.writeFileSync(path.join(__dirname, "index.json"), JSON.stringify(config, null, 2));