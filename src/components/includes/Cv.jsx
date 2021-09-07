import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Cv extends Component {
  render(props) {
    return (
      <div>
        {this.props.showStatus === 'true' ? (
          <div>
            <h5><u>Personal Data</u></h5>
            <table className="table table-responsive">
              <tr>
                <td className="tdTitle">Name</td>
                <td>:</td>
                <td>Juri Pebrianto</td>
              </tr>

              <tr>
                <td className="tdTitle">City of Birt</td>
                <td>:</td>
                <td>Subang, Indonesia</td>
              </tr>

              <tr>
                <td className="tdTitle">Date of birth</td>
                <td>:</td>
                <td>February 9, 1990 </td>
              </tr>

              <tr>
                <td className="tdTitle">Religion</td>
                <td>:</td>
                <td>Islam / Mosleem</td>
              </tr>

              <tr>
                <td className="tdTitle">Status</td>
                <td>:</td>
                <td>Married</td>
              </tr>

              <tr>
                <td className="tdTitle">Address</td>
                <td>:</td>
                <td>Jl. Mawar Dalam 2 Rt.006 Rw.017 Bintaro South Jakarta 12330</td>
              </tr>

              <tr>
                <td className="tdTitle">e-mail</td>
                <td>:</td>
                <td>juripebrianto@gmail.com</td>
              </tr>

              <tr>
                <td className="tdTitle">Phone / WhatsApp</td>
                <td>:</td>
                <td>+62859 6665 5260</td>
              </tr>
            </table>

            <hr />

            <h5><u>Education Data</u></h5>
            <table className="table table-responsive">
              {/* SD */}
              <tr>
                <td className="tdTitle">Primary school</td>
                <td>:</td>
                <td className="tdTitleName">Madrasah Ibtidaiyah Miftahul Huda Cipayung Ciputat</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>22 June 2002 - No.DJ.II / K / 02 / MI.2 / 015/02</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>Scores 91 from 13 subject subjects</td>
              </tr>

              {/* SMP */}
              <tr>
                <td className="tdTitle">Junior high school</td>
                <td>:</td>
                <td className="tdTitleName">SMP Negri 1 Junior High School Ciputat</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>30 June 2005 - No.421 / 0028-Dispen / 2005</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>Scores 19.84 from 3 subject subjects</td>
              </tr>

              {/* SMA */}
              <tr>
                <td className="tdTitle">Senior high school</td>
                <td>:</td>
                <td className="tdTitleName">Arrahman Bojong Indah PKBM Bogor</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>21 July 2010 - No.01 / PC / 1300543</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>Scores 49.60 from 7 subject subjects</td>
              </tr>

              {/* KULIAH */}
              <tr>
                <td className="tdTitle">Bachelor's</td>
                <td>:</td>
                <td className="tdTitleName">Pamulang University - South Tangerang</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>Scientific Work - Design of Web-Based Digital Document Filing System</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>30 March 2016 - No.412023405 | GPA 3.10</td>
              </tr>

              {/* S2 */}
              <tr>
                <td className="tdTitle">Masters's</td>
                <td>:</td>
                <td className="tdTitleName">STMIK ERESHA Computer Science - South Tangerang</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>Scientific Papers - Sentiment Analysis of Cellular Internet Service Providers on Twitter Tweets Using the Naive Bayes Classifier Method</td>
              </tr>
              <tr>
                <td></td>
                <td>:</td>
                <td>10 August 2019 - No.551012019000404 | GPA 3.41</td>
              </tr>
            </table>

            <hr />

            <h5><u>Organizational Data</u></h5>
            <p>
              <ul>
                <li className="tdTitleName">Vespa Racing Indonesia</li>
                <p className="pJustify">
                  Non-profit organizations engaged in Vespa communities or associations from 2011 to 2016.
                  Events that are held motor racing, charity or assistance, community. My role in the organization is the Head of
                  Finance & Information Technology, I have the duty to manage income and expenditure of money. I joined since 2012.
                </p>
                <li className="tdTitleName">Learning Group </li>
                <p className="pJustify">
                  This is the Pamulang University IT student association formed to accommodate friends who want to learn programming,
                  share information about computer programming and information work. Activities that are often made are learning simple
                  programming for assignments or just practicing. I founded since 2013 during semester 2.
                </p>
              </ul>
            </p>

            <hr />

            <h5><u>Employment Data</u></h5>
            <p>
              <ul>
                <li className="tdTitleName">Jakarta Nanyang School - IT Staff</li>
                <p className="pJustify">
                  <u>Employment - 20 August 2014 to 31 December 2016</u>
                  <br />
                  Jakarta Nanyang School is an international school that uses English as a means of communication in teaching and learning
                  activities. Many activities in teaching and learning to use computers, especially MacBooks, therefore my role in repairing
                  damaged devices is very necessary. In addition to installing OSX and the Windows operating system, I was also assigned to
                  support the work of the teachers (teachers) and also the configuration of the network printer installation server. I also
                  assisted in inputting student score data for online report cards. I also helped with computer programs made using Asp and
                  PHP programming languages. Here are often held events as a memorial or performing arts student, taking photos and editing
                  videos that I worked with the marketing team.
                </p>
                <li className="tdTitleName">PT.Muloska Pratama (Mobiwin)</li>
                <p className="pJustify">
                  <u>Work - March 3, 2017 until now</u>
                  This company is a solution provider company for technology needs that offers various needs in technology (IT) such as Website,
                  Mobile Application, IoT and others, both from individuals or companies. Initially I worked on the part that deals with SMS Gateway
                  Engine for Premium SMS services (paid SMS) or the software built with the PHP programming language. As the company grows,
                  I also work on Web projects, many projects that I have worked on, I usually use PHP as a programming language, Codeigneter
                  as a framework, Bootstrap as a frontend framework, Flutter as a Mobile Framework and Mysql and Redis as a database
                  (Full stack programmer). I used to deploy the application / project to the server with the Linux operating system CentOs
                  and WHM Cpanel.
                  <br />
                  <br />
                  In June 2019 I was appointed as Project Head and I oversaw the Mobile Application Project, Website, Infrastructure and Network
                  Project. I work with the team as Head of Section as well as the Rest API Programmer and Flutter Programmer and help and give
                  direction to the team in working.
                </p>
              </ul>
            </p>

            <hr />

            <h5><u>Employment Data</u></h5>
            <p>
              <ul>
                <li className="tdTitleName">Programmer</li>
                <p>
                  LSP TIK Indonesia Surabaya, Indonesia - 31 March 2015
                </p>

                <li className="tdTitleName">TOEFL ITP </li>
                <p>
                  UIN Syarif Hidayatullah, Indonesia - 17 December 2016
                  <ul>
                    <li>Listening Comprehension = 47</li>
                    <li>Structure & Written Expressions = 36</li>
                    <li>Reading comprehension = 43</li>
                    <li>Total score = 420</li>
                  </ul>
                </p>
              </ul>
            </p>
            <hr />
          </div>
        ) : (
          <div>Juri Pebrianto CV Disable to View</div>
        )}
      </div>
    );
  }
}

export default Cv;