import React from 'react';
import './TopBanner.css';
import { Link } from 'react-router-dom';

const TopBanner = () => {

    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        window.onload = function () {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
        //     // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid transparent}";
            document.body.appendChild(css);
        };

        return (
            <div className="container-fluid">
                <div className="static-slider7" style={{
                    backgroundImage: "url(https://lh3.googleusercontent.com/proxy/P99nEtYE-8yLYj09k80X31ENnQE5BzghJAltMnf6VYgmWKwaTOII5kFMJsfzE4YZ_HiVDNXTEV4MjS81OhhesQRG6DfbOkUSs1bir85lJxg1CBXbMM734CkgDZ3P-yBnhlFqpRoveYWBw7EJMYjBP5Tp6A)"
                }}>
                    <div className="container">

                        <div className="row justify-content-center">

                            <div className="col-md-8 align-self-center text-center">
                                <h1 className="title text-white typewrite" data-period="2000" data-type='[ "World",
                            "Of",  "Cactus" ]'></h1>
                                <h5 className="text-white">Best Home Decorated Cactus Planet Suppliers</h5>
                                <Link to='/items'>
                                    <a className="btn btn-danger-gradiant rounded-pill btn-md mt-3 border-0 text-white" href="">
                                        <span>Our Collections <i className="ti-arrow-right"></i></span>
                                    </a>
                                </Link>
                                <Link to='/aboutus'>
                                    <a className="btn btn-outline-light rounded-pill btn-md mt-3" data-toggle="modal" data-target="#static-slide7" href=""><i className="mr-2 icon-control-play"></i> About US </a>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default TopBanner;