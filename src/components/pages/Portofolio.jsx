import { Component } from "react";
import { Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import myWeb from '../images/portofolio/my-web.PNG'
import waktuFront from '../images/portofolio/waktu-front.PNG'
import waktuCms from '../images/portofolio/waktu-cms.PNG'
import furakCms from '../images/portofolio/furak-cms.PNG'
import furakFront from '../images/portofolio/furak-front.PNG'
import gameseruCms from '../images/portofolio/gameseru-cms.PNG'
import gameseruFront from '../images/portofolio/gameseru-front.PNG'
import mobiwin from '../images/portofolio/mobiwin.PNG'
import momokaApi from '../images/portofolio/momoka-api.PNG'
import momokaApp from '../images/portofolio/momoka-app.PNG'
import momokaWeb from '../images/portofolio/momoka-web.PNG'
import quegoWeb from '../images/portofolio/quego-web.PNG'
import quegoApi from '../images/portofolio/quego-api.PNG'
import quegoApp from '../images/portofolio/quego-app.PNG'
import quegoCms from '../images/portofolio/quego-cms.PNG'
import quegoApi1 from '../images/portofolio/quego-v1-api.PNG'
import quegoApp1 from '../images/portofolio/quego-v1-app.PNG'
import quegoCms1 from '../images/portofolio/quego-v1-cms.PNG'
import sekundoCms from '../images/portofolio/sekundo-cms.PNG'
import sekundoFront from '../images/portofolio/sekundo-front.PNG'
import smsNew from '../images/portofolio/sms-new.PNG'
import smsOld from '../images/portofolio/sms-old.PNG'
import waktuOld from '../images/portofolio/waktu-old.PNG'
import akila from '../images/portofolio/akila.PNG'
import ptsambara from '../images/portofolio/ptsambara.PNG'
import ragiljayateknik from '../images/portofolio/ragiljayateknik.PNG'
import dharmasiswa from '../images/portofolio/dharmasiswa.PNG'
import appsekolah from '../images/portofolio/appsekolah.PNG'

class Portofolio extends Component {
    render() {
        // const mHeight = window.innerHeight
        const mWidth = window.innerWidth

        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {/* MY WEB */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - My Website" style={{ width: mWidth, height: 206.64 }} src={myWeb} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Juri Pebrianto Website</b> This is a website for my self.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">React Js</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SEKOLAH */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - My Website" style={{ width: mWidth, height: 206.64 }} src={appsekolah} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>School Website Template</b> for school website.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">PHP</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Bootstrap</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - My Website" style={{ width: mWidth, height: 206.64 }} src={dharmasiswa} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Dharma Siswa Tangerang</b> school website.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">PHP</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Wordpress</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FRELEANCE */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - My Website" style={{ width: mWidth, height: 206.64 }} src={akila} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Akila Dental</b> dental clinic apps.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">PHP</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">AdminLTE</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - My Website" style={{ width: mWidth, height: 206.64 }} src={ragiljayateknik} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Ragil Jaya Teknik</b> company profile.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">PHP</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">cPanel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - My Website" style={{ width: mWidth, height: 206.64 }} src={ptsambara} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>PT Sambara</b> company profile.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">PHP</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">cPanel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* QUEGO NEW */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Quego CMS" style={{ width: mWidth, height: 206.64 }} src={quegoCms} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Quego CMS</b> Content management system for QueGo.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">PHP</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Stisla</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-success">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Quego API" style={{ width: mWidth, height: 206.64 }} src={quegoApi} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Quego API</b> API's for QueGo (new version) mobile app.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">PHP</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-success">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Quego Mobile App" style={{ width: mWidth, height: 206.64 }} src={quegoApp} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Quego Mobile App</b> Mobile apps build for Android.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Flutter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Firebase</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOBIWIN WEB */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Mobiwin Website" style={{ width: mWidth, height: 206.64 }} src={mobiwin} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Mobiwin Website</b> company profile.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Java</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Springboot</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Bootstrap</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Proxy Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WAKTU */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Waktu Website" style={{ width: mWidth, height: 206.64 }} src={waktuFront} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Waktu Website</b> <a href="https://waktu.my.id">Waktu.my.id</a> is content (article and video) website .
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Bootstrap</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Waktu CMS" style={{ width: mWidth, height: 206.64 }} src={waktuCms} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Waktu CMS</b> management system for <a href="https://waktu.my.id">waktu.my.id</a>.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">AndminLTE</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CMS NEW */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - SMS Gateway New" style={{ width: mWidth, height: 206.64 }} src={smsNew} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>SMS Gateway New</b> content management for SMS Gateway/SMS Premium.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Argon</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOMOKA */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Momoka Games Website" style={{ width: mWidth, height: 206.64 }} src={momokaWeb} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Momoka Games Website</b> Momoka Games web version.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">VueJs</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Axios</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Websocket</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Redis</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-success">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Momoka Games API" style={{ width: mWidth, height: 206.64 }} src={momokaApi} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Momoka Games API</b> API's and CMS for Momoka mobile app.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Websocket</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-success">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Momoka Games Mobile App" style={{ width: mWidth, height: 206.64 }} src={momokaApp} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Momoka Games Mobile App</b> Mobile apps build for Android and iOS.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Flutter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">One Signal</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Websocket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUEGO V1 */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Quego Versi 1 Website" style={{ width: mWidth, height: 206.64 }} src={quegoWeb} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Quego Versi 1 Website</b> landing page for Quego.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MySQL</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">WHM / cPanel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Quego Versi 1 CMS" style={{ width: mWidth, height: 206.64 }} src={quegoCms1} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Quego Versi 1 CMS</b> management system.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-success">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Quego Versi 1 API" style={{ width: mWidth, height: 206.64 }} src={quegoApi1} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Quego Versi 1 API</b> API's for mobile app.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-success">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Quego Versi 1 Mobile App" style={{ width: mWidth, height: 206.64 }} src={quegoApp1} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Quego Versi 1 Mobile App</b> Mobile apps build for Android.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Flutter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">One Signal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FURAK */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Furak Website" style={{ width: mWidth, height: 206.64 }} src={furakFront} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Furak Website</b> content portal.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Bootstrap</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Furak CMS" style={{ width: mWidth, height: 206.64 }} src={furakCms} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Furak CMS</b> management content for Furak.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">AdminLTE</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SEKUNDO */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Sekundo News Website" style={{ width: mWidth, height: 206.64 }} src={sekundoFront} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Sekundo News Website</b> new content portal.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Bootstrap</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Sekundo News CMS" style={{ width: mWidth, height: 206.64 }} src={sekundoCms} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Sekundo News CMS</b> management content for Sekundo.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">AdminLTE</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WAKTU OLD */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Waktu Versi 1" style={{ width: mWidth, height: 206.64 }} src={waktuOld} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Waktu Versi 1</b> like a blogspot.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Laravel</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MariaDB</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Bootstrap</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GAME SERU */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Game Konten Website" style={{ width: mWidth, height: 206.64 }} src={gameseruFront} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Game Konten Website</b> game portal.
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Bootstrap</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">CentOs 7</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Nginx</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - Game Konten CMS" style={{ width: mWidth, height: 206.64 }} src={gameseruCms} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>Game Konten CMS</b> management content for Game Seru
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Codeigneter</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MySQL</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">AdminLTE</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">WHM / cPanel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SMS OLD */}
                    <div className="col bg-info">
                        <div className="card shadow-sm">
                            <Image alt="Juri Pebrianto - SMS Gateway Old Version" style={{ width: mWidth, height: 206.64 }} src={smsOld} thumbnail />
                            <div className="card-body">
                                <p className="card-text">
                                    <b>SMS Gateway Old Version</b> content management for SMS Gateway/SMS Premium (old one).
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="md-12">
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Php 5</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Smarty</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">MySQL</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Bootstrap Admin</button>
                                        <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Centos 6 / 7</button>
                                        {/* <button type="button" className="md-1 mrgRightBtn btn btn-sm btn-outline-secondary">Apache / Httpd</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md-12 otherRead">
                    <p>
                        <b class="text-success">Mobile / API's</b> || <b class="text-info">Website</b>
                    </p>
                    <b>In addition to what I haveve done above, there are also many things that I do about software development and this can be
                        seen on <a href="https://github.com/aquarink">Github</a> and <a href="https://gitlab.com/junkuwieazy">Gitlab</a>. Thanks</b>
                </div>
            </div>
        );
    }
}

export default Portofolio;