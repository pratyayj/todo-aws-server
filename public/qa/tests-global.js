suite('Global Tests', function(){
    test('page has a valid title', function(){
        assert(document.title && document.title.match(/\S/) &&
                document.title.toUpperCase() === 'PRATYAY TODO APP');
    });
});

suite('API link', function() {
    test('link to API exists', function() {
        assert($('a[href="/api"]').length);
    });
});