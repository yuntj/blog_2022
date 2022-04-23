const initServer = async (app) => {
    return new Promise((resolve, reject) => {
        const PORT = process.env.PORT || 8080
        app
            .listen(PORT, () => {
                console.log(`Server running on http://localhost:${PORT}`);
                resolve()
            })
            .on('error', (error) => {
                console.log(error);
                reject()
            })
    })
}

module.exports = initServer