describe('Map', function() {
    var container, map;

    beforeEach(function() {
        container = d3.select('body').append('div');
        map = iD.Map();
        container.call(map);
    });

    afterEach(function() {
        container.remove();
    });

    describe('#connection', function() {
        it('gets and sets connection', function() {
            var connection = iD.Connection();
            expect(map.connection(connection)).to.equal(map);
            expect(map.connection()).to.equal(connection);
        });
    });

    describe('#zoom', function() {
        it('gets and sets zoom level', function() {
            expect(map.zoom(4)).to.equal(map);
            expect(map.zoom()).to.equal(4);
        });
    });

    describe('#zoomIn', function() {
        it('increments zoom', function() {
            expect(map.zoom(4)).to.equal(map);
            expect(map.zoomIn()).to.equal(map);
            expect(map.zoom()).to.equal(5);
        });
    });

    describe('#zoomOut', function() {
        it('decrements zoom', function() {
            expect(map.zoom(4)).to.equal(map);
            expect(map.zoomOut()).to.equal(map);
            expect(map.zoom()).to.equal(3);
        });
    });

    describe('#center', function() {
        it('gets and sets center', function() {
            expect(map.center([0, 0])).to.equal(map);
            expect(map.center()).to.eql([0, 0]);
            expect(map.center([10, 15])).to.equal(map);
            expect(map.center()[0]).to.be.closeTo(10, 0.5);
            expect(map.center()[1]).to.be.closeTo(15, 0.5);
        });
    });

    describe('#extent', function() {
        it('gets and sets extent', function() {
            expect(map.size([100, 100])).to.equal(map);
            expect(map.center([0, 0])).to.equal(map);
            expect(map.extent()[0][0]).to.be.closeTo(-17.5, 0.5);
            expect(map.extent()[1][0]).to.be.closeTo(17.5, 0.5);
            expect(map.extent([10, 1], [30, 1]));
            expect(map.extent()[0][0]).to.be.closeTo(10, 0.1);
            expect(map.extent()[1][0]).to.be.closeTo(30, 0.1);
            expect(map.extent([-1, -20], [1, -40]));
            expect(map.extent()[0][1]).to.be.closeTo(-20, 0.1);
            expect(map.extent()[1][1]).to.be.closeTo(-40, 0.1);
        });
    });

    describe("surface", function() {
        it("is an SVG element", function() {
           expect(map.surface.node().tagName).to.equal("svg");
        });
    });
});
