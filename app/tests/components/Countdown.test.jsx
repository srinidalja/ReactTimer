var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', ()=> {
        it('shoud set state to started and countdown', (done)=> {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });
    });

    describe('handleSetCountdown', ()=> {
        it('shoud set state to started and countdown', (done)=> {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('shoud stop at 0', (done)=> {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(1);

            setTimeout(()=>{
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
    

    // describe('render', () => {
    //     it('should render clock to output', () => {
    //         var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
    //         var $el = $(ReactDOM.findDOMNode(clock));
    //         var actualText = $el.find('.clock-text').text();

    //         expect(actualText).toBe('01:02');
    //     });
    // });

    // describe('formatSeconds', () => {
    //     it('should format seconds', () =>{
    //         var clock = TestUtils.renderIntoDocument(<Clock />);
    //         var seconds = 615;
    //         var expected = '10:15';
    //         var actual = clock.formatSeconds(seconds);

    //         expect(actual).toBe(expected);
    //     });

    //     it('should format seconds when min/sec are less than 10', () =>{
    //         var clock = TestUtils.renderIntoDocument(<Clock />);
    //         var seconds = 61;
    //         var expected = '01:01';
    //         var actual = clock.formatSeconds(seconds);

    //         expect(actual).toBe(expected);
    //     });
    // });
});