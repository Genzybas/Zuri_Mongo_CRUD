const http = require("http");
const { connect } = require("http2");
const PORT = process.env.PORT || 3500;
const server = http.createServer(
    function(req, res) {
        res.write("Testing server!");
        res.end();
    }
)
.listen(PORT, error => {
    console.log(`Server listening on port ${PORT}`)
});
