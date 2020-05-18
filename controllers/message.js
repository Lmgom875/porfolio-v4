module.exports = {
    getMessage: async (req, res) => {
        res.send('Message Get Route');
    },
    postMessage: async (req, res) => {
        res.send('Message Post Route')
    },
    putMessage: async (req, res) => {
        res.send('Message Put Route')
    },
    deleteMessage: async (req, res) => {
        res.send('Message Delete Route')
    }
}