const praise = Object.create(stats);
praise.queryString = 'UPDATE statistics set praise = praise + 1';
praise.update = function () {
	return stats.update.call(this);
};