(function () {
	$('#filter').addEventListener('change', evt => {
		localStorage.setItem('filter', evt.target.value);
		if ('navigation' in window) {
			navigation.navigate(`?filter=${evt.target.value}`, {
				history: 'replace',
			});
		} else {
			history.replaceState({}, '', `?filter=${evt.target.value}`);
		}
		resetOutput();
		runTests(evt.target.value);
	});
})();
