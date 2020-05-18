module.exports = {
    getRepo: async (req, res) => {
        res.send('Repo Get Route');
    },
    postRepo: async (req, res) => {
        res.send('Repo Post Route')
    },
    putRepo: async (req, res) => {
        res.send('Repo Put Route')
    },
    deleteRepo: async (req, res) => {
        res.send('Repo Delete Route')
    }
}