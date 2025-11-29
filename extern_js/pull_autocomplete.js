import request from 'request';
import { XMLParser } from 'fast-xml-parser';
import iconv from 'iconv-lite'

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
});

function pull(query, hl) {
    const url = "https://www.google.com/complete/search?q=" + query + "&hl=" + hl + "&output=toolbar"
    try {
        return new Promise(resolve => {
            request({ url:url, encoding: null }, (err, httpResponse, body) => {
                let result = iconv.decode(body, 'CP932')
                result = parser.parse(result)
                let send = "window.google.ac.h([\"" + query + "\",[";
                result.toplevel.CompleteSuggestion.forEach(( content, i ) => {
                   let now = "[\"" + content.suggestion.data + "\",\"\",\"" + i + "\"],"
                   send = send + now
                })
                send = send.replace(/(.*),/, "$1") + "], {}])"
                resolve(send)
            })
        })
    } catch(e) {
        console.error(e)
    }
}

var exports = {};
export default { pull }
