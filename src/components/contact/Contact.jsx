import { memo } from 'react';
import React from 'react';


import resets from './_resets.module.css';
import { BeforeIcon } from './BeforeIcon';
import { BeforeIcon2 } from './BeforeIcon2';
import { BeforeIcon3 } from './BeforeIcon3';
import { BeforeIcon4 } from './BeforeIcon4';
import { BeforeIcon5 } from './BeforeIcon5';
import { BeforeIcon6 } from './BeforeIcon6';
import { BeforeIcon7 } from './BeforeIcon7';
import { BeforeIcon8 } from './BeforeIcon8';
import classes from './Contact.module.css';
import { ImageIcon } from './ImageIcon';
import { ImageIcon2 } from './ImageIcon2';
import { ImageIcon3 } from './ImageIcon3';
import { SvgIcon } from './SvgIcon';


export default function Contact(){
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.divContainerFluid}>
        <div className={classes.divDFlex}>
          <div className={classes.heading1Margin}>
            <div className={classes.heading1Contact}>Contact</div>
          </div>
          <div className={classes.divDInlineFlexMargin}>
            <div className={classes.divDInlineFlex}>
              <div className={classes.pM}>
                <div className={classes.linkHome}>Home</div>
              </div>
              <div className={classes.pM2}>
                <div className={classes.unnamed}>/</div>
              </div>
              <div className={classes.pM3}>
                <div className={classes.contact}>Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.After}></div>
      </div>
      <div className={classes.divContainer}>
        <div className={classes.divSectionTitle}>
          <div className={classes.heading4}>
            <div className={classes.contactUs}>Contact Us</div>
          </div>
          <div className={classes.heading1}>
            <div className={classes.feelFreeToContact}>Feel Free To Contact</div>
          </div>
          <div className={classes.After2}></div>
        </div>
        <div className={classes.divRow}>
          <div className={classes.divColSm4Margin}>
            <div className={classes.divColSm4}>
              <div className={classes.iFa2x}>
                <div className={classes.symbol}></div>
              </div>
              <div className={classes.heading42}>
                <div className={classes.address}>Address</div>
              </div>
              <div className={classes.p}>
                <div className={classes._123StreetNewYorkUSA}>123 Street, New York, USA</div>
              </div>
            </div>
          </div>
          <div className={classes.divColSm4Margin2}>
            <div className={classes.divColSm42}>
              <div className={classes.iFa2x2}>
                <div className={classes.symbol2}></div>
              </div>
              <div className={classes.heading43}>
                <div className={classes.phone}>Phone</div>
              </div>
              <div className={classes.p2}>
                <div className={classes._123456789}>+012 345 6789</div>
              </div>
            </div>
          </div>
          <div className={classes.divColSm4Margin3}>
            <div className={classes.divColSm43}>
              <div className={classes.iFar}>
                <div className={classes.symbol3}></div>
              </div>
              <div className={classes.heading44}>
                <div className={classes.email}>Email</div>
              </div>
              <div className={classes.p3}>
                <div className={classes.infoExampleCom}>info@example.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divRow2}>
          <div className={classes.divColMd6}>
            <div className={classes.iframe}>
              <div className={classes.body}>
                <div className={classes.divMapDiv}>
                  <div className={classes.div}>
                    <div className={classes.divGmStyle}>
                      <div className={classes.div2}>
                        <div className={classes.vt}></div>
                        <div className={classes.vt2}></div>
                        <div className={classes.vt3}></div>
                        <div className={classes.vt4}></div>
                        <div className={classes.vt5}></div>
                        <div className={classes.vt6}></div>
                        <div className={classes.vt7}></div>
                        <div className={classes.vt8}></div>
                        <div className={classes.vt9}></div>
                      </div>
                      <div className={classes.div3}>
                        <div className={classes.div4}>
                          <div className={classes.divPlaceCard}>
                            <div className={classes.divPlaceDescLarge}>
                              <div className={classes.divPlaceName}>
                                <div className={classes.newYork}>New York</div>
                              </div>
                              <div className={classes.divAddress}>
                                <div className={classes.unitedStates}>United States</div>
                              </div>
                            </div>
                            <div className={classes.divNavigate}>
                              <div className={classes.linkGetDirectionsToThisLocatio}>
                                <div className={classes.divIcon}></div>
                                <div className={classes.divNavigateText}>
                                  <div className={classes.directions}>
                                    <a
                                      href='https://maps.google.com/maps/dir//New+York+United+States/@43.2994285,-74.2179326,6z/data=!4m5!4m4!1m0!1m2!1m1!1s0x4ccc4bf0f123a5a9:0xddcfc6c1de189567'
                                      target='_blank'
                                      rel='noreferrer'
                                      className={classes.textBlock}
                                    >
                                      Directions
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={classes.divBottomActions}>
                              <div className={classes.linkViewLargerMapViewLargerMap}>
                                <a
                                  href='https://maps.google.com/maps'
                                  target='_blank'
                                  rel='noreferrer'
                                  className={classes.textBlock2}
                                >
                                  View larger map
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.divGmnoprint}>
                        <div className={classes.div5}>
                          <div className={classes.buttonZoomIn}>
                            <div className={classes.image}>
                              <div className={classes.imageFill}>
                                <div className={classes.image2}>
                                  <ImageIcon className={classes.icon} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={classes.div6}></div>
                          <div className={classes.buttonZoomOut}>
                            <div className={classes.image3}>
                              <div className={classes.imageFill2}>
                                <div className={classes.image4}>
                                  <ImageIcon2 className={classes.icon2} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.div7}>
                        <div className={classes.image5}>
                          <div className={classes.imageFill3}>
                            <div className={classes.image6}>
                              <ImageIcon3 className={classes.icon3} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.div8}>
                        <div className={classes.divGmnoprint2}>
                          <div className={classes.divGmStyleCc}>
                            <div className={classes.div9}>
                              <div className={classes.div10}></div>
                            </div>
                            <div className={classes.div11}>
                              <div className={classes.buttonKeyboardShortcutsKeyboar}>Keyboard shortcuts</div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.divGmnoprint3}>
                          <div className={classes.divGmStyleCc2}>
                            <div className={classes.div12}>
                              <div className={classes.div13}></div>
                            </div>
                            <div className={classes.div14}>
                              <div className={classes.mapData2024GoogleINEGI}>Map data ©2024 Google, INEGI</div>
                            </div>
                          </div>
                        </div>
                        <div className={classes.divGmnoprint4}>
                          <div className={classes.div15}>
                            <div className={classes.div16}></div>
                          </div>
                          <div className={classes.div17}>
                            <div className={classes.linkTerms}>
                              <a
                                href='https://www.google.com/intl/en_BD/help/terms_maps.html'
                                target='_blank'
                                rel='noreferrer'
                                className={classes.textBlock3}
                              >
                                Terms
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.div18}>
                        <div className={classes.div19}>
                          <button className={classes.buttonShowSatelliteImagery}>
                            <div className={classes.divGmInsetMapImpl}>
                              <div className={classes.div20}>
                                <div className={classes.regionMap}>
                                  <div className={classes.kh}></div>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divColMd62}>
            <div className={classes.form}>
              <div className={classes.input}>
                <div className={classes.divPlaceholder}>
                  <div className={classes.yourName}>Your Name</div>
                </div>
              </div>
              <div className={classes.input2}>
                <div className={classes.divPlaceholder2}>
                  <div className={classes.yourEmail}>Your Email</div>
                </div>
              </div>
              <div className={classes.input3}>
                <div className={classes.divPlaceholder3}>
                  <div className={classes.subject}>Subject</div>
                </div>
              </div>
              <div className={classes.textarea}>
                <div className={classes.divPlaceholder4}>
                  <div className={classes.message}>Message</div>
                </div>
              </div>
              <div className={classes.div21}>
                <button className={classes.button}>
                  <div className={classes.sendMessage}>Send Message</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divContainerFluid2}>
        <div className={classes.group2}>
          <div className={classes.divBgGradientToR}>
            <div className={classes.divContainer2}>
              <div className={classes.divFlex}>
                <div className={classes.divAosInit}>
                  <div className={classes.link}>
                    <div className={classes.imgMargin}>
                      <div className={classes.coffee_logoPng}></div>
                    </div>
                    <div className={classes.cafeBlack}>CafeBlack</div>
                  </div>
                </div>
                <div className={classes.divFlex2}>
                  <div className={classes.list}>
                    <div className={classes.item}>
                      <div className={classes.linkHome2}>Home</div>
                    </div>
                    <div className={classes.item2}>
                      <div className={classes.linkServices}>
                        <a
                          href='http://localhost:5173/#services'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock4}
                        >
                          Services
                        </a>
                      </div>
                    </div>
                    <div className={classes.item3}>
                      <div className={classes.linkAbout}>About</div>
                    </div>
                  </div>
                  <button className={classes.button2}>
                    <div className={classes.order}>Order</div>
                    <div className={classes.sVG}>
                      <SvgIcon className={classes.icon4} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divTextWhite}>
        <div className={classes.divContainer3}>
          <div className={classes.divRow3}>
            <div className={classes.divColLg4}>
              <div className={classes.divFooterWidget}>
                <div className={classes.heading5}>
                  <div className={classes.aboutInfo}>About Info</div>
                </div>
                <div className={classes.p4}>
                  <div className={classes.thisIsThePerfectPlaceToFindANi}>
                    <div className={classes.textBlock5}>This is the perfect place to find a nice and cozy spot to</div>
                    <div className={classes.textBlock6}>sip some. You&#39;ll find the Java Jungle.</div>
                  </div>
                </div>
                <div className={classes.list2}>
                  <div className={classes.item4}>
                    <div className={classes.Before}>
                      <div className={classes.icon5}>
                        <BeforeIcon className={classes.icon6} />
                      </div>
                    </div>
                    <div className={classes.addresssRueBerkaneMorocco}>Addresss: rue Berkane , Morocco</div>
                  </div>
                  <div className={classes.item5}>
                    <div className={classes.Before2}>
                      <div className={classes.icon7}>
                        <BeforeIcon2 className={classes.icon8} />
                      </div>
                    </div>
                    <div className={classes.emailAyoubtahiri104GmailCom}>Email: ayoubtahiri104@gmail.com</div>
                  </div>
                  <div className={classes.item6}>
                    <div className={classes.Before3}>
                      <div className={classes.icon9}>
                        <BeforeIcon3 className={classes.icon10} />
                      </div>
                    </div>
                    <div className={classes.phone123456789}>Phone: (012) 345 6789</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divColLg3}>
              <div className={classes.divFooterWidget2}>
                <div className={classes.heading52}>
                  <div className={classes.information}>Information</div>
                </div>
                <div className={classes.list3}>
                  <div className={classes.item7}>
                    <div className={classes.link2}>
                      <div className={classes.Before4}></div>
                      <div className={classes.returnsPolicy}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock7}
                        >
                          Returns Policy
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item8}>
                    <div className={classes.link3}>
                      <div className={classes.Before5}></div>
                      <div className={classes.supportPolicy}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock8}
                        >
                          Support Policy
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item9}>
                    <div className={classes.link4}>
                      <div className={classes.Before6}></div>
                      <div className={classes.sizeGuide}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock9}
                        >
                          Size Guide
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item10}>
                    <div className={classes.link5}>
                      <div className={classes.Before7}></div>
                      <div className={classes.fAQs}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock10}
                        >
                          FAQs
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item11}>
                    <div className={classes.link6}>
                      <div className={classes.Before8}></div>
                      <div className={classes.privacyPolicy}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock11}
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divColLg32}>
              <div className={classes.divFooterWidget3}>
                <div className={classes.heading53}>
                  <div className={classes.quickLinks}>Quick Links</div>
                </div>
                <div className={classes.list4}>
                  <div className={classes.item12}>
                    <div className={classes.link7}>
                      <div className={classes.Before9}></div>
                      <div className={classes.aboutUs}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock12}
                        >
                          About us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item13}>
                    <div className={classes.link8}>
                      <div className={classes.Before10}></div>
                      <div className={classes.wishlist}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/wishlist.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock13}
                        >
                          Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item14}>
                    <div className={classes.link9}>
                      <div className={classes.Before11}></div>
                      <div className={classes.myAccount}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/my-account.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock14}
                        >
                          My Account
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item15}>
                    <div className={classes.link10}>
                      <div className={classes.Before12}></div>
                      <div className={classes.login}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/login.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock15}
                        >
                          Login
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item16}>
                    <div className={classes.link11}>
                      <div className={classes.Before13}></div>
                      <div className={classes.register}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/register.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock16}
                        >
                          Register
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.divColLg2}>
              <div className={classes.divFooterWidget4}>
                <div className={classes.heading54}>
                  <div className={classes.followUsOn}>Follow Us On</div>
                </div>
                <div className={classes.list5}>
                  <div className={classes.item17}>
                    <div className={classes.link12}>
                      <div className={classes.Before14}>
                        <div className={classes.icon11}>
                          <BeforeIcon4 className={classes.icon12} />
                        </div>
                      </div>
                      <div className={classes.facebook}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock17}
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item18}>
                    <div className={classes.link13}>
                      <div className={classes.Before15}>
                        <div className={classes.icon13}>
                          <BeforeIcon5 className={classes.icon14} />
                        </div>
                      </div>
                      <div className={classes.twitter}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock18}
                        >
                          Twitter
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item19}>
                    <div className={classes.link14}>
                      <div className={classes.Before16}>
                        <div className={classes.icon15}>
                          <BeforeIcon6 className={classes.icon16} />
                        </div>
                      </div>
                      <div className={classes.instagram}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock19}
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item20}>
                    <div className={classes.link15}>
                      <div className={classes.Before17}>
                        <div className={classes.icon17}>
                          <BeforeIcon7 className={classes.icon18} />
                        </div>
                      </div>
                      <div className={classes.youtube}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock20}
                        >
                          Youtube
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={classes.item21}>
                    <div className={classes.link16}>
                      <div className={classes.Before18}>
                        <div className={classes.icon19}>
                          <BeforeIcon8 className={classes.icon20} />
                        </div>
                      </div>
                      <div className={classes.pinterest}>
                        <a
                          href='https://htmldemo.net/kofi/kofi/about-us.html'
                          target='_blank'
                          rel='noreferrer'
                          className={classes.textBlock21}
                        >
                          Pinterest
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.divContainer4}></div>
        <div className={classes.divRow4}>
          <div className={classes.divColMdAutoMargin}>
            <div className={classes.divColMdAuto}>
              <div className={classes.pFooterCopyright}>
                <div className={classes.copyrightKofi2023}>
                  <p className={classes.labelWrapper}>
                    <span className={classes.label}>Copyright </span>
                    <span className={classes.label2}>Kofi</span>
                    <span className={classes.label3}> ©2023</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.divColMdAutoMargin2}>
            <div className={classes.divColMdAuto2}>
              <div className={classes.divFooterPayment}>
                <div className={classes.footerPaymentPng}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
