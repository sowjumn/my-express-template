reposRouteHandler = function(req, res, next) {
    const userRepos = {SanFranCow: 'beach', SanDiegoCat: 'Mountain'};
    let name = req.params.name;
    let repoCount = userRepos[name];
    if (repoCount) res.send(repoCount)
    else next();
};

module.exports = reposRouteHandler;