
module.exports = {
    getInfo: async (req, res) => {
        res.send('Info Get Route');
    },
    postInfo: async (req, res) => {
        res.send('Info Post Route')
    },
    putInfo: async (req, res) => {
        res.send('Info Put Route')
    },
    deleteInfo: async (req, res) => {
        res.send('Info Delete Route')
    }




}